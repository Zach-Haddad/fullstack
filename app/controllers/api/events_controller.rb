class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)

    if @event.save
      Rsvp.create(event_id: @event.id, user_id: current_user.id)
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    @events = Event.all
    render "api/events/index"
  end
  # implement search here

  def destroy
    @event = Event.find(params[:id])
    @group = Group.find(@event.group.id)
    @event.delete
    render 'api/groups/show'
  end

  def show
    @event = Event.find(params[:id])
    render 'api/events/show'
  end

  private

  def event_params
    params.require(:event).permit(:name, :event_owner_id, :date, :group_id, :time, :location, :description)
  end

end
