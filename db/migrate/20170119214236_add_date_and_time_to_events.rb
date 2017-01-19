class AddDateAndTimeToEvents < ActiveRecord::Migration
  def change
    add_column :events, :date, :date, null:false
    add_column :events, :time, :time, null:false
  end
end
