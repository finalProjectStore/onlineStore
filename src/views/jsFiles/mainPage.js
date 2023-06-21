$(document).ready(function () {

  var data = [
    {
      id: 1,
      image: 'resources/appletv.jpg',
      title: 'Apple TV',
      description: 'Apple TV is the best',
      details: 'Some more details about this amazing product!',
      price: 1000,
      type: 'tv',
      color: 'white'
    },
    {
      id: 2,
      image: 'resources/applewatch8.jpg',
      title: 'Apple Watch 8',
      description: 'GPS 44mm',
      details: '',
      price: 600,
      type: 'watch',
      color: ''
    },
    {
      id: 3,
      image: 'resources/led85.png',
      title: 'LED 85 inch',
      description: '4K Smart TV',
      details: '',
      price: 2000,
      type: 'tv',
      color: ''
    },
    {
      id: 4,
      image: 'resources/macbookpro.jpg',
      title: 'Macbook Pro 13 inch',
      description: 'M2 512GB 16GB RAM',
      details: '',
      price: 1700,
      type: 'laptop',
      color: ''
    },
    {
      id: 5,
      image: 'resources/ps5.jpg',
      title: 'Sony Playstation 5',
      description: '500 GB',
      details: '',
      price: 900,
      type: 'gaming',
      color: ''
    },
    {
      id: 6,
      image: 'resources/iphone14promax.jpg',
      title: 'iPhone 14 Pro Max',
      description: '1TB 6GB RAM',
      details: '',
      price: 1000,
      type: 'phone',
      color: ''
    },
    {
      id: 7,
      image: 'resources/galaxys23.jpg',
      title: 'Galaxy S23',
      description: '512 GB 4GB RAM',
      details: '',
      price: 900,
      type: 'phone',
      color: ''
    },
    {
      id: 8,
      image: 'resources/ipadpro.jpg',
      title: 'iPad Pro',
      description: '12.9 inch M2 256GB 6GB RAM',
      details: '',
      price: 800,
      type: 'tablet',
      color: ''
    },
    {
      id: 9,
      image: 'resources/headphones1.jpg',
      title: 'Wireless Headphones',
      description: 'Over-ear, noise-canceling headphones with Bluetooth connectivity.',
      details: '',
      price: 150,
      type: 'audio',
      color: ''
    },
    {
      id: 10,
      image: 'resources/smartspeaker.jpg',
      title: 'Smart Speaker',
      description: 'Voice-controlled speaker with built-in virtual assistant.',
      details: '',
      price: 80,
      type: 'audio',
      color: ''
    }

  ];

  const name = sessionStorage.getItem("name");
  const username = $('#username').append('<strong> Hello ' + name + '</string>');

  var cartCounter = 0;

  // Generate the navbar
  var navbar = $('<nav class="navbar navbar-light bg-light justify-content-between fixed-top id="nav-bar""></nav>');
  var brand = $('<a class="navbar-brand" href="#">LOGO</a>');
  var form = $('<form class="form-inline"></form>');
  var input = $('<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">');
  var button = $('<button class="btn btn-outline-success my-2 my-sm-0" type="submit id="search-btn"">Search</button>');
  var cartContainer = $('<div class="cart-container"></div>');
  var cartIcon = $('<button id="cartBtn"><i class="fas fa-shopping-cart cart-icon"></i></button>');
  var cartCounterElement = $('<span id="cart-counter" class="cart-counter">0</span>');

  form.append(input, button);
  navbar.append(brand, username, form, cartContainer);
  cartContainer.append(cartIcon, cartCounterElement);
  $('#navbar-container').append(navbar);

  // Generate the filter menu
  var filterMenuRow = $('#filter-menu-row');
  var filterMenuItems = [
    { id: 'price-sort', label: 'Price:', options: ['all', 'low-high', 'high-low'] },
    { id: 'product-type', label: 'Product Type:', options: ['all', 'tv', 'computers', 'phones', 'tablets', 'office', 'kitchen', 'garden'] },
    { id: 'color', label: 'Color:', options: ['all', 'red', 'blue', 'green', 'white', 'gold'] },
  ];

  filterMenuItems.forEach(function (data) {
    var col = $('<div class="col-md-2"></div>');
    var formGroup = $('<div class="form-group"></div>');
    var label = $('<label for="' + data.id + '">' + data.label + '</label>');
    var select = $('<select class="form-control" id="' + data.id + '"></select>');

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

  $("#cartBtn").click(function () {
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
      card.attr('data-id', data.id); // Add data-id attribute with data ID
      var image = $('<img src="' + data.image + '" class="card-img-top" alt="Card Image">');
      var cardBody = $('<div class="card-body"></div>');
      var title = $('<h5 class="card-title">' + data.title + '</h5>');
      var description = $('<p class="card-text">' + data.description + '</p>');
      var details = $('<p class="card-details">' + data.details + '</p>');
      var price = $('<p class="card-price">$' + data.price + '</p>');
      var addToCartButton = $(
        '<button class="btn btn-primary btn-add-to-cart">Add to Cart</button>'
      );

      addToCartButton.click(function () {
        cartCounter++;
        cartCounterElement.text(cartCounter);
      });

      cardBody.append(title, description, details, price, addToCartButton);
      card.append(image, cardBody);
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
      var data = $(this).closest('.card-data');
      var itemId = data.data('id');
      var itemitem = data.find(function (data) {
        return data.id === itemId;
      });

      cartCounter++;
      cartCounterElement.text(cartCounter);
      alert('Item added to cart! Item ID: ' + itemId + ', Item: ' + itemitem.title);
    });
  }

  renderCards(); // render the cards immediately when the page loads


  // add search functionality
  button.click(function (event) {
    event.preventDefault(); // prevent form submission
    var searchTerm = input.val(); // get the search term from the input field
    searchItems(searchTerm); // call the searchItems function with the search term
  });

  function searchItems(searchTerm) {
    var lowercaseSearchTerm = searchTerm.toLowerCase();

    filteredData = data.filter(function (item) {
      var titleMatches = item.title.toLowerCase().includes(lowercaseSearchTerm);
      var descriptionMatches = item.description.toLowerCase().includes(lowercaseSearchTerm);
      var detailsMatches = item.details.toLowerCase().includes(lowercaseSearchTerm);
      return titleMatches || descriptionMatches || detailsMatches;
    });

    renderCards();
  }

  filterData();

  updateAddToCartButtons();


});
