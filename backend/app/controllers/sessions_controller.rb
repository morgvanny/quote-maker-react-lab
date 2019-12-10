# frozen_string_literal: true

class SessionsController < Devise::SessionsController
  respond_to :json
  def create
    super do |_user|
      byebug
    end
  end
end
