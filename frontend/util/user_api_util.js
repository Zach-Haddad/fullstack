export const fetchUser = (userId) => (
  $.ajax({
    method: "GET",
    url: `api/user/${userId}`
  })
);

export const editUser = (user) => (
  $.ajax({
    method: "PATCH",
    url: `api/user/${user.id}`,
    data: { user }
  })
);
