// import express
// const { request, response } = require("express");
const express = require("express");
//creat application object
const app = express();
//创建路有规则
//request是对请求报文的封装
//response 是对响应报文的封装
app.post('/',(request,response)=>{
    // response.setHeader('Access-Control-Allow-Origin','*'); 
    //设置响应
    response.send("hello AJAX");
});

//监听端口
app.listen(8000,()=>{
    console.log("server has been set up,8000");
});