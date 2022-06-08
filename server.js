const express=require("express");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});


app.post("/calculate",(req,res) => {
    if(req.body.operator === "Add"){
    res.send("The Caculated value is "+ (Number(req.body.num1)+Number(req.body.num2)));
    }
    else if(req.body.operator === "Subtract"){
        res.send("The Calculated value is "+(Number(req.body.num2)-Number(req.body.num1)));
    }
    else if(req.body.operator === "Multiply"){
        res.send("The Calculated value is "+(Number(req.body.num1)*Number(req.body.num2)));
    }

    else if(req.body.operator === "Divide"){
        res.send("The Calculated value is "+(Number(req.body.num2)/Number(req.body.num1)));
    }
    else{
        res.send("Invalid Operator");
    }
});

app.listen(3000,function(){
    console.log("server is running on port 3000");
});