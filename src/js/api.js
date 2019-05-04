import 'whatwg-fetch'
import { urlList } from '../config/urls.js'

// WS.onmessage(data=>{
//     console.log(JSON.parse(data))
// })
export let getWeather = (city) => {
  if (!city) return
  fetch(`${urlList.weatherApi}?cityname=${city}&key=${urlList.ak}`, {
    method: 'get',
    mode: 'cors'
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log('fetch data', data)
    })
    .catch(err => {
      console.log('请求错误', err)
    })
}
