

$(document).ready(function () {
    $("#productListingBtn").click(function () {
        $.ajax({
            url: '/admin/getAllProducts',
            method: 'GET',
            success: function (res) {
                const { products } = res;
                const productsDiv = $("#products");
                products.forEach(product => {
                    console.log(product);
                    productsDiv.append(`
                        <div>
                            <p>${product['title']}</p>
                            <button id="${product['id']}_delete">Delete</button>
                        </div>`)
                });
            },
        });
    });

    $("#products").on('click', 'button', function () {
        const productId = $(this).attr('id').split('_')[0];
        $.ajax({
            url: '/admin/removeProduct',
            method: 'POST',
            data: JSON.stringify({
                id: productId
            }),
            contentType: 'application/json'
        });
    })
});