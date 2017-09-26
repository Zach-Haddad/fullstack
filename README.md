# TrekMates

[Live][trekmates]

[trekmates]: http://trekmates.club

![Alt_Text](http://res.cloudinary.com/zach/image/upload/v1484956203/Screen_Shot_2017-01-20_at_3.49.24_PM_jlj9zq.png)

TrekMates is a web application for endurance athletes, inspired by Meetup and built using Ruby on Rails and React/Redux.  In its current state, users have the ability to create groups, join and leave groups, and create and RSVP for events.  The ultimate goal for this project is to allow users to be matched with groups and other users based on their running and cycling preferences and weekly schedules!

## Features & Implementation

### User Signup and Authentication
Front-end authentication has been implemented utilizing the bcrypt hashing function.  Usernames are unique.  Account creation is a simple one step process at this time, accepting a username and a password. A simple demo login has been provided.

### Creating and Joining Groups
Users have the ability to join any group.  Group creators have the ability to delete their group.  Group membership is automatically generated once a user creates a group.

### Creating and RSVPing for Events
All members of a group may create an activity for that group.  Members who have not already RSVP'd may do so.  Other users must first join the group before they may RSVP.  Event creation automatically rsvp's the event creator for the event.  Event creators may delete their event.

![Alt Text](http://res.cloudinary.com/zach/image/upload/v1506452522/readme3.png)

### Search Filters
In its current state, the search function allows users to search for groups by group name.  Users may also use a simple filter to display groups that they belong to, as well as all existing groups. A separate redux cycle is implemented for the search that passes a filter param to the backend, which then produces the correct list of groups.

[rbc]: https://github.com/intljusticemission/react-big-calendar

![Alt Text](http://res.cloudinary.com/zach/image/upload/v1484955876/Screen_Shot_2017-01-20_at_3.44.00_PM_fc2hg6.png)

### Group Calendars
[React-big-calendar][rbc] was used to display a calendar for each group's events.  Calendar items link to the respective event page.

![Alt Text](http://res.cloudinary.com/zach/image/upload/v1506452522/readme2.png)

## Features In Progress

### Advanced Search Filters
Users will have the ability to filter groups and events based on date, discipline (running, cycling, etc) and group location.

### Posting Event Routes
Event coordinators will have the ability to add an optional, pretraced route to their activity.  This will be implemented with Google Maps Api.

### Comments
Implementation of comments system for groups and events.

### User Profile Customization
Athletes will have the ability to add various parameters to their profile for advanced matchmaking (height, weight, average weekly mileage, etc).  Account linking with Strava.

### Group and Friend Matchmaking
Users will be able to match with other groups and users based on provided information, weekly schedule overlap!
