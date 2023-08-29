function populateProductTable() {
    $.ajax({
        url: '/admin/getAllProducts',
        method: 'GET',
        // populate the products table
        success: function (res) {
            const { products } = res;

            const div = $("#products");
            div.empty();
            div.append(`
                <div class="toolbar">
                    <button id="addProductBtn" class="btn btn-outline-success">Add new product</button>
                    <button id="submitProductsBtn" class="btn btn-outline-success">Submit new products</button>
                    <table id="productsTable" class="table"></table>
                </div>
            `);

            if (!products || products.length == 0) {
                return;
            }

            const table = $("#products #productsTable");

            const tableStructure = `
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Color</th>
                    <th>Type</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody></tbody>`;
            table.append(tableStructure);
            const tableBody = $("#products #productsTable tbody");

            // Add new rows
            products.forEach(product => {
                const row = `
                    <tr id="${product._id}">
                        <td><input name="title" type='text' class='form-control' value='${product.title}'></td>
                        <td><input name="description" type='text' class='form-control' value='${product.description}'></td>
                        <td><input name="price" type='number' class='form-control' value='${product.price}'></td>
                        <td><input name="quantity" type='number' class='form-control' value='${product.quantity}'></td>
                        <td><input name="color" type='text' class='form-control' value='${product.color}'></td>
                        <td><input name="type" type='text' class='form-control' value='${product.type}'></td>
                        <td><img name="image" src='${product.image}' alt='Product Image' width='300' height='100' /></td>
                        <td><button class='btn btn-sm btn-outline-info update-button' id='${product._id}_update'>Update</button></td>
                        <td><button class='btn btn-sm btn-outline-danger delete-button' id='${product._id}_delete'>Delete</button></td>
                    </tr>`;
                tableBody.append(row);
            });
        },
        error: function(error) {
            console.error("Error:",error);
        }
    });
}


$("#refreshBtn").click(function()
{
    var ws = new WebSocket('ws://localhost:3000/');
    ws.onmessage=function(event)
    {
        ws.send("admin");
    }
    location.reload();
})

