const { $where } = require('../../models/usersModel');

    var mandrill=require('node-mandrill')
    ('<api>');

function sendMail(_name, _email, _message){
    mandrill('/messages/send',{
        message:{
            to:[{email:_email,name:_name}],
            from_email:
            'noreply@gmail.com',
                subject:_subject,
                text:_message
        }
    },
    function(error,response){
        if(error)console.log(error);
        else console.log(response);
    });
    
};


