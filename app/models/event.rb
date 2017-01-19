# == Schema Information
#
# Table name: events
#
#  id             :integer          not null, primary key
#  name           :string           not null
#  group_id       :integer          not null
#  location       :string           not null
#  description    :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  event_owner_id :integer          not null
#  date           :date             not null
#  time           :time             not null
#

class Event < ActiveRecord::Base
  validates :name, :date, :event_owner_id, :group_id, :time, :location, :description, presence: true

  has_many :rsvps
  has_many :attendees, through: :rsvps, source: :user

  belongs_to :group

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :event_owner_id,
  class_name: "User"
  #
  # def self.find_user_events(user_id)
  #   groups = User.find(user_id).groups
  #   group_ids = groups.map(&:id)
  #   events = Event.joins(:group).where("group.id IN (?)", group_ids)
  #   events
  # end
end
