class AddChallengeRefToComments < ActiveRecord::Migration[5.0]
  def change
    add_reference :comments, :challenge, foreign_key: true
  end
end
