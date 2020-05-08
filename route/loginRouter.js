/* 处理路由访问 */
const express = require('express'),
      {
          showLogin : sl,
          doLogin : dl,
          checkUser : ck 
      } = require('../controllers/loginCtrl'),
      studentCtrl = require('../controllers/studentCtrl'),
      { logout } = require('../controllers/Logout');

let router = express.Router();


//登录验证：验证如果没有登录过不能访问管理界面的任何内容
router.use((req,res,next)=>{
    if( !req.session['s_id'] && req.url != '/login' ){  //证明s_id没有登陆过
        // res.send('<script>window.top.location.replace("/login")</script>');
        res.redirect('/login');
        return;
    }
    next();
})

//路径清单：
router.get('/login', sl ); //访问登录页面 渲染登录ejs文件
router.post('/login', dl ); //访问登录接口，处理登录
router.propfind('/login', ck );  //访问接口 验证用户名是否存在
router.get('/',studentCtrl.showIndex);  //访问首页
router.get('/Logout',logout)  //访问接口  处理退出


module.exports = router;