Rails.application.routes.draw do
  
  resources :sellers, only: [:show] do 
    resources :reviews, only: [:show,:index]
    resource :items, only: [:show,:index]
  end 
  resources :customers, :reviews, :sellers, :sessions,:items, only: [:create,:show,:destroy,:update,:index]
  get '/sellers/:seller_id/items', to: 'items#index'
  post '/sellers', to: 'sellers#create'
  post '/customerLogin', to: 'customer_sessions#create'
  delete '/customerLogout', to: 'customer_sessions#destroy'
  post '/sellerLogin', to: 'sellers_sessions#create'
  delete '/sellerLogout', to: 'sellers_sessions#destroy'
  post '/reviews', to: 'reviews#create'
  get '/sellers/:seller_id/reviews', to: 'reviews#index'
  post '/customerSignup', to: 'customers#create'
  post '/sellerSignup', to: 'sellers#create'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
