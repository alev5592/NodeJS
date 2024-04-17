var figlet = require("figlet");

figlet("Benvenuto!",function(err,data){
    if(err){
        console.log("Qualcosa è andato storto!")
        console.dir(err)
        return;
    }
    console.log(data)
})