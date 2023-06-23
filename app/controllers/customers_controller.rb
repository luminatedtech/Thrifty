class CustomersController < ApplicationController
    def create
        customer = Customer.create(customer_params)
        session[:customer_id] = customer.id
        if customer.valid?
            render json: customer, status: :created
        else 
            render json: {errors: customer.errors.full_messages}, status: :unprocessable_entity
        end 
    end 
    def index
        customers = Customer.all
        render json: customers
    end 
    def show
        customer = Customer.find_by(id: params[:id])
        render json: customer
    end 
private 
    def customer_params
        params.permit(:username, :password, :password_confirmation)
    end 
end
