

/* 登录块 */
//渲染登录页：
exports.showLogin = function (req,res){
    //设置了ejs模板引擎 通过render渲染login时它就会自动到views目录下寻找名为login.ejs的模板文件进行渲染
    res.render('login')
}
//处理登录
exports.doLogin = function (req,res){

}
//验证用户是否存在
exports.checkUser = function (req,res){

}
/* 登录块 --end-- */
