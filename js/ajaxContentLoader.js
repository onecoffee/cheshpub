$("#navcontainer a").on("click", function(event){
  event.preventDefault(); // отменяем переход по ссылке
  $("section").load(this.href); // грузим контент по ссылке указанной в href'е ссылки по которой кликнули
  /*
     этот кусок не работает
     нужно правильно выбрать элемент
     на котором навешено событие создания скролла
  */
  $("section *").mCustomScrollbar("update"); // обновляем скроллбары
})

function setHandlersOnMenuLinks(){
//функция вызывается когда подгружается menu.html
  $("#menu_links a").on("click", function(event){
   event.preventDefault();
   $("#mCSB_2_container").load(this.href);
   $("section *").mCustomScrollbar("update"); // то же самое
  })
}