var express = require('express');
var path = require('path');
var app = express();

app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname, '/public')));

var data={count:0};
app.get('/',function(req,res){
  data.count++;
  res.render('index',data);
});
app.get('/reset',function(req,res){
  data.count=0;
  res.render('index.ejs',data);
});
app.get('/set/count',function(req,res){
  if(req.query.count)data.count=req.query.count;
  res.render('index',data);
});
app.get('/set/:num',function(req,res){
  if(req.query.count)data.count=req.query.count;
  res.render('index',data);
});
/*app.get('/',function(req,res){
  res.render('index');
});*/
console.log(__dirname);

app.listen(3000,function(){
console.log('Server On!');
});
