$(document).ready(function () {
  $.ajax({
    url: '/mainPage/getAllProducts',
    method: 'GET',
    // populate the products table
    success: function(data) {
      mainPageLogic(data['products']);
    }
  });
})
function mainPageLogic(data) {
  // When open mainpage update the counter of the cart  
  // let number_of_products = JSON.parse(sessionStorage.getItem("cardsData")).length;
  // $("#cart-counter").text(number_of_products);
  ////

  const name = sessionStorage.getItem("name");
  const username = $('#username').append('<strong> Hello ' + name + '</strong>');

  var cartCounter = sessionStorage.getItem("cardsData");
  if (cartCounter === null) {
    cartCounter = 0;
  }
  else {
    cartCounter = JSON.parse(sessionStorage.getItem("cardsData")).length;
  }
  

  // Generate the navbar
  var navbar = $('<nav class="navbar navbar-light bg-light justify-content-between fixed-top id="nav-bar""></nav>');
  var brand = $('<a class="navbar-brand" href="#">LOGO</a>');

  var form = $('<form class="form-inline" id="form-inline"></form>');
  var searchInput = $('<input class="form-control mr-sm-2" id="search-input" type="search" placeholder="Search" aria-label="Search">');
  var searchButton = $('<button class="btn btn-outline-success my-2 my-sm-0" id="search-button" type="submit">Search</button>');

  var cartContainer = $('<div class="cart-container"></div>');
  var cartIcon = $('<button id="cartBtn"><i class="fas fa-shopping-cart cart-icon"></i></button>');
  var cartCounterElement = $('<span id="cart-counter" class="cart-counter"> ' + cartCounter + '</span>');
  
  

  form.append(searchInput, searchButton);
  navbar.append(brand, username, form, cartContainer);
  cartContainer.append(cartIcon, cartCounterElement);
  $('#navbar-container').append(navbar);

  // Generate the filter menu
  var filterMenuRow = $('#filter-menu-row');
  var filterMenuItems = [
    { id: 'price-sort', label: 'Price:', options: ['all', 'low-high', 'high-low'] },
    { id: 'product-type', label: 'Product Type:', options: ['all', 'tv', 'computers', 'phones', 'tablets','audio', 'office', 'accessory', 'kitchen', 'garden', 'watch'] },
    { id: 'color', label: 'Color:', options: ['all', 'red', 'blue', 'green', 'white', 'gold', 'black', 'silver', 'gold', 'space gray'] },
  ];

  filterMenuItems.forEach(function (data) {
    var col = $('<div class="col-md-2"></div>');
    var formGroup = $('<div class="form-group"></div>');
    var label = $('<label for="' + data._id + '">' + data.label + '</label>');
    var select = $('<select class="form-control" id="' + data._id + '"></select>');

    data.options.forEach(function (option) {
      var optionElement = $('<option value="' + option + '">' + option + '</option>');
      select.append(optionElement);
    });

    formGroup.append(label, select);
    col.append(formGroup);
    filterMenuRow.append(col);
  });

  // Add the "Filter" button
  var filterButtonCol = $('<div class="col-md-2 d-flex align-items-end"></div>');
  var formGroup = $('<div class="form-group"></div>');
  var filterButton = $('<button class="btn btn-primary">Filter</button>');
  formGroup.append(filterButton);
  filterButtonCol.append(formGroup);
  filterMenuRow.append(filterButtonCol);

  // Generate the cards
  var cardContainer = $('.card-container');
  var filtereditem = data;

  $("#cartBtn").click(function () 
  {

    // Cancel access to cart without items
    if (parseInt($("#cart-counter").text()) === 0)
    {
      return;  
    }

    location.href = 'cart';
  });

  function filteritem() {
    var selectedPriceSort = $('#price-sort').val();
    var selectedProductType = $('#product-type').val();
    var selectedColor = $('#color').val();


    filtereditem = data.filter(function (data) {
      var productTypeCondition =
        selectedProductType === 'all' ||
        data.type === selectedProductType ||
        data.color === selectedProductType;

      var colorCondition = selectedColor === 'all' || data.color === selectedColor;

      return productTypeCondition && colorCondition;
    });

    if (selectedPriceSort === 'high-low') {
      filtereditem.sort(function (a, b) {
        return b.price - a.price; // Sort in descending order of price
      });
    } else if (selectedPriceSort === 'low-high') {
      filtereditem.sort(function (a, b) {
        return a.price - b.price; // Sort in ascending order of price
      });
    }

    renderCards();
  }

  function renderCards() {
    cardContainer.empty();

    filtereditem.forEach(function (data) {
      var card = $('<div class="card card-data"></div>');
      card.attr('data-id', data._id); // Add data-id attribute with data ID
      var image = $('<img src="' + data.image + '" class="card-img-top" alt="Card Image">');
      var cardBody = $('<div class="card-body"></div>');
      var title = $('<h5 class="card-title">' + data.title + '</h5>');
      var description = $('<p class="card-text">' + data.description + '</p>');
      var price = $('<p class="card-price">$' + data.price + '</p>');
      var addToCartButton = $('<button class="btn btn-primary btn-add-to-cart">Add to Cart</button>');
      var footer = $('<div class= "add-btn-cart"></div>');

      addToCartButton.click(function (event) 
      {
        cartCounter++;
        cartCounterElement.text(cartCounter);
      });

      cardBody.append(title, description, price, addToCartButton);
      footer.append(addToCartButton);
      card.append(image, cardBody, footer);
      cardContainer.append(card);
    });
  }

  filterButton.click(function () {
    filteritem();
    updateAddToCartButtons();
  });


  function updateAddToCartButtons() {
    var addToCartButtons = $('.btn-add-to-cart');
    addToCartButtons.off('click'); // Remove previous click event handlers

    addToCartButtons.click(function () {

      ////////////////  use this variables to store card data in the session storage and move them to the cart  ///////////
      var card = $(this).closest('.card');
      var cardTitle = card.find('.card-title').text();
      var cardPrice = card.find('.card-price').text();
      var cardtext = card.find('.card-text').text();
      var cardDetails = card.find('.card-details').text();
      var cardImgUrl = card.find('.card-details').attr('src');

      var cardData = {
        title: cardTitle,
        price: cardPrice,
        description: cardtext,
        details: cardDetails,
        image: cardImgUrl
      };

      const oldData = JSON.parse(sessionStorage.getItem('cardsData')) || []; ///// get the old or get an empty array
      oldData.push(cardData);
      const newData = JSON.stringify(oldData);
      sessionStorage.setItem('cardsData', newData);

      ////////// end of updating sessionStorage   /////////////
      var data = $(this).closest('.card-data');
      var itemId = data.data('_id');
      var itemitem = data.find(function (data) {
        return data._id === itemId;
      });



      cartCounter++;
      cartCounterElement.text(cartCounter);
    });
  }



 



  renderCards(); // render the cards immediately when the page loads
  updateAddToCartButtons();

  /////////////////////////////////////////////////////////////
  ///////////////////* Search function *////////////////////////
  /////////////////////////////////////////////////////////////

  // Search function
  function searchProducts() {
    var searchValue = $('#search-input').val().toLowerCase(); // Get the search input value and convert it to lowercase

    filtereditem = data.filter(function (data) {
      var title = data.title.toLowerCase(); // Convert the title to lowercase for case-insensitive search
      return title.includes(searchValue); // Check if the title includes the search value
    });

    renderCards();
  }


  // Add search functionality to the search button
  $('#search-button').click(function (event) {
    event.preventDefault(); // Prevent form submission
    searchProducts();
  });

  // Bind search function to the search input keyup event
  $('#search-input').keyup(function () {
    searchProducts();
  });


  /////////////////////////////////////////////////////////////
  ///////////////////* API's */////////////////////////////////
  /////////////////////////////////////////////////////////////




  ///////////////////* Weather *////////////////////////

  // API endpoint for weather data
  var weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
  var apiKey1 = 'a01cdebce758a7169b1a082ac5027909'; // Replace with your actual API key

  // Make the AJAX request
  $.ajax({
    url: weatherEndpoint,
    data: {
      q: 'Tel Aviv', // Replace with your desired location
      appid: apiKey1,

    },
    success: function (response) {
      // Handle the response and update the weather-container div
      var temperature = response.main.temp;
      var weatherDescription = response.weather[0].description;

      // convert from kelvin to Celsius
      var celsius = temperature - 273.15;

      // Create the HTML content for weather information
      var weatherContent = '<h2>Weather</h2>' +
        '<p>Temperature(Tel Aviv): ' + celsius.toFixed(2) + ' c' + '</p>' +
        '<p>Description: ' + weatherDescription + '</p>';

      // Update the weather-container div
      $('#weather-container').html(weatherContent);
    },
    error: function () {
      // Handle errors
      $('#weather-container').html('<p>Error retrieving weather information.</p>');
    }
  });





  /////////////////////////////////////////////////////////////
  ///////////////////* End of API's *////////////////////////////
  /////////////////////////////////////////////////////////////



}