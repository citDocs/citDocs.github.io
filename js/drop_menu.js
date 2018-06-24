var check = 0;
$('#drop_menu').click(function() {
	if (check == 0){
    $(this).text('Свернуть меню');
    check = 1;
  }else{
  	check = 0;
  	$(this).text('Развернуть меню');
  }
});