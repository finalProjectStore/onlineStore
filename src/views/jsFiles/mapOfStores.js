
$(document).ready(function() {

    $("#adminButton").click(function() {
        window.location.href = "/admin"; 
    });
    
    // Fetch addresses from the server
    function fetchAddresses(callback) {
        $.ajax({
            url: '/mapOfStores',
            method: 'POST',
            success: function(res) {
                callback(res);
            }
        });
    }

    // Initialize the map and add markers
    function initMap(addresses) {
        const map = new Microsoft.Maps.Map(document.getElementById('mapContainer'), {
            credentials: 'AiHuP6EweBkEnyNJqnTUZfgI1VTwpNzL1x4NUwO-RnoHI-V7cdqVT91BNtOwgL2X'
        });

        // Load the search module and geocode the addresses
        Microsoft.Maps.loadModule('Microsoft.Maps.Search', function() {
            const searchManager = new Microsoft.Maps.Search.SearchManager(map);

            addresses.forEach(address => {
                const requestOptions = {
                    bounds: map.getBounds(),
                    where: address.address,
                    callback: function(result) {
                        if (result && result.results && result.results.length > 0) {
                            const location = result.results[0].location;
                            const pin = new Microsoft.Maps.Pushpin(location, { title: address.name });
                            map.entities.push(pin);
                        }
                    }
                };
                searchManager.geocode(requestOptions);
            });
        });
    }

    // Fetch addresses and initialize the map
    fetchAddresses(function(addresses) {
        initMap(addresses);
    });

});
