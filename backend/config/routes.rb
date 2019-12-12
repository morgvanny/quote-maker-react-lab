# frozen_string_literal: true

Rails.application.routes.draw do
  resources :quotes
  resources :users do
    resources :quotes
  end
  get 'profile', to: 'sessions#show'
  post 'sign_in', to: 'sessions#create'
  delete 'sign_out', to: 'sessions#destroy'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
