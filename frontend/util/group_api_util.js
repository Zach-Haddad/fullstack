export const fetchGroups = (data) => (
  $.ajax({
    method: "GET",
    url: `api/groups`,
    data
  })
);
// data is filters

export const fetchGroup = (groupId) => (
  $.ajax({
    method: "GET",
    url: `api/groups/${groupId}`
  })
);

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

export const addUserToGroup = (data) => (
  $.ajax({
    method: "POST",
    url: `api/memberships`,
    data
  })
);

export const removeUserFromGroup = (data) => (
  $.ajax({
    method: "DELETE",
    url: `api/memberships`,
    data
  })
);
