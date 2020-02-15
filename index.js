const express=require("express");

const PORT= process.env.PORT || 8060;

const app=express();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const apiWait=[
    console.log("ddddd")
];

const apiTable=[
    console.log("dataaaaaa")
];
app.get("/api",(req,res)=>{
    console.log("hello");
    res.send(apiWait);

});


app.get("/api/waitlist",(req,res)=>{
    console.log("hello");
    res.send(apiWait);

});



app.post("/api/tables",(req,res)=>{
    //get the data that the user sent from the req object
    //req.body will be the object that jQuery sent us
    const requestData = req.body;
    if (!requestData) {
        res.send("request body can't be null");
    }
    apiTable.push(requestData);

    res.send(apiTable);

})


app.listen(PORT,()=>{
    console.log(`Server running in${PORT} ...` )
});

// ----------------------------------------------------------------------------------------
