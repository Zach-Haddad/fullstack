Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:create, :destroy, :show, :index, :update] do
      resources :events, only: [:create]
    end
    resources :events, only: [:index, :show, :update, :destroy]
    resources :rsvps, only: [:create, :destroy]
    resources :memberships, only: [:create, :destroy]
  end
end
