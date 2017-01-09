#TrekMates

[Heroku link][heroku] **Note:** This should be a link to your production site

[Trello link][trello]

[heroku]: http://trekmates.herokuapp.com/
[trello]: https://trello.com/fullstackzachhaddad

##Minimum Viable Product

TrekMates is a web application for endurance athletes, inspired by Meetup and built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

 Hosting on Heroku
 New account creation, login, and guest/demo login
 Creating and Joining Groups
 Creating and RSVPing for Events
 Calendar of Events for Groups
 Search Groups by Location and Group Info
 Production README

## Design Docs
 * [View Wireframes][wireframes]
 * [React Components][components]
 * [API endpoints][api-endpoints]
 * [DB schema][schema]
 * [Sample State][sample-state]

 [wireframes]: wireframes
 [components]: component-hierarchy.md
 [sample-state]: sample-state.md
 [api-endpoints]: api-endpoints.md
 [schema]: schema.md

##Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Home Page, Sign In, Sign Up (1 day)

**Objective:** Functional sign up and sign in;  Default Home Page will display upcoming events for signed in users once groups implemented.

### Phase 3: Groups (2 day)

**Objective:** Group pages; ability to create, join and leave groups.  Group owners can edit and delete groups.

### Phase 4: Events (2 days)

**Objective:** Event info pages.  Ability for group members to create events.  Event owner and Group owner may edit/delete event.  Group members may RSVP.

### Phase 5: Group Calendar (1 day)

**objective:** Group page displays list of upcoming events

### Phase 6: - Group Search (1 day)

**objective:** Search for group based on location and group description

### Bonus Features (TBD)
- [ ] Group categories and User Disciplines
- [ ] Optional ability to add pre-traced run/ride route while creating event using google maps.
- [ ] Functional Comments Section for Events (and possibly for Group Page)
- [ ] Recommend Groups based on user info, discipline
- [ ] Friends List; Recommend Friends based on user-provided parameters (disipline, weekly mileage, avg pace, location, etc)
- [ ] Ambitious, endgame: Groups may set default weekly runs/rides.  Users may set their preferred run/ride schedule.  Group AND Friend recommendation based on schedule overlap.
