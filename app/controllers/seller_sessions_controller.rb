class SellerSessionsController < ApplicationController
    def create
        seller = Seller.find_by(username: params[:username])
        if seller&.authenticate(params[:password])
            session[:seller_id] = seller.id 
            render json: seller, status: :created
        else 
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end 
    end 
    def destroy
        if session[:seller_id]
            session.delete :seller_id
            head :no_content
        else 
            render json: {errors: ["Not logged in"]}
        end 
    end 
end
