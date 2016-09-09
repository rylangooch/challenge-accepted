class ChallengesController < JSONAPI::ResourceController
  include Knock::Authenticable
  
  before_action :authenticate
end
