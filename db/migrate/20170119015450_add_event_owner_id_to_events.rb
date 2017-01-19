class AddEventOwnerIdToEvents < ActiveRecord::Migration
  def change
    add_column :events, :event_owner_id, :integer, null:false
  end
end
