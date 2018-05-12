Rails.application.routes.draw do
  post 'view/degree'

  get 'view/tree'

  get 'courses/index'
  get 'courses/input'
  root 'courses#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
