alert()
$('form').submit(function (){
    
    $.post('/Users/yonatan/Downloads/onlineStore/src/routes/register.js'),
    { 
        password1: "Donald Duck",
        password2: "Duckburg"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    }
});


    //   let username = $.trim($('#username').val());
    //   let age = $.trim($('#age').val());
    //   let email = $.trim($('#email').val());
    //   let pwd1 = $.trim($('#pwd1').val());
    //   let pwd2 = $.trim($('#pwd2').val());

    //   if (
    //     username === '' ||
    //     age === '' ||
    //     email === '' ||
    //     pwd1 === '' ||
    //     pwd2 === ''
    //   ) {
    //     // Check if div class is exist if not, create alert
    //     let n = document.getElementsByClassName('alert alert-info').length;

    //     if (n === 1) {
    //       return false;
    //     }

    //     $('#div_alert')
    //       .addClass('alert alert-info')
    //       .append('<strong>All fields are required, try again</string>');
    //     return false;
    //   }
    // });
