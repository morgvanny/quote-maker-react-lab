# frozen_string_literal: true

class SessionsController < ApplicationController
  def show
    render json: current_user
  end

  def create
    user = User.find_by_username(params[:user][:username])
    if user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: {}
    end
  end

  def destroy
    session.clear
    render json: {}
  end
end
