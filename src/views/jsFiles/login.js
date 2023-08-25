
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
    url: '/login',
    method: 'POST',
    data: JSON.stringify({
      username: username,
      password: password,
    }),
    contentType: 'application/json',

    success: function (res) {
        $(document).cookie = `jwtToken=${res.jwtToken}; path=/;`;
        sessionStorage.setItem('name', res.username);

        var ws = new WebSocket('ws://localhost:3000/');
        ws.onmessage=function(event)
        {
            ws.send("client");
        }
        showGreetingMessage('Registration successful!');
        setTimeout(() => {
          location.href = '/mainpage';
        }, 2 * 1000);
    },
    /// if status 401 returned
    error: function(error) { 
      text_error = error['responseJSON']['error'];
      createAlert(text_error);
    }
  });
});
