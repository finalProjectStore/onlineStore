////// able and disable the checkboxes and their relative inputs ////
$('input[name="checkboxGroup"]').click(function() {
    const checkboxId = $(this).attr('id');
    const inputId = checkboxId.replace('check', 'usernameInput');

    if ($(this).is(':checked')) {
    $('input[name="checkboxGroup"]').not(this).prop('checked', false).prop('disabled', true);
    $('input[type="text"]').not('#' + inputId).prop('disabled', true);
    $('#' + inputId).prop('disabled', false);
    } else {
    $('input[name="checkboxGroup"]').prop('disabled', false);
    $('input[type="text"]').prop('disabled', false);
    }
});

$('.home-btn').click( function() {
    location.href = '/mainPage'
})

$('#btn-save').click(function(event) {
    event.preventDefault();
    

    if($('#check1').is(':checked')){
        // const oldUsername = localStorage.getItem('name');
        var newUsername = $('#usernameInput1').val();
        changeDetails(newUsername,'username');

    }
    if($('#check2').is(':checked')){
        const newEmail = $('#usernameInput2').val();
        changeDetails(newEmail,'email');

    }
    if($('#check3').is(':checked')){
        const newPassword = $('#usernameInput3').val();
        changeDetails(newPassword, 'password');
    }


});

function changeDetails(newValue,valueType){

    $.ajax(
    {
        url: '/userdetails',
        method: 'POST',
        data:JSON.stringify({
            username:sessionStorage.getItem('name'),
            newValue,
            type:valueType
        }),
        contentType: 'application/json',

        success: function(res) {
            // console.log("RES inside SUCCESS:",res);
            // console.log("RES.User:",res.user);
            ////// successs
            showGreetingMessage(res.message);
            // console.log("Username:",res['user']['username'], "Email:",res['user']['email']);
            sessionStorage.setItem('name',res['user']['username']);
            sessionStorage.setItem('email',res['user']['email']);
        },
        error: function(error) {
            const errorToShow = error['responseJSON']['message'];
            // console.log("message:",errorToShow);
            createAlert(errorToShow);
        }
    })


}

const createAlert = function (error) {
    if ($('#div_alert').find('strong')) {
      $('#div_alert').find('strong').remove();
    }

    $('#div_alert')
      .addClass('alert alert-danger')
      .append('<strong> ' + error + ' try again.</string>');
    return true;
  };

  function showGreetingMessage(message) {
    if ($('#div_alert').find('strong')) {
        $('#div_alert').removeClass('alert-danger');
      $('#div_alert').find('strong').remove();
    }

    $('#div_alert')
      .addClass('alert alert-success')
      .append('<strong> ' + message + '</string>');
    return true;
  }
