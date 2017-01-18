class Api::RsvpsController < ApplicationController
  def delete
    @event = Event.find(params[:id])
    Rsvp.where(user_id: current_user.id).where(event_id: @event.id).limit(1)
  end

  def create
  end

  private

  def rsvp_params
  end
end
