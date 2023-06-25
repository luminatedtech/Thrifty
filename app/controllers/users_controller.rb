class UsersController < ApplicationController
    def show
        customer_user = Customer.find_by(id: session[:customer_id])
        seller_user = Seller.find_by(id: session[:seller_id])
        if customer_user
            render json: customer_user
        elsif seller_user
            render json: seller_user
        else 
            render json: {errors: ["Not authorized"]}
        end 
    end 
end
