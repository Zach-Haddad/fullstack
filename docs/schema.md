# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
disciplines     | string    | not null, array: true
last_name       | string    |
first_name      | string    |
bio             | text      |

Note: disciplines will be an array, minimum length 1, can only include
values "roadrun", "trailrun", "roadbike", "mbike"

Note: Bonus data to include: height, weight, weekly_bike_miles, weekly_run_miles, strava_username, ultrasignup_username

## groups
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
group_owner_id  | integer   | not null, foreign key
name            | string    | not null
disciplines     | string    | not null, array: true
description     | text      |

## memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
group_id    | integer   | not null, foreign key

## events
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
group_id       | integer   | not null, foreign key
event_owner_id | integer   | not, null foreign key
title          | integer   | not null
category       | string    |
description    | text      | not null
date           | datetime  | not null
location       |           | not null 

Note: category will be restricted within the model;
"Workout", "Standard", "Long", "Easy"
May consider using tags/taggings method instead, though will only need fairly specific categories given limited subject matter.

Note: location either set with general zip code/address string or precise lat/long coords, still need to decide

Note:  Bonus data to include: avg_run_pace (min/mile), avg_ride_pace (mph)

## rsvps
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
event_id    | integer   | not null, foreign key
