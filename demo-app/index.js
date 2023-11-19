const express = require('express'); 
const app = express();              
const port = 5000;                  
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {        
       res.send("Hello " + process.env.USERNAME) 
});

app.listen(port, () => {          
    console.log(`Now listening on port ${port}`); 
});
