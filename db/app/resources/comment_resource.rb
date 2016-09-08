class CommentResource < JSONAPI::Resource
  attributes :user_id, :challenge_id, :message
  has_one :user
  has_one :challenge
end
