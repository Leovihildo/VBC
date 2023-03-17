// Reusable Web components
// Header
class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
    '<header id="header">'+
        '<nav id="nav_scroll" class="navbar navbar-expand-lg navbar-light bg-light sticky-top">'+
            '<div class="container">'+
            '<a class="brand" href="index.html">'+
                    '<img src="images/logova.png" alt="" class="brand-img d-inline-block align-text-top">'+
                '</a>'+
                '<button class="navbar-toggler" type="button" data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" aria-controls="offcanvasRight">'+
                    '<span class="navbar-toggler-icon clear"></span>'+
                '</button>'+
            '<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">'+
                '<div class="offcanvas-header">'+
                    '<h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>'+
                    '<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>'+
                '</div>'+
            '<div class="offcanvas-body small">'+
                '<ul class="navbar-nav justify-content-end  flex-grow-1 pe-3">'+
                    '<li class="nav-item faq"><a class="nav-link" href="#">Help</a></li>'+
                '</ul>'+
            '</div>'+
            '</div>'+
            '</div>'+
        '</nav>'+
        '</header>';
    }
}

customElements.define('main-header', Header);

// Function to show hidden evaluation form
let hidden_form = document.querySelector(".in-visible");
document.querySelector(".continue").addEventListener('click', () => {
    if(hidden_form.style.display == "none"){
        hidden_form.style.display = "block";
        document.querySelector(".continue").classList.add("hide");
    }
    else{
        hidden_form.style.display = "none";
        document.querySelector(".continue").classList.remove("hide");
    }
})

// Swiper Container
var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
