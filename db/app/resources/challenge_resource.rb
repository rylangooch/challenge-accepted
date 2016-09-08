class ChallengeResource < JSONAPI::Resource
  attributes :title, :description, :challengers, :ante, :winner, :ante_settled
  has_many :comments
  has_one :user
end
