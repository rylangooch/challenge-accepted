class AddUserRefToChallenges < ActiveRecord::Migration[5.0]
  def change
    add_reference :challenges, :user, foreign_key: true
  end
end
