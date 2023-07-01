$(document).ready(function () {
    // admin clicks on "products" button
    $("#productListingBtn").click(function () {
        clearPage();
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


    ////// Users Button ////////

    $("#usersBtn").click(function () {
        clearPage();
        $.ajax({
            url: '/admin/getAllUsers',
            method: 'GET',
            success: function (res) {
                const { users } = res;
                const usersDiv = $("#users");

                usersDiv.empty(); // clear the usersDiv before appending new users

                const userList = $('<ul>'); // create a <ul> element to hold the user list
                const titleInPage = $('<h2>').text("Users list");
                users.forEach(user => {
                    const usernameElement = $('<li>').text(user.username); // create <li> element to display the username
                    userList.append(usernameElement); // append the username element to the userList
                });

                usersDiv.append(titleInPage, userList); // append the userList to the usersDiv
            },
        });
    });


    ////// Website Statistics Button ////////
    $("#websiteStatsBtn").click(function () {
        clearPage();
        $.ajax({
            url: '/admin/getAllUsersCount',
            method: 'GET',
            success: function (res) {
                const numOfUsers = res.usersCount;

                // Create or update the chart
                createOrUpdateChart(numOfUsers);
            },
            error: function (xhr, status, error) {
                console.log("Error:", error); // Handle the error in an appropriate way
            }
        });
    });

    // function to create or update the chart
    function createOrUpdateChart(numOfUsers) {

        var chartElement = $('#userChart')[0].getContext('2d');

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
                data.push(0); // initialize daily data with 0
            }
            labels.push(currentDate.toLocaleDateString());
            data.push(numOfUsers); // add initial data

            window.userChart = new Chart(chartElement, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'The number of users in the last week',
                        data: data,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            precision: 0 // Display integers only
                        }
                    }
                }
            });
        }
    }


    $("#incomeBtn").click(function () {
        // clearPage();
        $.ajax({
            url: '/admin/getTotalAmount',
            method: 'GET',
            success: function (res) {
                
                console.log('Total amount:', res.totalAmount); 

                // update the page with the total amount
                $('#totalAmount').text('Total Amount: ' + res.totalAmount);
            },
            error: function (xhr, status, error) {
                console.log("Error:", error); 
            }
        });
    });






    // function to clear the page content
    function clearPage() {
        $("#products").empty();
        $("#users").empty();
        $("#numOfUsers").empty();

        // this if solved the problem of refresh the page with the Chart
        if (window.userChart instanceof Chart) {
            window.userChart.destroy(); // destroy the chart instance
            delete window.userChart; // remove the reference to the chart
        }

    }

});
