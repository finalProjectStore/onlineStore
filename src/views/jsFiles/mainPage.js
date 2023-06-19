$(document).ready(function () {
  var data = [
    {
      id: 1,
      image: 'resources/appletv.jpg',
      title: 'Apple TV',
      description: 'Apple TV is the best',
      details: 'some more details about this amazing product! ',
      price: 1000,
      type: 'tv',
      color: 'white',
    },
    {
      id: 2,
      image: 'resources/iphoneblack.webp',
      title: 'Iphone 14',
      description: 'This is the description for card 2.',
      details: 'Amazing phone!',
      price: 400,
      type: 'phones',
      color: 'black',
    },
    {
      id: 3,
      image: 'resources/IpadGold.jpg',
      title: 'Ipad 10.2',
      description: 'Ipad for college students',
      details: 'best ipad!!',
      price: 500,
      type: 'tablets',
      color: 'gold',
    },
    {
      id: 4,
      image: 'resources/macbook.png',
      title: 'Card 4',
      description: 'This is the description for card 4.',
      price: 399,
      type: 'home',
      color: 'red',
    },
    {
      id: 5,
      image: 'resources/macbook.png',
      title: 'Card 5',
      description: 'This is the description for card 5.',
      price: 299,
      type: 'clothing',
      color: 'blue',
    },
    {
      id: 6,
      image: 'resources/macbook.png',
      title: 'Card 6',
      description: 'This is the description for card 6.',
      price: 199,
      type: 'home',
      color: 'green',
    },
    {
      id: 7,
      image: 'resources/macbook.png',
      title: 'Card 7',
      description: 'This is the description for card 7.',
      price: 899,
      type: 'electronics',
      color: 'red',
    }
  ];

  var cartCounter = 0;

  // Generate the navbar
  var navbar = $('<nav class="navbar navbar-light bg-light justify-content-between fixed-top"></nav>');
  var brand = $('<a class="navbar-brand" href="#">LOGO</a>');
  var form = $('<form class="form-inline"></form>');
  var input = $('<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">');
  var button = $('<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>');
  var cartContainer = $('<div class="cart-container"></div>');
  var cartIcon = $('<button id="cartBtn"><i class="fas fa-shopping-cart cart-icon"></i></button>');
  var cartCounterElement = $('<span id="cart-counter" class="cart-counter">0</span>');

  form.append(input, button);
  navbar.append(brand, form, cartContainer);
  cartContainer.append(cartIcon, cartCounterElement);
  $('#navbar-container').append(navbar);

  // Generate the filter menu
  var filterMenuRow = $('#filter-menu-row');
  var filterMenuItems = [
    { id: 'price-sort', label: 'Price:', options: ['all', 'low-high', 'high-low'] },
    { id: 'product-type', label: 'Product Type:', options: ['all', 'tv', 'computers', 'phones', 'tablets', 'office', 'kitchen', 'garden'] },
    { id: 'color', label: 'Color:', options: ['all', 'red', 'blue', 'green', 'white', 'gold'] },
  ];

  filterMenuItems.forEach(function (item) {
    var col = $('<div class="col-md-2"></div>');
    var formGroup = $('<div class="form-group"></div>');
    var label = $('<label for="' + item.id + '">' + item.label + '</label>');
    var select = $('<select class="form-control" id="' + item.id + '"></select>');

    item.options.forEach(function (option) {
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
  var filteredData = data;

  $("#cartBtn").click(function () {
    location.href = 'cart';
  });

  function filterData() {
    var selectedPriceSort = $('#price-sort').val();
    var selectedProductType = $('#product-type').val();
    var selectedColor = $('#color').val();

    filteredData = data.filter(function (item) {
      var productTypeCondition =
        selectedProductType === 'all' ||
        item.type === selectedProductType ||
        item.color === selectedProductType;

      var colorCondition = selectedColor === 'all' || item.color === selectedColor;

      return productTypeCondition && colorCondition;
    });

    if (selectedPriceSort === 'high-low') {
      filteredData.sort(function (a, b) {
        return b.price - a.price; // Sort in descending order of price
      });
    } else if (selectedPriceSort === 'low-high') {
      filteredData.sort(function (a, b) {
        return a.price - b.price; // Sort in ascending order of price
      });
    }

    renderCards();
  }



  function renderCards() {
    cardContainer.empty();

    filteredData.forEach(function (item) {
      var card = $('<div class="card card-item"></div>');
      card.attr('data-id', item.id); // Add data-id attribute with item ID
      var image = $('<img src="' + item.image + '" class="card-img-top" alt="Card Image">');
      var cardBody = $('<div class="card-body"></div>');
      var title = $('<h5 class="card-title">' + item.title + '</h5>');
      var description = $('<p class="card-text">' + item.description + '</p>');
      var details = $('<p class="card-details">' + item.details + '</p>');
      var price = $('<p class="card-price">$' + item.price + '</p>');
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
    filterData();
    updateAddToCartButtons();
  });

  function updateAddToCartButtons() {
    var addToCartButtons = $('.btn-add-to-cart');
    addToCartButtons.off('click'); // Remove previous click event handlers

    addToCartButtons.click(function () {
      var item = $(this).closest('.card-item');
      var itemId = item.data('id');
      var itemData = data.find(function (item) {
        return item.id === itemId;
      });

      cartCounter++;
      cartCounterElement.text(cartCounter);
      alert('Item added to cart! Item ID: ' + itemId + ', Item: ' + itemData.title);
    });
  }

  filterData();
  updateAddToCartButtons();
});
