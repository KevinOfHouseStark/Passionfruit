// signup
export const postUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

// login
export const postSession = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

// logout
export const deleteSession = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);