## Component Hierarchy

**AuthFormContainer**
 - AuthForm (log in)

**SplashContainer**
 - Header
  - Log in
  - Sign in
  - Demo
 - SplashPage
 - Footer

**SignUpContainer**
- SignUpPage

**HomeContainer**
- Header
  -Profile
  -My Groups
  -My Events
  -Create Group
- Footer

**ProfileFormContainer**
-Edit profile

**GroupFormContainer**
-Group Form (new group)

**GroupSearchContainer**
  + GroupSearch

**GroupIndexContainer**
 - Group Detail
  - Group Page
  - Create Event

**Calendar Container**
  -Calendar

**EventsContainer**
 - EventsIndex
  + EventsIndexItem
- Event Creation

**EventFormContainer**
- Event Form

## Routes

|Path   | Component   |
|-------|-------------|
|"/"    | "App"       |
| "/welcome" | "SplashContainer" |
| "/welcome/sign-in" | "AuthFormContainer" |
| "/welcome/sign-up" | "SignUpContainer" |
| "/home" | "HomeContainer" |
| "/home/search-results" | "GroupSearchContainer"
| "/group/create" | "GroupFormContainer" |
| "/group/:groupId" | "GroupIndexContainer" |
| "/group/:groupId/events" | "EventsContainer" |
| "/group/:groupId/events/create" | "EventFormContainer" |
| "/group/:groupId/events/:eventId" | "EventContainer" |
| "/group/:user/:userId/edit" | "ProfileFormContainer" |
