const ENDPOINT = 'http://127.0.0.1:8000'

const createMovement = ({ jwt, expired, agent, income, amount, category }) => {
  return fetch(`${ENDPOINT}/api/movements/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ expired, agent, income, amount, category })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => { return res })
}

export default createMovement
