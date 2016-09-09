class UsersController < JSONAPI::ResourceController
  include Knock::Authenticable

  before_action :authenticate
end
