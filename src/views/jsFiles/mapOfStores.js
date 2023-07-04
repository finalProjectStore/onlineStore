$(document).ready(function(){

    var addresses;

    $.ajax({
        url: '/mapOfStores',
        method: 'POST',
        async:false,
        success: function (res) {
            addresses = res;
        },

    });
    
    function initMap() {
        // Initialize the map
        const map = new Microsoft.Maps.Map(document.getElementById('mapContainer'), {
            credentials: 'AiHuP6EweBkEnyNJqnTUZfgI1VTwpNzL1x4NUwO-RnoHI-V7cdqVT91BNtOwgL2X'
        });

        // Geocode and add markers for each address
        addresses.forEach(address => {
            Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
                const searchManager = new Microsoft.Maps.Search.SearchManager(map);
                const requestOptions = {
                    bounds: map.getBounds(),
                    where: address.address,
                    callback: function (result, userData) {
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

    // Load the Bing Maps script asynchronously and call initMap() when it's done
    function loadMapScript() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=initMap&key=AiHuP6EweBkEnyNJqnTUZfgI1VTwpNzL1x4NUwO-RnoHI-V7cdqVT91BNtOwgL2X';
        document.body.appendChild(script);
    }

    // Call loadMapScript() to start loading the Bing Maps script
    loadMapScript();

    initMap();



});
    
    
    
    
    
    