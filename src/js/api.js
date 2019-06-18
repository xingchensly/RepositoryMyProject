import 'whatwg-fetch'
import { urlList } from '../config/urls.js'
import Vuex from "vuex";
// WS.onmessage(data=>{
//     console.log(JSON.parse(data))
// })
export let getWeather = (cb) => {
  // if (!city) return
  fetch(`${urlList.weatherApi}`, {
    method: 'get'
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      cb&&cb(data.results[0])
      // Vuex.Store.commit('updateObj', {weatherData:data.results[0]})
    })
    .catch(err => {
      console.log('请求错误', err)
    })
}
