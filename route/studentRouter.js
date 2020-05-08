/* 处理路由访问 */
const express = require('express'),
      {
        showList : sL,
        searchStudent: sS,
        exporStudentToExcel : eSTE,
        showAddStudent : sAS,
        addStudent : aS,
        updateStudent : uS,
        deleteStudent : dS

      } = require('../controllers/studentCtrl');

let router = express.Router();


//路由请求
router.get('/msg', sL ); //访问接口 处理学生数据
router.get('/search', sS ); //访问接口  处理搜索学生
router.get('/exportExcel', eSTE ); //访问接口，处理学生数据导出Excel
router.get('/addStudent', sAS );  //访问增加学生页面
router.put('/addStudent', aS );  //访问接口，处理增加学生
router.post('/:sid', uS );  //访问接口 处理修改学生数据
router.delete('/:sid', dS );  //访问接口 处理删除学生


module.exports = router;