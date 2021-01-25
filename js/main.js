$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 1;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
function myFunction(x) {
    x.classList.toggle("change");
}

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
        // window.scrollTo(0,document.body.footer.scrollHeight);
    else
        e.style.display = 'block';
        window.scrollTo(0,document.body.scrollHeight);

}

function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (0+element.scrollHeight)+"px";
}

// slide gauche sy droite
AOS.init({once:true});
AOS.init({duration:1200});