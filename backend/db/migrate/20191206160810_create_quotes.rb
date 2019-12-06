class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.string :content
      t.string :author
      t.integer :votes

      t.timestamps
    end
  end
end
