
$('#btn_register').click(function () {
  location.href = 'register';
});



const createAlert = function (error) 
{
  if ($('#div_alert').find('strong')) {
    $('#div_alert').find('strong').remove();
  }

  $('#div_alert')
    .addClass('alert alert-info')
    .append('<p><strong> ' + error + ', try again</strong></p>');
  return true;
};



function showGreetingMessage(message) {
  if ($('#div_alert').find('strong')) {
    $('#div_alert').find('strong').remove();
  }

  $('#div_alert')
    .addClass('alert alert-success')
    .append('<strong> ' + message + '</string>');
  return true;
}

// Check fields before submit
$('form').submit(function (event) {
  let username = $.trim($('#username').val());
  let password = $.trim($('#password').val());

  if (username === '' || password === '') {
    $('#div_alert')
    createAlert("Username or password is incorrect, try again");
    return false;
  }

  event.preventDefault();
  $.ajax({
    url: '/',
    method: 'POST',
    data: JSON.stringify({
      username: username,
      password: password,
    }),
    contentType: 'application/json',

    success: function (res) {
      // const name = res.name;
      
      if (res.response !== '') {
        // error accured
        createAlert(res.response);
      } else 
      {


        
        var ws = new WebSocket('ws://localhost:3000/');

        ws.onmessage=function(event)
        {
            ws.send("client");
        }

    





        showGreetingMessage('Registration successful!');
        setTimeout(() => {
          sessionStorage.setItem('name',res.name);
          location.href = '/mainpage';
        }, 2 * 1000);
      }
    },
  });
});
