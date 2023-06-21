$(document).ready(function () {
  const createAlert = function (error) {
    if ($('#div_alert').find('strong')) {
      $('#div_alert').find('strong').remove();
    }

    $('#div_alert')
      .addClass('alert alert-info')
      .append('<strong> ' + error + ', try again</string>');
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

  $('#btn_register').click(function (event) {
    let username = $.trim($('#username').val());
    let age = $.trim($('#age').val());
    let email = $.trim($('#email').val());
    let pwd1 = $.trim($('#pwd1').val());
    let pwd2 = $.trim($('#pwd2').val());

    if (
      username === '' ||
      age === '' ||
      email === '' ||
      pwd1 === '' ||
      pwd2 === ''
    ) {
      if (createAlert('All fields are required')) {
        return false;
      }
    }

    event.preventDefault();
    $.ajax({
      url: '/register',
      method: 'POST',
      data: JSON.stringify({
        username: username,
        email: email,
        age: age,
        password1: pwd1,
        password2: pwd2,
      }),
      contentType: 'application/json',

      success: function (res) {
        if (res.response !== '') {
          // error accured
          createAlert(res.response);
        } else {
          showGreetingMessage('Registration successful!');
          setTimeout(() => {
            location.href = '/';
          }, 3 * 1000);
        }
      },
    });
  });
});
