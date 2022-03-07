class AddToColumnItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :to_do_date, :datetime
  end
end
