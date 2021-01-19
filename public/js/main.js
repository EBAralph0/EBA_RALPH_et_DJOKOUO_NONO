$("connexionButton").click(function() {
    $.ajax({
        type: "post",
        url:  "connexion.html",
        data: {
            'name' : $("#inputUsername").val(),
            'password' : $("#inputPassword").val()
            }, 
        success: function(data){
            if(data == "Success"){
            // Le membre est connecté. Ajoutons lui un message dans la page HTML.
            $("#resultat").css("color", "green").html('Vous avez été connecté avec succès !');
            }else{
            // Le membre n'a pas été connecté. (data vaut ici "failed")
            $("#resultat").css("color","red").html(data);
            }
        }
    });
    });