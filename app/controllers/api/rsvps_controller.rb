class Api::RsvpsController < ApplicationController
  def delete
    target = Rsvp.find_by(user_id: current_user.id, event_id: params[:event_id].to_i)
    @event = Event.find(params[:event_id].to_i)
    target.delete
    render 'api/events/show'
  end

  def create
    @rsvp = Rsvp.new(user_id: params[:user_id].to_i, event_id: params[:event_id].to_i);
    if @rsvp.save
      @group = Group.find(params[:group_id])
      render 'api/groups/show'
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  private

  def rsvp_params
  end
end
