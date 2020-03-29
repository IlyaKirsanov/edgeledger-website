
function initMap() {
    const loc = {lat:46.384  , lng: 30.715};


     const map = new google.maps.Map(document.querySelector('.map'),
         {
             zoom: 8,
             center: loc
    });

     const marker = new google.maps.Marker({position: loc, map: map});
}
