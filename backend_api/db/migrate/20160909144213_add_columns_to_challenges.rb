class AddColumnsToChallenges < ActiveRecord::Migration[5.0]
  def change
    add_column :challenges, :title, :string
    add_column :challenges, :ante, :string
  end
end
