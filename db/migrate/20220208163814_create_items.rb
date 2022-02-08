class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.text :notes
      t.boolean :completed

      t.timestamps
    end
  end
end
