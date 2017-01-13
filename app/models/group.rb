class Group < ActiveRecord::Base
  validates :group_owner_id, :name, presence: true

  has_many :users

  belongs_to :owner,
  foreign_key: :owner_id

end
