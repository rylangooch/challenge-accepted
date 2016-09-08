class UserResource < JSONAPI::Resource
  attributes :name, :email
  has_many :comments
  has_many :challenges
end
