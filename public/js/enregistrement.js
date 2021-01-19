const { name } = require("ejs");
const { Schema } = require("mongoose");
const usersModel = require("../../models/usersModel");

var usr = new Schema(
    document.getElementById("nameEnregistrement").value,
    document.getElementById("prenomEnregistrement").value,
    document.getElementById("emailEnregistrement").value,
    document.getElementById("passwordEnregistrement").value,
    document.getElementById("birthdayEnregistrement").value,
    document.getElementById("jobEnregistrement").value,
    document.getElementById("organisationEnregistrement").value
    )
usr.post("save");
document.getElementById("emailEnregistrement").addEventListener("blur",function(e){
    var validemail="";
    if(e.target.value.indexOf("@")===-1){
        validemail="Email invalide";
    }
    document.getElementById("motEmail").textContent= validemail;
});
