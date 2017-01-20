json.extract! @event, :id, :name, :date, :description, :time, :attendees, :group, :owner, :event_owner_id

json.attendeeIds @event.attendees.pluck("user_id")
