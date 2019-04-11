
import "whatwg-fetch";
import { urlList } from "../config/urls.js";

// WS.onmessage(data=>{
//     console.log(JSON.parse(data))
// })

fetch(`${urlList.prod}/device/add`, {
    mode: "cors",
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
    "content-type": "application/json"
    }
})
    .then(res => {
    return res.json();
    })
    .then(data => {
    console.log("fetch data", data);
    })
    .catch(err => {
    console.log("请求错误", err);
    });