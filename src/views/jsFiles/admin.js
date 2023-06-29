$(document).ready(function () {
    // admin clicks on "products" button
    $("#productListingBtn").click(function () {
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
                        <tr id="${product.id}">
                            <td name="id">${product.id}</td>
                            <td><input name="title" type='text' class='form-control' value='${product.title}'></td>
                            <td><input name="description" type='text' class='form-control' value='${product.description}'></td>
                            <td><input name="price" type='number' class='form-control' value='${product.price}'></td>
                            <td><input name="quantity" type='number' class='form-control' value='${product.quantity}'></td>
                            <td><img name="image" src='${product.image}' alt='Product Image' width='300' height='100' /></td>
                            <td><button class='btn btn-sm btn-danger update-button' id='${product.id}_update'>Update</button></td>
                            <td><button class='btn btn-sm btn-danger delete-button' id='${product.id}_delete'>Delete</button></td>
                        </tr>`;
                    tableBody.append(row);
                }
            },
        });
    });

    $("#products").on('click', 'button', function () {
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
                    id: productId
                }),
                contentType: 'application/json'
            });    
        } else if (action == "update") {
            // get all the product's values using jquery
            const title = $('input[name="title"]', `#${productId}`).val();
            const description = $('input[name="description"]', `#${productId}`).val();
            const price = $('input[name="price"]', `#${productId}`).val();
            const quantity = $('input[name="quantity"]', `#${productId}`).val();
            const image = $('img[name="image"]', `#${productId}`).attr('src');
            const product = { id: productId, title, description, price, quantity, image };
            
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