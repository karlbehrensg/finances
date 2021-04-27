const ENDPOINT = 'http://127.0.0.1:8000'

const createMovement = ({ jwt, id, expired, agent, income, amount, category, method }) => {
  const body = { id, expired, agent, income, amount, category }

  return fetch(`${ENDPOINT}/api/movements/`, {
    method: method,
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => { return res })
}

export default createMovement
