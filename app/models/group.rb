# == Schema Information
#
# Table name: groups
#
#  id             :integer          not null, primary key
#  group_owner_id :integer          not null
#  name           :string           not null
#  description    :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Group < ActiveRecord::Base
  validates :group_owner_id, :name, presence: true
  validates :name, uniqueness: true

  has_many :memberships
  has_many :events

  has_many :members, through: :memberships, source: :member

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :group_owner_id,
  class_name: "User"
end
