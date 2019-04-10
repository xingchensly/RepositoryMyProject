// npm i nodejs-websocket
let ws = require("nodejs-websocket")
let port = 8001
let heart_beat = 10 //每10秒内需要客户端心跳一次，否则关闭连接

let server = ws.createServer(function (conn) {

    //计算心跳时间
    conn.heart_time = 0

    let timer = setInterval(()=>{
        //检查心跳时间
        if (conn.heart_time > heart_beat) {
            clearInterval(timer);
            conn.close()
        }
        conn.heart_time++
    },1000)

    //根据时间戳生成用户id uid
    let uid = String((new Date()).getTime()).slice(-6)
    conn.uid = uid
    console.log(uid+' is connected')

    conn.sendText('Hello man!')
    
    //接受到发过来的信息
    conn.on("text", function (text) {
        //重置心跳
        conn.heart_time = 0
        if (text == 'hello') {
            //设置的心跳信息，不做任何处理直接返回
            return
        }
        console.log('get user:' + conn.uid + ' message:' + text)
    })

    //断开连接的回调
    conn.on("close", function (code, reason) {

    })  

    //处理错误事件信息
    conn.on('error', function (err) {
        
    })
})
server.listen(port);//8001端口
console.log('ws://127.0.0.1:'+port+' is runing.')