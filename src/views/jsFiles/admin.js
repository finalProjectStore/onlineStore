function populateProductTable() {
    $.ajax({
        url: '/admin/getAllProducts',
        method: 'GET',
        // populate the products table
        success: function (res) {
            const { products } = res;

            const div = $("#products");
            div.empty();
            div.append(`<button id="addProductBtn" class="btn btn-success">Add new product</button>`);
            div.append(`<button id="submitProductsBtn" class="btn btn-success">Submit new products</button>`);
            div.append(`<table id="productsTable" class="table"></table>`);

            if (!products || products.length == 0) {
                return;
            }

            const table = $("#products #productsTable");

            const headers = 
                Object.keys(products[0])
                    .filter(key => !key.startsWith('_'))
                    .map(key => `<th>${key}</th>`)
                    .join('');
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
                        <td><button class='btn btn-sm btn-info update-button' id='${product._id}_update'>Update</button></td>
                        <td><button class='btn btn-sm btn-danger delete-button' id='${product._id}_delete'>Delete</button></td>
                    </tr>`;
                tableBody.append(row);
            });
        },
    });
}

function populateOrderTable(search) {
    $.ajax({
        url: `/admin/getAllOrders`,
        method: 'GET',
        success: function (res) {
            const { orders } = res;
            const div = $("#orders");
            div.empty();
            var form = $('<form class="form-inline" id="form-inline"></form>');
            var searchInput = $('<input class="form-control mr-sm-2" id="order-search-input" type="search" placeholder="Search" aria-label="Search">');
            var searchButton = $('<button class="btn btn-outline-success my-2 my-sm-0" id="order-search-button" type="submit">Search</button>');          
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
                    <tr id="${order._id}_${order.created}">
                        <td>${order.username}</td>
                        <td>${cart.created}</td>
                        <td>${cart.price}</td>
                        <td>${cart.products.join(', ')}</td>
                        <td>${cart.confirmationStatus}</td>
                        <td><button ${!isPending ? 'disabled' : ''} class='btn btn-sm btn-info confirm-button' id='${order._id}_${cart.created}_confirm'>Confirm</button></td>
                        <td><button ${!isPending ? 'disabled' : ''} class='btn btn-sm btn-danger cancel-button' id='${order._id}_${cart.created}_cancel'>Cancel</button></td>
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

    $("#addProductBtn").click(function () {
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
    });

    $('#ordersBtn').click(function() {
        clearPage();
        populateOrderTable();
    });

    $('#submitProductsBtn').click(function() {
        const elements = $('[name="NEW-PRODUCT"]');
        
        elements.each(function() {
            $(this).attr('name', '');
        });

        const products = [];
        elements.each(function() {
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
    });

    $("#orders").on('click', 'button', function() {
        const [orderId, created, action] = $(this).attr('id').split('_');
        if (!orderId || !created || !action) {
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
                _id: orderId,
                created,
                confirmationStatus
            }),
            contentType: 'application/json'
        }); 

        populateOrderTable();
    });

    $("#productsTable").on('click', 'button', function () {
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
            const color = $('input[name="color"]', `#${id}`).val();
            const image = $('img[name="image"]', `#${productId}`).attr('src');
            const product = { id: productId, title, description, price, quantity, color, image };
            
            // pass all the current values to the server, because some/all of them are updated
            $.ajax({
                url: '/admin/updateProduct',
                method: 'POST',
                data: JSON.stringify(product),
                contentType: 'application/json'
            }); 
        }
    })

    // function to clear the page content
    function clearPage() {
        $("#products").empty();
        $("#orders").empty();
    }
});