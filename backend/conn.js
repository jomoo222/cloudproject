//경로 상의
//cnt 상의


var db = require('./db');
var path = require('path');
var fs = require('fs');


insert_error = function (req, res, err, str) {
    var msg = err.sqlMessage;
    db.query(`insert into error_log(error_date, sqlmessage, pos) values(NOW(),?, ?);`, [msg, str], function (err2, result) {
        if (err2) {
            throw err2;
        }
        res.write("<script>alert('오류발생')</script>");

    });
}


exports.getItem = function (request, response) {
    db.query(`select content_name, cnt from content ; `, function (error1, result) {
        if (error1) {
            insert_error(request, response, error1, "getItem part1");
            throw error1;
        }
        var sendJosn = []
        //sendJosn.push(result[0]);
        for (let i = 0; i < result.length; i++) {
            var sendJ = {};
            sendJ.itemName = result[i].content_name;
            sendJ.count = result[i].cnt;
            sendJosn.push(sendJ);
        }
        response.json(sendJosn);

    });
}


exports.user = function (req, res) {
    var uid = req.body.user.uid;
    var sex = req.body.user.sex;
    var age = req.body.user.age;
    var itemName = req.body.itemName;
    db.query(`call check_user(?,?, ?);`, [uid,sex,age], function (err, result) {
       
        if (err) {
            insert_error(req, res, err, "user정보 확인");
        }
        
        cms(req,res,itemName,uid);

    });

}

cms = function (req, res,itemName,uid) {
    

    db.query(`call UpdateCMS(?, ?);`, [itemName,uid], function (err, result) {
        if (err) {
            insert_error(req, res, err, "cms1");
        }
    });

    getpath(req,res,itemName);
}



    getpath = function (req, res,itemName) {

    var itemName = req.body.itemName;

   

    db.query(`select category_idx from content  where content_name=? ; `, [itemName], function (err1, result1) {
       if (err1) {
             insert_error(req, res, err1, "getpath part1");
             throw err1;
         }

         db.query(`select category_name from category  where category_idx=? ; `, [result1[0].category_idx], function (err2, result2) {
             if (err2) {
                 insert_error(req, res, err2, "getpath part2");
                 throw err2;
             }
             var category = result2[0].category_name;
             //경로는 수정해야함
             var file_path = path.join(__dirname,'../PDF',category,itemName);
      
             console.log(file_path);
             console.log("파일전송 시작: ");
             res.end(fs.readFileSync(file_path + '.pdf'));
             console.log("파일전송 끝 ");
             


         });
         



        });



}