function populateOrderTable(search) {
    $.ajax({
        url: `/admin/getAllOrders`,
        method: 'GET',
        success: function (res) {
            const { orders } = res;
            const div = $("#orders");
            div.empty();
            var form = $('<form class="form-inline toolbar" id="form-inline"></form>');
            var searchInput = $('<input class="form-control mr-sm-2" id="order-search-input" type="search" placeholder="Search" aria-label="Search">');
            var searchButton = $('<button class="btn btn-outline-primary my-2 my-sm-0" id="order-search-button" type="submit">Search</button>');
            form.append(searchInput);
            form.append(searchButton);
            div.append(form);

            $('#order-search-button').click(function (event) {
                event.preventDefault();
                const inputButton = $('#order-search-input');
                const input = inputButton.val();
                populateOrderTable(input);
            });

            if (!orders || orders.length == 0) {
                return;
            }

            div.append(`<table id="ordersTable" class="table"></table>`);
            const table = $("#orders #ordersTable");

            const tableStructure = `
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Created</th>
                        <th>Price</th>
                        <th>Products</th>
                        <th>ConfirmationStatus</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;
            table.append(tableStructure);
            const tableBody = $("#orders #ordersTable tbody");

            // Add new rows
            orders.forEach(order => {
                order.carts.forEach(cart => {
                    const isPending = cart.confirmationStatus === 'Pending';
                    const row = `
                    <tr id="${cart._id}">
                        <td>${order.username}</td>
                        <td>${cart.created}</td>
                        <td>${cart.price}</td>
                        <td>${cart.products.join(', ')}</td>
                        <td>${cart.confirmationStatus}</td>
                        <td><button ${!isPending ? 'disabled' : ''} class='btn btn-sm btn-outline-info confirm-button' id='${cart._id}_confirm'>Confirm</button></td>
                        <td><button ${!isPending ? 'disabled' : ''} class='btn btn-sm btn-outline-danger cancel-button' id='${cart._id}_cancel'>Cancel</button></td>
                    </tr>`;
                    if (!search
                        || order.username.includes(search)
                        || cart.products.find(product => product.includes(search))) {
                        tableBody.append(row);
                    }
                });
            });

            const ordersDiv = $("#orders");
            ordersDiv.css('display', 'block');
        },
    });
}

$(document).ready(function () {
    // admin clicks on "products" button
    $("#productListingBtn").click(function () {
        clearPage();
        populateProductTable();
    });

    $('#ordersBtn').click(function () {
        clearPage();
        populateOrderTable();
    });

    $("#orders").on('click', 'button', function () {
        const [cartId, action] = $(this).attr('id').split('_');
        if (!cartId || !action) {
            return;
        }


        const confirmationStatus =
            action === 'confirm'
                ? 'Confirmed'
                : 'Cancelled';
        $.ajax({
            url: '/admin/updateOrder',
            method: 'POST',
            data: JSON.stringify({
                cartId,
                confirmationStatus
            }),
            contentType: 'application/json'
        });

        populateOrderTable();
    });

    $("#products").on('click', 'button', function () {
        if ($(this).attr('id') == 'addProductBtn') {
            const tableBody = $("#products #productsTable tbody");
            const row = `
                <tr name="NEW-PRODUCT">
                    <td><input name="title" type='text' class='form-control' value=''></td>
                    <td><input name="description" type='text' class='form-control' value=''></td>
                    <td><input name="price" type='number' class='form-control' value=''></td>
                    <td><input name="quantity" type='number' class='form-control' value=''></td>
                    <td><input name="color" type='text' class='form-control' value=''></td>
                    <td><input name="type" type='text' class='form-control' value=''></td>
                    <td><input name="image" type='text' class='form-control' value=''></td>
                </tr>`;
            tableBody.prepend(row);
        };

        if ($(this).attr('id') == 'submitProductsBtn') {
            const elements = $('[name="NEW-PRODUCT"]');

            elements.each(function () {
                $(this).attr('name', '');
            });

            const products = [];
            elements.each(function () {
                const id = $(this).attr('id');
                const title = $('input[name="title"]').val();
                const description = $('input[name="description"]').val();
                const price = $('input[name="price"]').val();
                const quantity = $('input[name="quantity"]').val();
                const color = $('input[name="color"]').val();
                const type = $('input[name="type"]').val();
                const image = $('input[name="image"]').val();
                const product = { title, description, price, quantity, color, type, image };
                products.push(product);
            });

            $.ajax({
                url: '/admin/addProducts',
                method: 'POST',
                // the server knows which product to delete by its id
                data: JSON.stringify(products),
                contentType: 'application/json'
            });

            populateProductTable();
        };

        // parse the button id, and figure out the product and the action
        const [productId, action] = $(this).attr('id').split('_');

        // apply the appropriate action
        if (action == "delete") {
            // call server's delete endpoint
            $.ajax({
                url: '/admin/removeProduct',
                method: 'POST',
                // the server knows which product to delete by its id
                data: JSON.stringify({
                    _id: productId
                }),
                contentType: 'application/json'
            });
            populateProductTable();
        } else if (action == "update") {
            // get all the product's values using jquery
            const title = $('input[name="title"]', `#${productId}`).val();
            const description = $('input[name="description"]', `#${productId}`).val();
            const price = $('input[name="price"]', `#${productId}`).val();
            const quantity = $('input[name="quantity"]', `#${productId}`).val();
            const color = $('input[name="color"]', `#${productId}`).val();
            const image = $('img[name="image"]', `#${productId}`).attr('src');
            const product = { _id: productId, title, description, price, quantity, color, image };

            // pass all the current values to the server, because some/all of them are updated
            $.ajax({
                url: '/admin/updateProduct',
                method: 'POST',
                data: JSON.stringify(product),
                contentType: 'application/json'
            });
        }
    })




    ////// Users Button ////////

    

    $("#usersBtn").click(function () 
    {
        clearPage();
        $.ajax({
            url: '/admin/getAllUsers',
            method: 'GET',
            success: function (res) {
                const { users } = res;
                const usersDiv = $("#users");

                usersDiv.empty(); // clear the usersDiv before appending new users

                const userList = $('<ul>'); // create a <ul> element to hold the user list
                userList.attr("id","contrainerUsers");
                const titleInPage = $('<h2>').text("Users list");
                users.forEach(user => {

                    

                    const usernameElement = $('<li>').attr("id","userList") // create <li> element to display the username
                
                    
                    let username = $("<h4>").text(user.username)

                    let deleteBtn = $('<button>', 
                    {
                        type: 'button',
                        class: 'btn btn-outline-primary deleteUser',
                        id: 'deleteUser',
                        text: 'Delete', 
                      });
                      usernameElement.append(username,deleteBtn)
                    userList.append(usernameElement); // append the username element to the userList
                });



    
            
                



                usersDiv.append(titleInPage, userList); // append the userList to the usersDiv



                $(".deleteUser").click(function(event)
                {            


                    var username = event.target.closest("li").firstChild.textContent

                    if (username == sessionStorage.getItem("name"))
                    {
                        return;
                    }
                    

                    $.ajax({
                        url: '/admin/deleteUser',
                        method: 'POST',
                        data: JSON.stringify({
                            
                            username
                        }),
                        contentType: 'application/json',
                        success: function (res) 
                        {
                            location.reload()
                        },
                        error: function (xhr, status, error) {
                            console.log("Error:", error);
                        }
                    });
                });

            },
        });
    });


    function deleteUser()
    {
        alert()
    }


    //////// Website Statistics Button ////////
    d3.select("#websiteStatsBtn").on("click", function () {
        clearPage();
        d3.json("/admin/getAllUsersCount")
            .then(function (res) {
                const numOfUsers = res.usersCount;

                // Create or update the chart
                createOrUpdateChart(numOfUsers);
            })
            .catch(function (error) {
                console.log("Error:", error); // Handle the error in an appropriate way
            });
    });

    // function to create or update the chart
    function createOrUpdateChart(numOfUsers) {

        ///////////////////////
        /////// using D3.js ///
        ///////////////////////    
        var chartElement = d3.select("#userChart").node().getContext("2d");

        // check if the chart already exists
        if (window.userChart instanceof Chart) {
            // update the existing chart with new data
            const currentDate = new Date();
            const currentLabel = currentDate.toLocaleDateString();
            window.userChart.data.labels.push(currentLabel);
            window.userChart.data.datasets[0].data.push(numOfUsers);
            window.userChart.update();
        } else {
            // create a new chart
            const currentDate = new Date();
            const labels = [];
            const data = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date(currentDate);
                date.setDate(currentDate.getDate() - i);
                labels.push(date.toLocaleDateString());
                data.push(numOfUsers-i); // initialize daily data with 0
            }
            

            window.userChart = new Chart(chartElement, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "The number of users in the last week",
                            data: data,
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            precision: 0, // Display integers only
                        },
                    },
                },
            });
        }
    }




    d3.select("#incomeBtn").on("click", function () {
        clearPage();
        d3.json("/admin/lastWeekAmountPerDay")
            .then(function (res) {
                const arrayData = res;
    
                // Create or update the chart
                createOrUpdateChart1(arrayData);
            })
            .catch(function (error) {
                console.log("Error:", error); // Handle the error in an appropriate way
            });
    });
    
    // function to create or update the chart
    function createOrUpdateChart1(orders) {
        ///////////////////////
        /////// using D3.js ///
        ///////////////////////    
        const orders1 = orders.orders;
        var chartElement = document.getElementById("incomeChart").getContext("2d"); // Use `getElementById` instead of D3.select        
        // check if the chart already exists
        if (window.userChart instanceof Chart) {
            // update the existing chart with new data
            window.userChart.data.labels.push(lables);
            window.userChart.data.datasets[0].data.push(avgCost);
            window.userChart.update();
        } else {
            const labels = []
            const avgCost = []
            orders1.forEach(user => {
                labels.push(user._id);
            })
            orders1.forEach(price => {
                avgCost.push(price.avgCartPrice);
            })

            /// sort the bars from big to small
            avgCost.sort((a1,a2) => a2-a1 );

            // create a new chart
            window.userChart = new Chart(chartElement, {
                type: "bar",
                label: "Total income from user",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Total income from user",
                            data: avgCost,
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            precision: 0, // Display integers only
                        },
                    },
                },
            });
        }
    }
    







    // function to clear the page content
    function clearPage() {
        $("#products").empty();
        $("#users").empty();
        $("#numOfUsers").empty();
        $("#income").empty();
        $("#orders").empty();

        // this if solved the problem of refresh the page with the Chart
        if (window.userChart instanceof Chart) {
            window.userChart.destroy(); // destroy the chart instance
            delete window.userChart; // remove the reference to the chart
        }

    }


    $("#mapsBtn").click(function() {
        window.location.href = "/mapOfStores"; // Replace with your actual URL
    });


 

    var ws = new WebSocket('ws://localhost:3000/');

    ws.onmessage = function (event) {
        $("#usersCounter").text("Online users: " + event.data);
    }




       /////// button for return to main page ///////
      $("#returnToMainBtn").click(function() {
        window.location.href = "/mainPage"; 
    });


  
});

