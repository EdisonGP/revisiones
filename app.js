const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const cors =require('cors')

//midelware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//routes
app.use(require("./routes/index"));

//cors

app.use(cors({ origin: true, credentials: true  }));

//execute
app.get("/",(req,res)=>{res.send("Probando api final")});
app.listen(4001);
console.log("Servidor corriendo en el puerto 4001")