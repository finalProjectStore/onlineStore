$(document).ready(function () {

  var data = [
    {
      id: 1,
      image: '/productsImages/appleTV4K.jpeg',
      title: 'Apple TV',
      description: 'Apple TV is the best',
      price: 1000,
      type: 'tv',
      color: 'white',
      quantity: 1,
    },
    {
      id: 2,
      image: 'productsImages/samsungTV.jpeg',
      title: 'Samsung TV',
      description: 'Experience stunning visuals with Samsung TV',
      price: 1200,
      type: 'tv',
      color: 'black',
      quantity: 1,
    },
    {
      id: 3,
      image: '/productsImages/lgsmarttv.jpeg',
      title: 'LG Smart TV',
      description: 'Get a smart TV experience with LG',
      price: 900,
      type: 'tv',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 4,
      image: 'productsImages/iphone-14-pro-max.jpeg',
      title: 'Apple iPhone 14 pro max',
      description: 'The latest iPhone with cutting-edge features',
      price: 1200,
      type: 'phones',
      color: 'space gray',
      quantity: 1,
    },
    {
      id: 5,
      image: '/productsImages/samsung-s22.jpeg',
      title: 'Samsung Galaxy s22',
      description: 'Powerful performance with Samsung Galaxy',
      price: 1100,
      type: 'phones',
      color: 'black',
      quantity: 1,
    },
    {
      id: 6,
      image: '/productsImages/lgphone.jpeg',
      title: 'LG Smartphone',
      description: 'Enjoy a premium smartphone experience with LG',
      price: 1000,
      type: 'phones',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 7,
      image: '/productsImages/applewatchsilver.jpeg',
      title: 'Apple Watch 8 GPS',
      description: 'Stay connected with Apple Watch',
      price: 500,
      type: 'watch',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 8,
      image: '/productsImages/galaxywatch.jpeg',
      title: 'Samsung Galaxy Watch',
      description: 'Monitor your health with Samsung Galaxy Watch',
      price: 450,
      type: 'watch',
      color: 'black',
      quantity: 1,
    },
    {
      id: 9,
      image: '/productsImages/lgsmartwatchgold.jpeg',
      title: 'LG Smartwatch',
      description: 'Smart features in a sleek design',
      price: 400,
      type: 'watch',
      color: 'gold',
      quantity: 1,
    },
    {
      id: 10,
      image: '/productsImages/ipadprospacegary.jpeg',
      title: 'Apple iPad Pro 13 inch',
      description: 'Powerful and portable with Apple iPad',
      price: 800,
      type: 'tablets',
      color: 'space gray',
      quantity: 1,
    },
    {
      id: 11,
      image: '/productsImages/samsungtablet.jpeg',
      title: 'Samsung Tablet',
      description: 'Immerse yourself in entertainment with Samsung Tablet',
      price: 700,
      type: 'tablets',
      color: 'black',
      quantity: 1,
    },
    {
      id: 12,
      image: '/productsImages/lgtablet.jpeg',
      title: 'LG Tablet',
      description: 'Enhance productivity with LG Tablet',
      price: 600,
      type: 'tablets',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 13,
      image: '/productsImages/applemacbookPro.jpeg',
      title: 'Apple MacBook Pro M2',
      description: 'Unleash your creativity with Apple MacBook',
      price: 2000,
      type: 'computers',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 14,
      image: '/productsImages/samsunglaptop.jpeg',
      title: 'Samsung Laptop i9 512GB',
      description: 'Powerful performance with Samsung Laptop',
      price: 1800,
      type: 'computers',
      color: 'black',
      quantity: 1,
    },
    {
      id: 15,
      image: '/productsImages/lglaptop.jpeg',
      title: 'LG Laptop 13 inch',
      description: 'Sleek and efficient LG Laptop',
      price: 1500,
      type: 'computers',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 16,
      image: '/productsImages/appleairpods.jpeg',
      title: 'Apple AirPods Pro',
      description: 'Wireless audio with Apple AirPods',
      price: 200,
      type: 'audio',
      color: 'white',
      quantity: 1,
    },
    {
      id: 17,
      image: '/productsImages/SamsungEarbuds.jpeg',
      title: 'Samsung Earbuds',
      description: 'Immersive sound with Samsung Earbuds',
      price: 150,
      type: 'audio',
      color: 'black',
      quantity: 1,
    },
    {
      id: 18,
      image: '/productsImages/LGAudioDevice.jpeg',
      title: 'LG Audio Device',
      description: 'High-quality audio with LG Audio Device',
      price: 180,
      type: 'audio',
      color: 'black',
      quantity: 1,
    },
    {
      id: 19,
      image: '/productsImages/AppleHomePod.jpeg',
      title: 'Apple HomePod',
      description: 'Smart home speaker with Apple HomePod',
      price: 300,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 20,
      image: '/productsImages/SamsungHomeSpeaker.jpeg',
      title: 'Samsung Home Speaker',
      description: 'Enhance your audio experience with Samsung Home Speaker',
      price: 250,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 21,
      image: '/productsImages/LGHomeSpeaker.jpeg',
      title: 'LG Home Speaker',
      description: 'Immerse yourself in music with LG Home Speaker',
      price: 280,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 22,
      image: '/productsImages/AppleMouse.jpeg',
      title: 'Apple Mouse',
      description: 'Smooth and precise control with Apple Mouse',
      price: 80,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 23,
      image: '/productsImages/samsungmouse.jpeg',
      title: 'Samsung Mouse',
      description: 'Ergonomic design for comfortable use',
      price: 70,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 24,
      image: '/productsImages/lgmouse.jpeg',
      title: 'LG Mouse',
      description: 'Sleek and stylish LG Mouse',
      price: 60,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 25,
      image: 'productsImages/applekeyboard.jpeg',
      title: 'Apple Keyboard',
      description: 'Efficient typing with Apple Keyboard',
      price: 120,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 26,
      image: 'productsImages/samsungkeyboard.jpeg',
      title: 'Samsung Keyboard',
      description: 'Enhance your productivity with Samsung Keyboard',
      price: 100,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 27,
      image: 'productsImages/lgkeyboard.jpeg',
      title: 'LG Keyboard',
      description: 'Comfortable typing experience with LG Keyboard',
      price: 90,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 28,
      image: 'productsImages/applecharger.jpeg',
      title: 'Apple Charger',
      description: 'Fast and reliable charging with Apple Charger',
      price: 50,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 29,
      image: 'productsImages/samsungcharger.jpeg',
      title: 'Samsung Charger',
      description: 'Quick charging for your devices',
      price: 40,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 30,
      image: 'productsImages/lgcharger.jpeg',
      title: 'LG Charger',
      description: 'Efficient charging with LG Charger',
      price: 35,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 31,
      image: 'productsImages/appleexternaldrive.jpeg',
      title: 'Apple External Drive',
      description: 'Expand your storage with Apple External Drive',
      price: 150,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 32,
      image: 'productsImages/samsungexternaldrive.jpeg',
      title: 'Samsung External Drive',
      description: 'Portable storage solution with Samsung External Drive',
      price: 130,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 33,
      image: 'productsImages/lgexternaldrive.jpeg',
      title: 'LG External Drive',
      description: 'Reliable storage for your files',
      price: 120,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 34,
      image: 'productsImages/appleheadphones.jpeg',
      title: 'Apple Headphones',
      description: 'Immerse yourself in music with Apple Headphones',
      price: 150,
      type: 'audio',
      color: 'white',
      quantity: 1,
    },
    {
      id: 35,
      image: 'productsImages/samsungheadphones.jpeg',
      title: 'Samsung Headphones',
      description: 'High-quality sound with Samsung Headphones',
      price: 120,
      type: 'audio',
      color: 'black',
      quantity: 1,
    },
    {
      id: 36,
      image: 'productsImages/lgheadphones.jpeg',
      title: 'LG Headphones',
      description: 'Comfortable and immersive audio experience',
      price: 100,
      type: 'audio',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 37,
      image: 'productsImages/applespeakers.jpeg',
      title: 'Apple Speakers',
      description: 'Enhance your audio setup with Apple Speakers',
      price: 250,
      type: 'audio',
      color: 'white',
      quantity: 1,
    },
    {
      id: 38,
      image: 'productsImages/samsungspeakers.jpeg',
      title: 'Samsung Speakers',
      description: 'Powerful sound for your entertainment',
      price: 200,
      type: 'audio',
      color: 'black',
      quantity: 1,
    },
    {
      id: 39,
      image: 'productsImages/lgspeakers.jpeg',
      title: 'LG Speakers',
      description: 'Immersive audio experience with LG Speakers',
      price: 180,
      type: 'audio',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 40,
      image: 'productsImages/applesmartwatch.jpeg',
      title: 'Apple Watch Ultra',
      description: 'Stay connected and track your fitness with Apple Smartwatch',
      price: 400,
      type: 'watch',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 41,
      image: 'productsImages/samsungsmartwatch.jpeg',
      title: 'Samsung Galaxy Watch 4',
      description: 'Stay fit and stylish with Samsung Smartwatch',
      price: 350,
      type: 'watch',
      color: 'black',
      quantity: 1,
    },
    {
      id: 42,
      image: 'productsImages/lgsmartwatch.jpeg',
      title: 'LG G Watch',
      description: 'Track your health and receive notifications with LG Smartwatch',
      price: 300,
      type: 'watch',
      color: 'black',
      quantity: 1,
    },
    {
      id: 43,
      image: 'productsImages/appleairtags.jpeg',
      title: 'Apple AirTags',
      description: 'Keep track of your belongings with Apple AirTags',
      price: 30,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 44,
      image: 'productsImages/samsungsmarttag.jpeg',
      title: 'Samsung SmartTag',
      description: 'Never lose your valuables with Samsung SmartTag',
      price: 25,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 45,
      image: 'productsImages/lgtracker.jpeg',
      title: 'LG Tracker',
      description: 'Track your items with LG Tracker',
      price: 20,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 46,
      image: 'productsImages/applepowerbank.jpeg',
      title: 'Apple Power Bank',
      description: 'Stay powered up on the go with Apple Power Bank',
      price: 80,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 47,
      image: 'productsImages/samsungpowerbank.jpeg',
      title: 'Samsung Power Bank',
      description: 'Portable charging solution with Samsung Power Bank',
      price: 70,
      type: 'accessory',
      color: 'blue',
      quantity: 1,
    },
    {
      id: 48,
      image: 'productsImages/lgpowerbank.jpeg',
      title: 'LG Power Bank',
      description: 'Reliable power backup with LG Power Bank',
      price: 60,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 49,
      image: 'productsImages/applemousepad.jpeg',
      title: 'Apple Mouse Pad',
      description: 'Smooth surface for precise mouse control',
      price: 20,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 50,
      image: 'productsImages/samsungmousepad.jpeg',
      title: 'Samsung Mouse Pad',
      description: 'Comfortable mouse usage with Samsung Mouse Pad',
      price: 15,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 51,
      image: 'productsImages/lgmousepad.jpeg',
      title: 'LG Mouse Pad',
      description: 'Enhance your gaming experience with LG Mouse Pad',
      price: 12,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 52,
      image: 'productsImages/appleusbhub.jpeg',
      title: 'Apple USB Hub',
      description: 'Connect multiple devices with Apple USB Hub',
      price: 50,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 53,
      image: 'productsImages/samsungusbhub.jpeg',
      title: 'Samsung USB Hub',
      description: 'Expand your connectivity with Samsung USB Hub',
      price: 40,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 54,
      image: 'productsImages/lgusbhub.jpeg',
      title: 'LG USB Hub',
      description: 'Convenient USB expansion with LG USB Hub',
      price: 35,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 55,
      image: 'productsImages/applemicrophone.jpeg',
      title: 'Apple Microphone',
      description: 'Capture professional-grade audio with Apple Microphone',
      price: 150,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 56,
      image: 'productsImages/samsungmicrophone.jpeg',
      title: 'Samsung Microphone',
      description: 'High-quality recording with Samsung Microphone',
      price: 120,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 57,
      image: 'productsImages/lgmicrophone.jpeg',
      title: 'LG Microphone',
      description: 'Versatile microphone for various applications',
      price: 100,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 58,
      image: 'productsImages/applemousemat.jpeg',
      title: 'Apple Mouse Mat',
      description: 'Smooth and precise mouse movement with Apple Mouse Mat',
      price: 30,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 59,
      image: 'productsImages/toaster.jpeg',
      title: 'Toaster',
      description: 'Dualit Architect 4 Slice Toaster',
      price: 25,
      type: 'kitchen',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 60,
      image: 'productsImages/LawnMower.jpeg',
      title: 'American Lawn Mower Company',
      description: 'Electric lawn mower with a powerful 11 amp engine for cutting all types of grass',
      price: 900,
      type: 'garden',
      color: 'black',
      quantity: 1,
    },
    {
      id: 61,
      image: 'productsImages/applesmartpen.jpeg',
      title: 'Apple Smart Pen',
      description: 'Draw and write with precision using Apple Smart Pen',
      price: 120,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 62,
      image: 'productsImages/samsungmicrowave.jpeg',
      title: 'Samsung MicroWave',
      description: 'Samsung MicroWave 40 Liters',
      price: 300,
      type: 'kitchen',
      color: 'black',
      quantity: 1,
    },
    {
      id: 63,
      image: 'productsImages/lgsmartpen.jpeg',
      title: 'LG Smart Pen',
      description: 'Efficient note-taking with LG Smart Pen',
      price: 90,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 64,
      image: '/productsImages/visionro.jpeg',
      title: 'Apple Vision Pro',
      description: 'Apple Vision Pro is an upcoming mixed reality headset developed by Apple',
      price: 3000,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 65,
      image: 'productsImages/ipod.jpeg',
      title: 'Apple ipod touch',
      description: 'The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple',
      price: 700,
      type: 'accessory',
      color: 'blue',
      quantity: 1,
    },
    {
      id: 66,
      image: 'productsImages/applemacpro.jpeg',
      title: 'Apple Mac Pro',
      description: 'Mac Pro is the professional desktop computer reinvented from the inside out.',
      price: 2500,
      type: 'computers',
      color: 'black',
      quantity: 1,
    },
    {
      id: 67,
      image: 'productsImages/applesmartcase.jpeg',
      title: 'Apple Smart Case',
      description: 'Protection and style for your device with Apple Smart Case',
      price: 50,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 68,
      image: 'productsImages/samsungsmartcase.jpeg',
      title: 'Samsung Smart Case',
      description: 'Durable and stylish protection for your device',
      price: 40,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 69,
      image: 'productsImages/lgsmartcase.jpeg',
      title: 'LG Smart Case',
      description: 'Slim and lightweight protection for your device',
      price: 35,
      type: 'accessory',
      color: 'red',
      quantity: 1,
    },
    {
      id: 70,
      image: 'productsImages/applelaptopstand.jpeg',
      title: 'Apple Laptop Stand',
      description: 'Elevate your laptop for improved ergonomics',
      price: 40,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 71,
      image: 'productsImages/samsunglaptopstand.jpeg',
      title: 'Samsung Laptop Stand',
      description: 'Sturdy and adjustable stand for your laptop',
      price: 35,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 72,
      image: 'productsImages/lglaptopstand.jpeg',
      title: 'LG Laptop Stand',
      description: 'Portable and convenient stand for your laptop',
      price: 30,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 73,
      image: 'productsImages/appleprojector.jpeg',
      title: 'Apple Projector',
      description: 'Enjoy large-screen entertainment with Apple Projector',
      price: 500,
      type: 'accessory',
      color: 'white',
      quantity: 1,
    },
    {
      id: 74,
      image: 'productsImages/samsungprojector.jpeg',
      title: 'Samsung Projector',
      description: 'High-quality projection for your presentations',
      price: 450,
      type: 'accessory',
      color: 'black',
      quantity: 1,
    },
    {
      id: 75,
      image: 'productsImages/lgprojector.jpeg',
      title: 'LG Projector',
      description: 'Versatile and immersive projection experience',
      price: 400,
      type: 'accessory',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 76,
      image: 'productsImages/applemonitor.jpeg',
      title: 'Apple Monitor',
      description: 'Vibrant and detailed display with Apple Monitor',
      price: 600,
      type: 'tv',
      color: 'white',
      quantity: 1,
    },
    {
      id: 77,
      image: 'productsImages/samsungmonitor.jpeg',
      title: 'Samsung Monitor',
      description: 'Enhance your productivity with Samsung Monitor',
      price: 550,
      type: 'tv',
      color: 'black',
      quantity: 1,
    },
    {
      id: 78,
      image: 'productsImages/lgmonitor.jpeg',
      title: 'LG Monitor',
      description: 'Immersive visual experience with LG Monitor',
      price: 500,
      type: 'tv',
      color: 'silver',
      quantity: 1,
    },
    {
      id: 79,
      image: 'productsImages/appleprinters.jpeg',
      title: 'Apple Printer',
      description: 'Print documents and photos with ease using Apple Printer',
      price: 200,
      type: 'office',
      color: 'white',
      quantity: 1,
    },
    {
      id: 80,
      image: 'productsImages/samsungprinter.jpeg',
      title: 'Samsung Printer',
      description: 'Fast and reliable printing with Samsung Printer',
      price: 180,
      type: 'office',
      color: 'black',
      quantity: 1,
    },
    {
      id: 81,
      image: 'productsImages/lgprinter.jpeg',
      title: 'LG Printer',
      description: 'Efficient printing solution for your home or office',
      price: 150,
      type: 'office',
      color: 'black',
      quantity: 1,
    }

  ];


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
    { id: 'product-type', label: 'Product Type:', options: ['all', 'tv', 'computers', 'phones', 'tablets', 'audio', 'office', 'accessory', 'kitchen', 'garden', 'watch'] },
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

    // Cancel access to cart without items
    if (parseInt($("#cart-counter").text()) === 0) {
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
      card.attr('data-id', data.id); // Add data-id attribute with data ID
      var image = $('<img src="' + data.image + '" class="card-img-top" alt="Card Image">');
      var cardBody = $('<div class="card-body"></div>');
      var title = $('<h5 class="card-title">' + data.title + '</h5>');
      var description = $('<p class="card-text">' + data.description + '</p>');
      var price = $('<p class="card-price">$' + data.price + '</p>');
      var addToCartButton = $('<button class="btn btn-primary btn-add-to-cart">Add to Cart</button>');
      var footer = $('<div class= "add-btn-cart"></div>');

      addToCartButton.click(function (event) {
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



});




