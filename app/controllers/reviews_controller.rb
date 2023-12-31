class ReviewsController < ApplicationController

    def create
        customer = Customer.find_by(id: session[:customer_id])
        review = customer.reviews.create(review_params)
        if review.valid? && session[:customer_id] = review.customer.id
            render json: review, status: :created
        else 
            render json: {errors: review.error.full_messages}, status: :unprocessable_entity
        end 
    end 
    def index
        if params[:seller_id]
            seller = Seller.find_by(id: params[:seller_id])
            reviews = seller.reviews
            render json: reviews, include: :customer
        else 
            reviews = Review.all
            render json: reviews, include: :customer
        end 
       
    end 
    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end 
    def update 
        review = Review.find_by(id: params[:id])
        if session[:customer_id] == review.customer.id
            review.update(review_params)
            if review.valid?
                render json: review
            else 
                render json: {errors: ["test error"]}
            end 
        else 
            render json: {errors: ["Test error"]}
        end 
    end 
private
def review_params
    params.permit(:title,:comment,:rating,:customer_id,:seller_id)
end 
end
