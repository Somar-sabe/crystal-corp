
var HeaderKey = 'crystal-12-2021';
var BaseUrl = 'https://crystalcorp.com/';

/* for language change code */

  
  /* Google Tag Manager */
 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5SLZHDW');
 /* End Google Tag Manager */
  
  
  $(document).ready(function() {
      $(document.body).prepend('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SLZHDW" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
  });
  
 


$('document').ready(function(){

      $('.inner-dropdown span').click(function(){
        var id=$(this).attr('data-val');
        $('.li-tag-'+id).toggleClass('active');
        $('.li-ul-tag-'+id).toggleClass('show');
      });

  $('#goog-gt-tt').remove();



  // home screen our happy cline slide js //
  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});
      



var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6256d128b0d10b6f3e6d628d/1g0hi223k';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
