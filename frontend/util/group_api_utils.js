export const fetchGroups = () => (
  $.ajax({
    method: "GET",
    url: `api/groups`
  })
);

// add filter into this

export const fetchGroup = (groupId) => (
  $.ajax({
    method: "GET",
    url: `api/groups/${groupId}`
  })
);

// export const fetchGroupUsers = (groupId) => (
//   $.ajax({
//     method: "GET",
//     url: ``
//   })
// )

export const createGroup = (group) => (
  $.ajax({
    method: "POST",
    url: `api/groups`,
    data: { group }
  })
);

export const editGroup = (group) => (
  $.ajax({
    method: "PATCH",
    url: `api/groups/${group.id}`,
    data: { group }
  })
);

export const deleteGroup = (groupId) => (
  $.ajax({
    method: "DELETE",
    url: `api/groups/${groupId}`
  })
);

export const addUserToGroup = (groupId) => (
  $.ajax({
    method: "POST",
    url: `api/groups/${groupId}/join`
  })
);

export const removeUserFromGroup = (groupId) => (
  $.ajax({
    method: "DELETE",
    url: `api/groups/${groupId}/leave`
  })
);
