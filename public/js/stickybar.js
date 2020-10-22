$(window).on("scroll",function(){
   if($(window).scrollTop()){
      $('.navigation').addClass('sticky');
      $('.burger').addClass('sticky')
   }
   else{
      $('.navigation').removeClass('sticky')
      $('.burger').removeClass('sticky')

   }
})