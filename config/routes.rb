Rails.application.routes.draw do
  root to: "games#index"
  get 'games/index'
end
