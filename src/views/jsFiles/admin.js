function populateProductTable() {
    $.ajax({
        url: '/admin/getAllProducts',
        method: 'GET',
        // populate the products table
        success: function (res) {
            const { products } = res;
            const tableBody = $("#products #productsTable tbody");

            // Clear existing rows
            tableBody.empty();
        
            // Add new rows
            for (var i = 0; i < products.length; i++) {
                const product = products[i];
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
            }

            const productsDiv = $("#products");
            productsDiv.css('display', 'block');
        },
    });
}

$(document).ready(function () {
    // admin clicks on "products" button
    $("#productListingBtn").click(function () {
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
});