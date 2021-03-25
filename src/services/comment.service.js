const _TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZTUwYjg5YzI2ZjAwMTU3ZjljMjUiLCJpYXQiOjE2MTU5Nzk3ODgsImV4cCI6MTYxNzE4OTM4OH0.WcP_JTyt41dgu6od_ZVyVXJajUjqEzvVn1c4VmExnsI'

export async function ADD_COMMENT(comment = {}) {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        method: 'POST',
        contentType: 'application/json',
        headers: {
          accepts: 'application/json',
          authorization: `Bearer ${_TOKEN}`
        },
        body: JSON.stringify(comment)
      }
    )

    if (response.ok) {
      const _DATA = await response.json()
      console.log('service.ADD_COMMENT' + _DATA)
      return _DATA
    }
  } catch (err) {
    console.error(err)
  }
}

export async function GET_ALL_COMMENTS(ASIN) {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        method: 'GET',
        contentType: 'application/json',
        headers: {
          authorization: `Bearer ${_TOKEN}`
        }
      }
    )

    if (response.ok) {
      const _DATA = await response.json()
      console.log(_DATA)
      return _DATA
    }
  } catch (err) {
    console.error(err)
  }
}
