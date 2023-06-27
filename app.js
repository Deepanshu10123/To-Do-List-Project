const express = require("express");
const bodyParser = require("body-parser") ;
const date = require(__dirname+"/date.js") ;

const app = express() ;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")) ;
app.set("view engine" , "ejs") ;

let items = [];
let workItems = [] ;

app.get("/" , function(req , res)
{
    let day = date() ;
    res.render("list" , { listTitle : day , newListItems : items}) ;
});

app.post("/" , function(req , res)
{
    let item = req.body.newItem ;
    
    if(req.body.button==="Work")
    {
        workItems.push(item) ;
        res.redirect("/work") ;
    }
    else
    {
        items.push(item) ;
        res.redirect("/") ;
    }
}) ;


app.get("/work" , function(req , res) 
{
    res.render("list" , { listTitle : "Work List" , newListItems : workItems }) ;
});

app.get("/about" , function(req , res)
{
    res.render("about") ;
}) ;



app.listen(3000 , function()
{
    console.log("sab theek chal raha h bhai");
});

































// var today = new Date() ;
//     var currentDay = today.getDay() ;
//     var day = "" ;
// 
// switch(currentDay)
//     {
//         case 0: 
//         day = "sunday"
//         break ;
//         case 1: 
//         day = "monday"
//         break ;
//         case 2: 
//         day = "tuesday"
//         break ;
//         case 3: 
//         day = "wednesday"
//         break ;
//         case 4: 
//         day = "thursday"
//         break ;
//         case 5: 
//         day = "friday"
//         break ;
//         case 6: 
//         day = "saturday"
//         break ;

//         default:
//             console.log("Error : current day is showing: " + currentDay) ; 
//     }