import express from 'express'
import UsrModel from '../models/user'

const router = express.Router()
/* GET user listing. */
router.all('/', (req, res, next) => {
  UsrModel.findByUsername(req.body.username)
    .then(data => {
      if (data === false) {
        res.json({
          code: 501,
          message: '用户名不存在'
        })
        return
      }
      if (data.password === req.body.password) {
        res.json({
          code: 200,
          message: '成功',
          data: data
        })
      } else {
        res.json({
          code: 500,
          message: '密码错误',
          data: {}
        })
      }
    })
})

module.exports = router
