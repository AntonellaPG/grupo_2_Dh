const express = require('express')
 const app = express();

 const path = require('path');

 app.use(express.static('public'));

 app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname,'./views/index.html'));
});

 app.listen(2323,() =>{
    console.log ('[server]: running on part 2323');
});