class CustomerSessionsController < ApplicationController
    def create
        customer = Customer.find_by(username: params[:username])
        if customer&.authenticate(params[:password])
            session[:customer_id] = customer.id 
            cookies[:shopping_cart] = customer.shopping_cart
            render json: customer, status: :created
        else 
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end 
    end 
    def destroy
        if session[:customer_id]
            session.delete :customer_id
            head :no_content
        else 
            render json: {errors: ["Not logged in"]}
        end 
    end 
end
