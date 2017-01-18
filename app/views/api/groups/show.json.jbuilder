json.extract! @group, :id, :name, :group_owner_id,
  :description, :members, :created_at, :updated_at, :events, :owner

json.memberIds @group.members.pluck("member_id")
