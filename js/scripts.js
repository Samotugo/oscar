$(document).ready(function(){ 

    $(".fa-search, #krossSearch").click(function (){
      $('#searchForm').toggleClass("open");
     return false;});

    $(window).scroll(function () { // прилепляет меню при прокрутке

     if ($(this).scrollTop() > 129) {
      if($(window).width() > 969){
       $('nav').addClass("fixed");} 
     }else{ $('nav').removeClass("fixed");};


     if ($(this).scrollTop() > document.documentElement.clientHeight){ // кнопка "наверх", всплытие и исчезновение
      $("#toTop").css('display','block'); 
  }else{
    $("#toTop").css('display','');}
  })

     $("#toTop").click(function (){  // кнопка "наверх", прокрутка
       $("body,html").animate({
        scrollTop:0
      }, 800);
       return false;});

     $('input,textarea').change(function() {  //убирает текст из полей формы
      if($(this).val() == ''){
        $(this).removeClass('notEmpty');
      }else{
        $(this).addClass('notEmpty');
      }
    }).change();

     $('#krossMenu').click(function() {  //вывод меню на маленьком экране
      $(this).toggleClass("kross");
      $('nav').slideToggle("slow");
      return false;
    });

     $('nav>ul>li').click(function() {  //вывод пунктов подменю
      $(this).children('div').slideToggle("slow");
      return false;
    });   
     
//Карусель
$('.item').click(function() {  //вывод пунктов подменю
  if($(window).width() < 768){ 
    $(this).find('p:last-child').slideToggle("slow");
    $(this).toggleClass("transform");
  };
    return false;
  }); 

// кнопка "Показать ещё"
var i=1;
$('#more button').click(function() { 
var items = $('#carouselPartners .carousel-item');
if (i>items.length-2){
  $('#more button').css('display', 'none');
}
items.eq(i).addClass('active');
return  i++;
   // return false;
  }); 
 //модальное окно 
$(".fancy").fancybox({
  autoSize:false,
  width:'90%',
  maxWidth:600
});
$("#contact").submit(function() { return false; });
   
 });

//Карусель
var startItem = 0;
function skroll (n){
 slide(startItem += n);
}

function slide(num) {
  var i;
  var items = $('.scroll-3 div.col-md-3');
  if(num > items.length*2){
    startItem = 0;
  }
  if(num < 1){
    startItem = items.length-1;
  }
  for(i = 0; i< items.length; i++){
    items[i].style.display = 'none';
    }
     for(i=startItem-1; i<startItem+3; i++){
      if (i >= items.length) {
        var a = i-items.length;
        items[a].style.display = 'block';
      }else{
       items[i].style.display = 'block';
      }
    }
return startItem;
}
