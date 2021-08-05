const express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('dist'));

app.get('/',(req,res) => res.render('index'));
app.listen(process.env.PORT || 3000,()=> console.log('server started'));