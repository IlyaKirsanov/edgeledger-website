function initMap() {
    const loc = {lat: 46.384, lng: 30.715};
    const map = new google.maps.Map(document.querySelector('.map'),
        {
            zoom: 8,
            center: loc
        });
    const marker = new google.maps.Marker({position: loc, map: map});
}
//sticky menu background
window.addEventListener('scroll', function () {
    if(window.scrollY>150){
        document.querySelector('#navbar').style.background='rgba(51, 51, 51, 0.9)';
    }else {
        document.querySelector('#navbar').style.background='rgba(51, 51, 51, 1)';
    }
})

// smooth scrolling
$('#navbar a, .btn').on('click', function (event) {
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800);
    }
});