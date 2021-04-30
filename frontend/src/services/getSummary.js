const ENDPOINT = 'http://127.0.0.1:8000'

const getSummary = ({ jwt }) => {
  return fetch(`${ENDPOINT}/api/summary/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => { return res })
}

export default getSummary
