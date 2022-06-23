import request from 'superagent'

const serverURL = 'http://localhost:3005/api/v1'

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
export function getNews() {
  return request.get(`${serverURL}/news`).then((response) => response.body)
}
// ***   ***   ***
