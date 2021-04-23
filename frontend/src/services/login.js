const ENDPOINT = 'http://127.0.0.1:8000'

const login = ({ username, password }) => {
  return fetch(`${ENDPOINT}/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { access } = res
    return access
  })
}

export default login
