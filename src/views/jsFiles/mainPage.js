$(document).ready(function () {

  var data = [
    {
      id: 1,
      image: 'resources/appletv.jpg',
      title: 'Apple TV',
      description: 'Apple TV is the best',
      price: 1000,
      type: 'tv',
      color: 'white',
      quantity: 1,
    },
    {
      id: 2,
      image: 'resources/samsungtv.jpg',
      title: 'Samsung TV',
      description: 'Experience stunning visuals with Samsung TV',
      price: 1200,
      type: 'tv',
      color: 'black',
      quantity: 1,
    },
    {
      id: 3,
      image: 'resources/lgsmarttv.jpg',
      title: 'LG Smart TV',
      description: 'Get a smart TV experience with LG',
      price: 900,
      type: 'tv',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 4,
      image: 'resources/appleiphone.jpg',
      title: 'Apple iPhone',
      description: 'The latest iPhone with cutting-edge features',
      price: 1200,
      type: 'phone',
      color: 'space gray',
      quantity: 1,
    },
    {
      id: 5,
      image: 'resources/samsungphone.jpg',
      title: 'Samsung Galaxy',
      description: 'Powerful performance with Samsung Galaxy',
      price: 1100,
      type: 'phone',
      color: 'black',
      quantity: 1,
    },
    {
      id: 6,
      image: 'resources/lgphone.jpg',
      title: 'LG Smartphone',
      description: 'Enjoy a premium smartphone experience with LG',
      price: 1000,
      type: 'phone',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 7,
      image: 'resources/applewatch.jpg',
      title: 'Apple Watch',
      description: 'Stay connected with Apple Watch',
      price: 500,
      type: 'watch',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 8,
      image: 'resources/samsungwatch.jpg',
      title: 'Samsung Galaxy Watch',
      description: 'Monitor your health with Samsung Galaxy Watch',
      price: 450,
      type: 'watch',
      color: 'black',
      quantity: 1,
    },
    {
      id: 9,
      image: 'resources/lgwatch.jpg',
      title: 'LG Smartwatch',
      description: 'Smart features in a sleek design',
      price: 400,
      type: 'watch',
      color: 'gold',
      quantity: 1,
    },
    {
      id: 10,
      image: 'resources/appleipad.jpg',
      title: 'Apple iPad',
      description: 'Powerful and portable with Apple iPad',
      price: 800,
      type: 'tablet',
      color: 'space gray',
      quantity: 1,
    },
    {
      id: 11,
      image: 'resources/samsungtablet.jpg',
      title: 'Samsung Tablet',
      description: 'Immerse yourself in entertainment with Samsung Tablet',
      price: 700,
      type: 'tablet',
      color: 'black',
      quantity: 1,
    },
    {
      id: 12,
      image: 'resources/lgtablet.jpg',
      title: 'LG Tablet',
      description: 'Enhance productivity with LG Tablet',
      price: 600,
      type: 'tablet',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 13,
      image: 'resources/applelaptop.jpg',
      title: 'Apple MacBook',
      description: 'Unleash your creativity with Apple MacBook',
      price: 2000,
      type: 'laptop',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 14,
      image: 'resources/samsunglaptop.jpg',
      title: 'Samsung Laptop',
      description: 'Powerful performance with Samsung Laptop',
      price: 1800,
      type: 'laptop',
      color: 'black',
      quantity: 1,
    },
    {
      id: 15,
      image: 'resources/lglaptop.jpg',
      title: 'LG Laptop',
      description: 'Sleek and efficient LG Laptop',
      price: 1500,
      type: 'laptop',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 16,
      image: 'resources/appleairpods.jpg',
      title: 'Apple AirPods',
      description: 'Wireless audio with Apple AirPods',
      price: 200,
      type: 'audio',
      color: 'white',
      quantity: 1,
    },
    {
      id: 17,
      image: 'resources/samsungearbuds.jpg',
      title: 'Samsung Earbuds',
      description: 'Immersive sound with Samsung Earbuds',
      price: 150,
      type: 'audio',
      color: 'black',
      quantity: 1,
    },
    {
      id: 18,
      image: 'resources/lgaudiodevice.jpg',
      title: 'LG Audio Device',
      description: 'High-quality audio with LG Audio Device',
      price: 180,
      type: 'audio',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 19,
      image: 'resources/applehomepod.jpg',
      title: 'Apple HomePod',
      description: 'Smart home speaker with Apple HomePod',
      price: 300,
      type: 'smart home',
      color: 'white',
      quantity: 1,
    },
    {
      id: 20,
      image: 'resources/samsunghomespeaker.jpg',
      title: 'Samsung Home Speaker',
      description: 'Enhance your audio experience with Samsung Home Speaker',
      price: 250,
      type: 'smart home',
      color: 'black',
      quantity: 1,
    },
    {
      id: 21,
      image: 'resources/lghomespeaker.jpg',
      title: 'LG Home Speaker',
      description: 'Immerse yourself in music with LG Home Speaker',
      price: 280,
      type: 'smart home',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 22,
      image: 'resources/applemouse.jpg',
      title: 'Apple Mouse',
      description: 'Smooth and precise control with Apple Mouse',
      price: 80,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 23,
      image: 'resources/samsungmouse.jpg',
      title: 'Samsung Mouse',
      description: 'Ergonomic design for comfortable use',
      price: 70,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 24,
      image: 'resources/lgmouse.jpg',
      title: 'LG Mouse',
      description: 'Sleek and stylish LG Mouse',
      price: 60,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 25,
      image: 'resources/applekeyboard.jpg',
      title: 'Apple Keyboard',
      description: 'Efficient typing with Apple Keyboard',
      price: 120,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 26,
      image: 'resources/samsungkeyboard.jpg',
      title: 'Samsung Keyboard',
      description: 'Enhance your productivity with Samsung Keyboard',
      price: 100,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 27,
      image: 'resources/lgkeyboard.jpg',
      title: 'LG Keyboard',
      description: 'Comfortable typing experience with LG Keyboard',
      price: 90,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 28,
      image: 'resources/applecharger.jpg',
      title: 'Apple Charger',
      description: 'Fast and reliable charging with Apple Charger',
      price: 50,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 29,
      image: 'resources/samsungcharger.jpg',
      title: 'Samsung Charger',
      description: 'Quick charging for your devices',
      price: 40,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 30,
      image: 'resources/lgcharger.jpg',
      title: 'LG Charger',
      description: 'Efficient charging with LG Charger',
      price: 35,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 31,
      image: 'resources/appleexternaldrive.jpg',
      title: 'Apple External Drive',
      description: 'Expand your storage with Apple External Drive',
      price: 150,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 32,
      image: 'resources/samsungexternaldrive.jpg',
      title: 'Samsung External Drive',
      description: 'Portable storage solution with Samsung External Drive',
      price: 130,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 33,
      image: 'resources/lgexternaldrive.jpg',
      title: 'LG External Drive',
      description: 'Reliable storage for your files',
      price: 120,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 34,
      image: 'resources/appleheadphones.jpg',
      title: 'Apple Headphones',
      description: 'Immerse yourself in music with Apple Headphones',
      price: 150,
      type: 'audio',
      color: 'white',
      quantity: 1,
    },
    {
      id: 35,
      image: 'resources/samsungheadphones.jpg',
      title: 'Samsung Headphones',
      description: 'High-quality sound with Samsung Headphones',
      price: 120,
      type: 'audio',
      color: 'black',
      quantity: 1,
    },
    {
      id: 36,
      image: 'resources/lgheadphones.jpg',
      title: 'LG Headphones',
      description: 'Comfortable and immersive audio experience',
      price: 100,
      type: 'audio',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 37,
      image: 'resources/applespeakers.jpg',
      title: 'Apple Speakers',
      description: 'Enhance your audio setup with Apple Speakers',
      price: 250,
      type: 'audio',
      color: 'white',
      quantity: 1,
    },
    {
      id: 38,
      image: 'resources/samsungspeakers.jpg',
      title: 'Samsung Speakers',
      description: 'Powerful sound for your entertainment',
      price: 200,
      type: 'audio',
      color: 'black',
      quantity: 1,
    },
    {
      id: 39,
      image: 'resources/lgspeakers.jpg',
      title: 'LG Speakers',
      description: 'Immersive audio experience with LG Speakers',
      price: 180,
      type: 'audio',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 40,
      image: 'resources/applesmartwatch.jpg',
      title: 'Apple Smartwatch',
      description: 'Stay connected and track your fitness with Apple Smartwatch',
      price: 400,
      type: 'wearable',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 41,
      image: 'resources/samsungsmartwatch.jpg',
      title: 'Samsung Smartwatch',
      description: 'Stay fit and stylish with Samsung Smartwatch',
      price: 350,
      type: 'wearable',
      color: 'black',
      quantity: 1,
    },
    {
      id: 42,
      image: 'resources/lgsmartwatch.jpg',
      title: 'LG Smartwatch',
      description: 'Track your health and receive notifications with LG Smartwatch',
      price: 300,
      type: 'wearable',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 43,
      image: 'resources/appleairtags.jpg',
      title: 'Apple AirTags',
      description: 'Keep track of your belongings with Apple AirTags',
      price: 30,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 44,
      image: 'resources/samsungsmarttag.jpg',
      title: 'Samsung SmartTag',
      description: 'Never lose your valuables with Samsung SmartTag',
      price: 25,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 45,
      image: 'resources/lgtracker.jpg',
      title: 'LG Tracker',
      description: 'Track your items with LG Tracker',
      price: 20,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 46,
      image: 'resources/applepowerbank.jpg',
      title: 'Apple Power Bank',
      description: 'Stay powered up on the go with Apple Power Bank',
      price: 80,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 47,
      image: 'resources/samsungpowerbank.jpg',
      title: 'Samsung Power Bank',
      description: 'Portable charging solution with Samsung Power Bank',
      price: 70,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 48,
      image: 'resources/lgpowerbank.jpg',
      title: 'LG Power Bank',
      description: 'Reliable power backup with LG Power Bank',
      price: 60,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 49,
      image: 'resources/applemousepad.jpg',
      title: 'Apple Mouse Pad',
      description: 'Smooth surface for precise mouse control',
      price: 20,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 50,
      image: 'resources/samsungmousepad.jpg',
      title: 'Samsung Mouse Pad',
      description: 'Comfortable mouse usage with Samsung Mouse Pad',
      price: 15,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 51,
      image: 'resources/lgmousepad.jpg',
      title: 'LG Mouse Pad',
      description: 'Enhance your gaming experience with LG Mouse Pad',
      price: 12,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 52,
      image: 'resources/appleusbhub.jpg',
      title: 'Apple USB Hub',
      description: 'Connect multiple devices with Apple USB Hub',
      price: 50,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 53,
      image: 'resources/samsungusbhub.jpg',
      title: 'Samsung USB Hub',
      description: 'Expand your connectivity with Samsung USB Hub',
      price: 40,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 54,
      image: 'resources/lgusbhub.jpg',
      title: 'LG USB Hub',
      description: 'Convenient USB expansion with LG USB Hub',
      price: 35,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 55,
      image: 'resources/applemicrophone.jpg',
      title: 'Apple Microphone',
      description: 'Capture professional-grade audio with Apple Microphone',
      price: 150,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 56,
      image: 'resources/samsungmicrophone.jpg',
      title: 'Samsung Microphone',
      description: 'High-quality recording with Samsung Microphone',
      price: 120,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 57,
      image: 'resources/lgmicrophone.jpg',
      title: 'LG Microphone',
      description: 'Versatile microphone for various applications',
      price: 100,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 58,
      image: 'resources/applemousemat.jpg',
      title: 'Apple Mouse Mat',
      description: 'Smooth and precise mouse movement with Apple Mouse Mat',
      price: 30,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 59,
      image: 'resources/samsungmousemat.jpg',
      title: 'Samsung Mouse Mat',
      description: 'Optimized surface for accurate mouse tracking',
      price: 25,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 60,
      image: 'resources/lgmousemat.jpg',
      title: 'LG Mouse Mat',
      description: 'Enhance your gaming performance with LG Mouse Mat',
      price: 20,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 61,
      image: 'resources/applesmartpen.jpg',
      title: 'Apple Smart Pen',
      description: 'Draw and write with precision using Apple Smart Pen',
      price: 120,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 62,
      image: 'resources/samsungsmartpen.jpg',
      title: 'Samsung Smart Pen',
      description: 'Seamless writing and drawing experience with Samsung Smart Pen',
      price: 100,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 63,
      image: 'resources/lgsmartpen.jpg',
      title: 'LG Smart Pen',
      description: 'Efficient note-taking with LG Smart Pen',
      price: 90,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 64,
      image: 'resources/applestylus.jpg',
      title: 'Apple Stylus',
      description: 'Enhance your touch screen experience with Apple Stylus',
      price: 80,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 65,
      image: 'resources/samsungstylus.jpg',
      title: 'Samsung Stylus',
      description: 'Precise and accurate input with Samsung Stylus',
      price: 70,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 66,
      image: 'resources/lgstylus.jpg',
      title: 'LG Stylus',
      description: 'Versatile stylus for creative expression',
      price: 60,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 67,
      image: 'resources/applesmartcase.jpg',
      title: 'Apple Smart Case',
      description: 'Protection and style for your device with Apple Smart Case',
      price: 50,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 68,
      image: 'resources/samsungsmartcase.jpg',
      title: 'Samsung Smart Case',
      description: 'Durable and stylish protection for your device',
      price: 40,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 69,
      image: 'resources/lgsmartcase.jpg',
      title: 'LG Smart Case',
      description: 'Slim and lightweight protection for your device',
      price: 35,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 70,
      image: 'resources/applelaptopstand.jpg',
      title: 'Apple Laptop Stand',
      description: 'Elevate your laptop for improved ergonomics',
      price: 40,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 71,
      image: 'resources/samsunglaptopstand.jpg',
      title: 'Samsung Laptop Stand',
      description: 'Sturdy and adjustable stand for your laptop',
      price: 35,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 72,
      image: 'resources/lglaptopstand.jpg',
      title: 'LG Laptop Stand',
      description: 'Portable and convenient stand for your laptop',
      price: 30,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 73,
      image: 'resources/appleprojector.jpg',
      title: 'Apple Projector',
      description: 'Enjoy large-screen entertainment with Apple Projector',
      price: 500,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 74,
      image: 'resources/samsungprojector.jpg',
      title: 'Samsung Projector',
      description: 'High-quality projection for your presentations',
      price: 450,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 75,
      image: 'resources/lgprojector.jpg',
      title: 'LG Projector',
      description: 'Versatile and immersive projection experience',
      price: 400,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 76,
      image: 'resources/applemonitor.jpg',
      title: 'Apple Monitor',
      description: 'Vibrant and detailed display with Apple Monitor',
      price: 600,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 77,
      image: 'resources/samsungmonitor.jpg',
      title: 'Samsung Monitor',
      description: 'Enhance your productivity with Samsung Monitor',
      price: 550,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 78,
      image: 'resources/lgmonitor.jpg',
      title: 'LG Monitor',
      description: 'Immersive visual experience with LG Monitor',
      price: 500,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 79,
      image: 'resources/appleprinters.jpg',
      title: 'Apple Printer',
      description: 'Print documents and photos with ease using Apple Printer',
      price: 200,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 80,
      image: 'resources/samsungprinter.jpg',
      title: 'Samsung Printer',
      description: 'Fast and reliable printing with Samsung Printer',
      price: 180,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 81,
      image: 'resources/lgprinter.jpg',
      title: 'LG Printer',
      description: 'Efficient printing solution for your home or office',
      price: 150,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    }

  ];

  const name = sessionStorage.getItem("name");
  const username = $('#username').append('<strong> Hello ' + name + '</strong>');

  var cartCounter = sessionStorage.getItem("cardsData");
  if (cartCounter === null) {
    cartCounter = 0;
  }
  else {
    cartCounter = JSON.parse(sessionStorage.getItem("cardsData")).length;
  }
  console.log(cartCounter);

  // Generate the navbar
  var navbar = $('<nav class="navbar navbar-light bg-light justify-content-between fixed-top id="nav-bar""></nav>');
  var brand = $('<a class="navbar-brand" href="#">LOGO</a>');
  var form = $('<form class="form-inline"></form>');
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
    { id: 'product-type', label: 'Product Type:', options: ['all', 'tv', 'computers', 'phones', 'tablets', 'office', 'kitchen', 'garden'] },
    { id: 'color', label: 'Color:', options: ['all', 'red', 'blue', 'green', 'white', 'gold', 'black', 'silver', 'gold', 'space gray'] },
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
      var price = $('<p class="card-price">$' + data.price + '</p>');
      var addToCartButton = $(
        '<button class="btn btn-primary btn-add-to-cart">Add to Cart</button>'
      );
      var footer = $('<div class= "add-btn-cart"></div>');

      addToCartButton.click(function () {
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


  ///////////////////* Facebook *////////////////////////- took from ayrshare website











  /////////////////////////////////////////////////////////////
  ///////////////////* End of API's *////////////////////////////
  /////////////////////////////////////////////////////////////



});


