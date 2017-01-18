class Api::EventsController < ApplicationController
  def create
  end

  def update
  end

  def index
  end

  def destroy
  end

  def show
  end

  private

  def event_params
    params.require(:event).permit(:name, :group_id, :time, :location, :description)
  end

end
