import express from "express"
import mongoose from "mongoose"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import bodyParser from "body-parser"
import favicon from "serve-favicon"

/* 接口文件 */
import index from "./routes/index"
import user from "./routes/user"

const app = express()
/* 连接数据库 */
mongoose.connect('mongodb://127.0.0.1/personal-blog')
const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', function (callback) {
  console.log('MongoDB连接成功！！')
})
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/user', user)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
