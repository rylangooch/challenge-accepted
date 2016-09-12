class ChallengesController < ApplicationController
  # before_action :authenticate

  def index
    render json: Challenge.all
  end
end
