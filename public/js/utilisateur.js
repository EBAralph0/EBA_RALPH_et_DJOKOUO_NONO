var usr = new Schema(
    document.getElementById("nameEnregistrement").value,
    document.getElementById("prenomEnregistrement").value,
    document.getElementById("emailEnregistrement").value,
    document.getElementById("passwordEnregistrement").value,
    document.getElementById("birthdayEnregistrement").value,
    document.getElementById("jobEnregistrement").value,
    document.getElementById("organisationEnregistrement").value
    )
    usr.get();
    document.getElementById("nom").textcontent= document.getElementById("nameEnregistrement").value;