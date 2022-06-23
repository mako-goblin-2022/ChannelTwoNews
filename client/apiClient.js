import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
export function getNews(){
  return request.get('https://newsapi.org/v2/everything?q=tesla&from=2022-05-23&sortBy=publishedAt&apiKey=2bf36f72f3df4b84a2bbf66178d350b2').then(response =>response.body)
}
// ***   ***   ***
