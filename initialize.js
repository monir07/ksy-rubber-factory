const showList = () => {
    let navList = document.getElementById('nav_list').classList;
    // navList.classList.remove('hidden');
    navList.contains('hidden') ? navList.remove('hidden') : navList.add('hidden');
}

$(document).ready(function () {
    $('.your').slick({
        infinite: true,
        // Type: boolean,
        // Default: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});