const ENDPOINT = 'http://127.0.0.1:8000'

const getMovements = ({ jwt }) => {
  return fetch(`${ENDPOINT}/api/movements/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { movements } = res
    return movements
  })
}

export default getMovements
