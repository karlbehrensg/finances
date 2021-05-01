const ENDPOINT = 'http://127.0.0.1:8000'

const getDebts = ({ jwt }) => {
  return fetch(`${ENDPOINT}/api/debts/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  })
}

export default getDebts
