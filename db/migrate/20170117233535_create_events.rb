class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.integer :group_id, null: false
      t.datetime :time, null: false
      t.string :location, null: false
      t.text :description, null: false
      t.timestamps null: false
    end
  end
end
