var express = require ('express');
var router=express.Router();
var mongojs=require('mongojs')
 var db = mongojs('mongodb://charuka:HCD3mrt.lk@ds113495.mlab.com:13495/mywork',['task']);

router.get('/task',function(req,res,next){
    db.task.find(function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    

});

module.exports=router;