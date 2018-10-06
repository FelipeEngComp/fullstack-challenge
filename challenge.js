var express = require('express');
var challenge = express();

challenge.use(express.static('./public'));

challenge.set('view engine','ejs');

challenge.get('',function(req,res){
    res.render('cadastro/listaCadastro');
});

challenge.listen(3000,function(){
    console.log("Servidor funcionando");
});