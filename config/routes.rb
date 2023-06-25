Rails.application.routes.draw do
  
  resources :sellers, only: [:show,:index] do 
    resources :reviews, only: [:show,:index]
  end 
  resources :sellers, only: [:show,:index] do 
    resources :items, only: [:show,:index]
  end 
  resources :customers, :reviews, :sellers, :sessions,:items, only: [:create,:show,:destroy,:update,:index]
  get '/sellers/:seller_id/items', to: 'items#index'
  post '/customerLogin', to: 'customer_sessions#create'
  delete '/customerLogout', to: 'customer_sessions#destroy'
  post '/sellerLogin', to: 'seller_sessions#create'
  delete '/sellerLogout', to: 'seller_sessions#destroy'
  post '/reviews', to: 'reviews#create'
  get '/sellers/:seller_id/reviews', to: 'reviews#index'
  post '/customerSignup', to: 'customers#create'
  post '/sellerSignup', to: 'sellers#create'
  get '/me', to: 'users#show'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
