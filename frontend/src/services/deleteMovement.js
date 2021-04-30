const ENDPOINT = 'http://127.0.0.1:8000'

const createMovement = ({ jwt, id }) => {
  const body = { id }

  return fetch(`${ENDPOINT}/api/movements/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export default createMovement
