class CreateChallenges < ActiveRecord::Migration[5.0]
  def change
    create_table :challenges do |t|
      t.string :title
      t.string :description
      t.string :challengers
      t.string :ante
      t.string :winner
      t.boolean :ante_settled

      t.timestamps
    end
  end
end
