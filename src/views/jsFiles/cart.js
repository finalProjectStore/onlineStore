$(document).ready(function () {


  $("#home-btn").click(function () 
  {

    let userCards = $(".card-body");

    for(var i =0;i<userCards.length;i++)
    {
        let childrenOfCard = userCards[i].children;
        let quantityOfProduct = $("#"+i).val();


        let titleOfCard = childrenOfCard[0].innerHTML;
      
      
        for(var j=0;j<cardsData.length;j++)
        {
          if (cardsData[j].title === titleOfCard)
          {
            let updatedProduct = 
            {
              title: cardsData[j].title,
              price: cardsData[j].price,
              description: cardsData[j].description,
              details: cardsData[j].details,
              quantity : parseInt(quantityOfProduct),
              maxQuantity: parseInt(cardsData[i].quantity),
              url: cardsData[j].url
            };

            
            cardsData[j] = updatedProduct;
          }
        }

    }

    sessionStorage.setItem("cardsData",JSON.stringify(cardsData));

    location.href = 'mainpage';

  });


  //When you click on the button it will take us to the home page of the site


  $("#home-btn").click(function () {
    // location.href = 'mainpage';
  });


  /// cardsData = key in the session storage ///
  const cardsData = JSON.parse(sessionStorage.getItem("cardsData"));
  


  var cardContainer = $('#card-container');


  /////////////////////////////////////////////////////////
  /*Create the cards of products - left side of the sreen*/
  /////////////////////////////////////////////////////////


  // Initialize a flag variable
  var cardExists = false;
  var countProducts = 0;

  if (cardsData?.length == null) {
    $('#num-of-items').text("no");

    if (countProducts === 0) {
      $('#payment-container').addClass('hide');
    }

    return;
  }

  // Loop through the card data and create cards dynamically
  for (var i = 0; i < cardsData.length; i++) {
    var cardData = cardsData[i];

    var realQuantity = cardData.maxQuantity;
    
    


    // Check if a card with the same title already exists
    if (cardData.title) {
      var existingCard = $('.card-title:contains("' + cardData.title + '")').closest('.card');
      if (existingCard.length > 0) {
        cardExists = true;
        var quantityInput = existingCard.find('.quantity-input');
        var currentValue = parseInt(quantityInput.val());
        quantityInput.val(currentValue + 1); // Increase the input value by 1
      }
    }

    if (cardExists) {
      // Reset the flag variable and continue to the next iteration
      cardExists = false;
      continue;
    }
    
    // Create the card
    var card = $('<div>').addClass('card');
    var cardRow = $('<div>').addClass('row');
    card.append(cardRow);

    // Create the left side with the image
    var leftCol = $('<div>').addClass('col-md-4').attr('id', 'img-container');
    var image = $('<img>').addClass('card-img').attr('src', cardData.url).attr('alt', 'Product Image');
    leftCol.append(image);
    cardRow.append(leftCol);

    // Create the right side of the card with the description, quantity, price, and trash
    var rightCol = $('<div>').addClass('col-md-8');
    var cardBody = $('<div>').addClass('card-body');
    var title = $('<h5>').addClass('card-title').text(cardData.title);
    var description = $('<p>').addClass('card-text').text(cardData.description);

    var quantityInputGroup = $('<div>').addClass('input-group mb-3');
    var quantityInputPrepend = $('<div>').addClass('input-group-prepend');

    var quantityInput = $('<input>')
      .addClass('form-control quantity-input')
      .attr('type', 'number')
      .attr('value', cardData.quantity)
      .attr('id',i)
      .attr('max',realQuantity)
      .on('input', function () {
        var value = parseInt($(this).val());
        if (value <= 0) { /// the value of input must be more then 0
          $(this).val('1');
        }
        if(value >= realQuantity) {
          $(this).val(realQuantity);
        }
      });

    var quantityInputAppend = $('<div>').addClass('input-group-append');

    quantityInputGroup.append(quantityInputPrepend, quantityInput, quantityInputAppend);

    var price = $('<p>').addClass('card-text').text(cardData.price);


    card.attr('data-card-id', cardData._id);
    




    var trashBtn = $('<button>').addClass('btn btn-outline-secondary trash-btn').attr('type', 'button');

    //when there is a click on delete button the product will disable from the cart
    $(document).on('click', '.trash-btn', removeCardItem);


    var trashIcon = $('<i>').addClass('fa fa-trash'); // using the font awesome
    trashBtn.append(trashIcon);

    quantityInputGroup.append(
      quantityInputPrepend,
      quantityInput,
      quantityInputAppend
    );

    cardBody.append(title, description, quantityInputGroup, price, trashBtn);
    rightCol.append(cardBody);
    cardRow.append(rightCol);

    // Append the card to the container
    cardContainer.append(card);
  }


  





  /////////////////////////////////////////////////////
  //Create the payment block -right side of the sreen//
  
  var paymentDiv = $('<div>').addClass('payment');
  var paymentTitle = $('<h2>').text('Card Details');

  var cardTypeLabel = $('<label>').text('Card Type');
  var cardTypeSelect = $('<select>')
    .addClass('form-control')
    .attr('id', 'card-type');
  cardTypeSelect.append($('<option>').text('Visa'));
  cardTypeSelect.append($('<option>').text('MasterCard'));
  cardTypeSelect.append($('<option>').text('American Express'));

  var nameOnCardLabel = $('<label>').text('Name on Card:');
  var nameOnCardInput = $('<input>')
    .addClass('form-control detail')
    .attr('type', 'text')
    .attr('id', 'name-on-card')
    .attr('placeholder', 'Enter name on card');

  var cardNumberLabel = $('<label>').text('Card Number:');
  var cardNumberInput = $('<input>')
    .addClass('form-control detail')
    .attr('type', 'text')
    .attr('id', 'card-number')
    .attr('placeholder', 'Enter card number');

  var expirationDateLabel = $('<label>').text('Expiration Date:');
  var expirationDateInput = $('<input>')
    .addClass('form-control detail')
    .attr('type', 'text')
    .attr('id', 'expiration-date')
    .attr('placeholder', 'MM/YY');

  var cvvLabel = $('<label>').text('CVV:');
  var cvvInput = $('<input>')
    .addClass('form-control detail')
    .attr('type', 'text')
    .attr('id', 'cvv')
    .attr('placeholder', 'Enter CVV');

  paymentDiv.append(
    paymentTitle,
    cardTypeLabel,
    cardTypeSelect,
    nameOnCardLabel,
    nameOnCardInput,
    cardNumberLabel,
    cardNumberInput,
    expirationDateLabel,
    expirationDateInput,
    cvvLabel,
    cvvInput
  );


  // create the footer for the button with total price and checkout
  var footerDiv = $('<div>').addClass('footer');
  var totalPrice = $('<p>').addClass('total-price').text('Total Price: $0');
  var checkoutButton = $('<button>')
    .addClass('btn btn-primary')
    .text('Checkout');
  footerDiv.append(totalPrice, checkoutButton);

  // Append the footer section to the footer container
  $('#payment-container').append(paymentDiv, footerDiv);
  calculateTotalPrice(); // the price will update all the time!



  ///////////////////////////////
  /* Validations of all fields */
  ///////////////////////////////
  // Validation function for name on card
  function verifyNameOnCard() {
    var nameOnCard = $(this).val();

    // Check if the name on card has at least 4 characters
    if ((nameOnCard.length >= 4) && !/\d/.test(nameOnCard)) {
      $(this).removeClass('is-invalid').addClass('is-valid');
    } else {
      $(this).removeClass('is-valid').addClass('is-invalid');
    }
  }

  // Event listener for name on card input
  nameOnCardInput.on('input', verifyNameOnCard);


  function verifyCardType() {
    var selectedType = $('#card-type option:selected').text();
    var cardNumberInput = $('#card-number');

    // Add or remove a class based on the card type for styling
    cardNumberInput.removeClass('visa mastercard amex');
    if (selectedType === 'Visa') {
      cardNumberInput.addClass('visa');
    } else if (selectedType === 'MasterCard') {
      cardNumberInput.addClass('mastercard');
    } else if (selectedType === 'American Express') {
      cardNumberInput.addClass('amex');
    }
  }

  function verifyCardNumber() {
    var selectedType = $('#card-type option:selected').text();
    var cardNumber = $(this).val();

    if (selectedType === 'Visa') {
      // Verify Visa card number format (16 digits)
      if (/^\d{16}$/.test(cardNumber)) {
        $(this).removeClass('is-invalid').addClass('is-valid');
      } else {
        $(this).removeClass('is-valid').addClass('is-invalid');
      }
    } else if (selectedType === 'MasterCard') {
      // Verify MasterCard card number format (16 digits)
      if (/^\d{16}$/.test(cardNumber)) {
        $(this).removeClass('is-invalid').addClass('is-valid');
      } else {
        $(this).removeClass('is-valid').addClass('is-invalid');
      }
    } else if (selectedType === 'American Express') {
      // Verify American Express card number format (15 digits)
      if (/^\d{15}$/.test(cardNumber)) {
        $(this).removeClass('is-invalid').addClass('is-valid');
      } else {
        $(this).removeClass('is-valid').addClass('is-invalid');
      }
    }
  }

  function verifyExpirationDate() {
    var expirationDate = $(this).val();

    // Verify expiration date format (MM/YY) ans minimum year is 2023
    if (/^(0[1-9]|1[0-2])\/(2[3-9]|[3-9][0-9])$/.test(expirationDate)) {
      $(this).removeClass('is-invalid').addClass('is-valid');
    } else {
      $(this).removeClass('is-valid').addClass('is-invalid');
    }
  }




  function verifyCVV() {
    var cvv = $(this).val();

    // Verify CVV format (3 or 4 digits)
    if (/^\d{3,4}$/.test(cvv)) {
      $(this).removeClass('is-invalid').addClass('is-valid');
    } else {
      $(this).removeClass('is-valid').addClass('is-invalid');
    }
  }

  // Event listeners for input fields
  $('#card-type').change(verifyCardType);
  $('#card-number').on('input', verifyCardNumber);
  $('#expiration-date').on('input', verifyExpirationDate);
  $('#cvv').on('input', verifyCVV);






  ////////////////////////////
  /* Calculate Total Price */
  ////////////////////////////

  function calculateTotalPrice() {
    var totalPrice = 0;
    

    $('.card').each(function () {
      var card = $(this);
      var quantity = card.find('.quantity-input').val();
      var priceText = card.find('.card-text').last().text(); //.card-test = price on card
      var price = parseFloat(priceText.replace(/[^0-9.]/g, '')); //split the price with '$' and integer
      countProducts += parseInt(quantity);
      totalPrice += quantity * price;
    });

    $('.total-price').text('Total Price: $' + totalPrice);
    $('#num-of-items').text(countProducts === 0 ? "no" : countProducts);

    if (countProducts === 0) {
      $('#payment-container').addClass('hide');
    } else {
      $('#payment-container').removeClass('hide');
    }

  }

  // Event listener for quantity input change
  $('.quantity-input').on('input', calculateTotalPrice);





  function removeCardItem() {
    /// refresh page for updating the sessionStorage ///
    location.reload();
    var card = $(this).closest('.card');
    var title = card.find('.card-title').text();

    // Remove the card from the DOM
    card.remove();

    // Retrieve the stored cards data from sessionStorage
    var cardsData = JSON.parse(sessionStorage.getItem('cardsData')) || [];

    // Find the index of the card with the matching title in the cardsData array
    var cardIndex = -1;
    for (var i = 0; i < cardsData.length; i++) {
      if (cardsData[i].title === title) {
        cardIndex = i;
        break;
      }
    }

    // Remove the card from the cardsData array if found
    if (cardIndex !== -1) {
      cardsData.splice(cardIndex, 1);

      // Update the cardsData in sessionStorage
      sessionStorage.setItem('cardsData', JSON.stringify(cardsData));
    }

    calculateTotalPrice();
  }


  // Event listener for trash button click
  $('.trash-btn').on('click', removeCardItem);




  /////////////////////
  /* Checkout Button */
  /////////////////////

  function checkout() {
    var cardsData = JSON.parse(sessionStorage.getItem("cardsData"));

    // Check if the cart is empty
    cardName = $("#name-on-card").val();
    cardNumber = $("#card-number").val();
    expirationDate = $("#expiration-date").val();
    cvv = $("#cvv").val();

    if (cardName === '' || cardNumber === '' || expirationDate === '' || cvv === '') 
    {
      alert("Your cart is empty!"); // Change to div_alert
      return;
    }

  
    var validInputs = $('.is-valid');


    
    if (validInputs.length === 4) 
    {
    

      let username = sessionStorage.getItem("name");
      let stringPrice = $(".total-price").text().slice(14); // Total Price: $900
      let price = parseInt(stringPrice);
      let products = sessionStorage.getItem("cardsData");


      let products_json = JSON.parse(products);

      updatedProducts = [];
      
      for (let i =0;i<products_json.length;i++)
      {
        let updatedQuantity = products_json[i].maxQuantity - products_json[i].quantity;
        
        if (updatedQuantity < 0)
        {
          updatedQuantity = 0
        }

        updated_product = 
        {
          description : products_json[i].description,
          details : products_json[i].details,
          price: price,
          quantity:updatedQuantity,
          title:products_json[i].title
        }

        updatedProducts.push(updated_product);
      }
      



      $.ajax({
        url: '/cart',
        method: 'POST',
        data: JSON.stringify({
          username: username,
          products: products,
          price: price,
          updatedProducts : updatedProducts
        }),
        contentType: 'application/json',

        success: function (res) 
        {
          sessionStorage.clear();
          sessionStorage.setItem("name", username);
          location.href = "/succeed";
        },
      });

    }
    else{
      alert("invalid fields"); 
    }
  }

  // Event listener for checkout button click



  checkoutButton.on('click', checkout);



});