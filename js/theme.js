// JavaScript Document

 AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });
	  
	  
	  jQuery('.featured-owl').owlCarousel({
                center: true,
                items:1,
                loop:true,
                margin:0,
                nav:true,
                  navText: ['<span><img src="img/arrow-left.png" with="30"></span>','<span><img src="img/arrow-right.png" with="30"></span>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
               
            });
			
			
			 jQuery('.relted-owl').owlCarousel({
                items:1,
                loop:true,
                margin:20,
                nav:true,
				dots:false,
                  navText: ['<span><img src="img/arrowleftne.jpg"></span>','<span><img src="img/arrowright.jpg"></span>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
               
            });



jQuery('.service-home-owl').owlCarousel({
                items:1,
                autoplay:true,
                autoplayTimeout:3000,
                loop:true,
                margin:15,
                dots: false,
                nav:true,
navText: ['<span><img src="/images/arrowleft.png" style="width:30px"></span>','<span"><img src="/images/arrowright.png" style="width:30px"></span>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
               
            });



jQuery('.banner-home-owl').owlCarousel({
                items:1,
                autoplay:true,
                loop:true,
                margin:15,
                dots: false,
                nav:true,
navText: ['<span class="col-sm-2 ms-3"><img src="/images/arrowleft.png" style="width:30px"></span>','<span class="col-sm-2 me-3"><img src="/images/arrowright.png" style="width:30px"></span>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
               
            });



jQuery('.partners-home-owl').owlCarousel({
                items:1,
                loop:true,
                margin:30,
                nav:false,
navText: ['<span class="col-sm-3"><img src="/images/arrowleft.png" style="width:30px"></span>','<span class="col-sm-3"><img src="/images/arrowright.png" style="width:30px"></span>'],
                responsive:{
                    0:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
               
            });

	  
	  
document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
})

    
document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100)
      navbar.classList.add('navbar-dark');
    else
      navbar.classList.remove('navbar-dark');
  });
}


// (c) 2020-2022 Written by Simon Köhler in Panama
// github.com/koehlersimon
// simon-koehler.com

// No JavaScript needed for this example anymore!

document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
})

