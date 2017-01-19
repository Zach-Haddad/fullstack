# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  lname           :string
#  fname           :string
#  bio             :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :memberships,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: "Membership"

  has_many :groups, through: :memberships, source: :group

  has_many :owned_groups,
  primary_key: :id,
  foreign_key: :group_owner_id,
  class_name: "Group"

  has_many :owned_events,
  primary_key: :id,
  foreign_key: :event_owner_id,
  class_name: "Event"

  has_many :rsvps
  has_many :events, through: :rsvps, source: :event

  attr_reader :password

  after_initialize :ensure_session_token

  def self.next_event(user_id)
    User.find(user_id).events.where("events.time > ?", Time.new).order(:event_time).limit(1)
  end

  # auth

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
end
