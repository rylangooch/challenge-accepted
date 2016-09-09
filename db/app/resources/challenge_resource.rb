class ChallengeResource < JSONAPI::Resource
  attributes :title, :description, :challengers, :ante, :winner, :ante_settled, :user_id
  has_many :comments
  has_one :user
end
