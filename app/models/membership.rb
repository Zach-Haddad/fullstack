# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  group_id   :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ActiveRecord::Base
  validates_uniqueness_of :member_id, scope: :group_id

  belongs_to :member,
  foreign_key: :member_id,
  class_name: "User"

  belongs_to :group,
  foreign_key: :group_id
end
