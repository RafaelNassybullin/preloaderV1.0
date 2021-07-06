let target = document.querySelector('.target');
document.body.onload = function () {
    $('.source').animate({
        fontSize: 60,
        color: "white",
        background: 'black'
    })
    setTimeout(function () {
        let preloader = document.querySelector('.preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
        $(function n() {
            let logo = $('.source').appendTo("body");
            logo.css({
                top: $('.source').offset().top,
                left: $('.source').offset().left,
                position: 'absolute'
            })
            logo.animate({
                    top: $('.target').offset().top,
                    left: $('.target').offset().left,
                    opacity: 1,
                    fontSize: 14,
                    padding: 10,
                }, 1000,
                function () {
                    setTimeout(() => {
                        $('.source').remove();
                        target.style.opacity = '1'
                    }, 1200)
                })
        })
    }, 1000);
}