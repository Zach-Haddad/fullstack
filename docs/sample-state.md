{
  currentUser: {
    id:1,
    username: "user"
  },
  forms:  
    signUp: {errors: []},
    logIn: {errors: []},
    createGroup: {errors: ["body can't be blank"]}
    createEvent: {errors: ["body can't be blank"]}
    }
  },
  groups: {
    1: {
      name: "Sample group name",
      description: "Sample group description",
      disciplines: ["roadrun", "trailrun"...],
      members: ["member1", "member2"...],
      events: {
        1: {
          title: "Sample event title",
          date: "date/time",
          category: "roadrun"
          attending: ["member1", "member2"...],
          location: "location"
          description: "Sample event description"
          group_id: "1"
        }
      }
    }
  }
}
