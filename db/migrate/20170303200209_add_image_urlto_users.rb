class AddImageUrltoUsers < ActiveRecord::Migration
  def change
    add_column :users, :image_url, :string
    add_column :groups, :image_url, :string
  end
end
