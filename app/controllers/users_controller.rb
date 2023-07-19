class UsersController < ApplicationController
    def show
        customer_user = Customer.find_by(id: session[:customer_id])
        seller_user = Seller.find_by(id: session[:seller_id])
        if customer_user
            render json: customer_user, serializer: CustomersSerializer
        elsif seller_user
            render json: seller_user, serializer: SellersSerializer
        else 
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end 
    end 
end
