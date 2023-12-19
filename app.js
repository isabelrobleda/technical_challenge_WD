// app.js
const express = require("express");
const morgan = require("morgan");
const logger = require("morgan");
const cors = require("cors");
const PORT = 3000;
const phones = require("./phones.json")
const app = express();





// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

//CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
  })
);

app.get("/phones", (req, res)=>{
  try{
      res.status(200).json(phones)
  }
  catch(error){
    console.log(err)  
    res.status(401)
  }
})

app.get("/phones/:id", (req, res)=>{
  const id = req.params.id
  try{
      const details = phones.filter(phone=> parseInt(phone.id)===parseInt(id))
      res.status(200).json(details[0])
  }
  catch(error){
    console.log(error)  
    res.status(401)

  }
})


app.listen(3000, () => console.log("App listening on port 3000!"));
