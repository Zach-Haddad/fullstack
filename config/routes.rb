Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :user, only: [:create, :show, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:create, :destroy, :show, :index, :update] do
      resources :events, only: [:create]
    end
    resources :events, only: [:index, :show, :update, :destroy]
    resources :rsvps, only: [:create]
    delete '/rsvps', to: 'rsvps#delete'
    resources :memberships, only: [:create]
    delete '/memberships', to: 'memberships#delete'
  end
end

# get 'search' on :collection
