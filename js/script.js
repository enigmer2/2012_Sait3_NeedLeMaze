$(document).ready(function(){
	$('#menu').localScroll(800);
	$('#menu').scroll(800)
	var r1 = '#first';
	var r2 = '#second';
	var r3 = '#three';
	var r4 = '#four';
	var r5 = '#str5';
	var r6 = '#str6';
	var r7 = '#str7';
	var r8 = '#str8';
	var r9 = '#str9';
	var r10 = '#str10';
	var r11 = '#str11';
	
	$(r1).parallax("0%", 0.1,true);
	$(r2).parallax("0%", 0.1,false);
	$(r3).parallax("50%", 0.1);
	$(r4).parallax("0%", 0.4);
	$(r5).parallax("0%", 0.4);
	$(r6).parallax("0%", 0.4);
	$(r7).parallax("0%", 0.4);
	$(r8).parallax("0%", 0.4);
	$(r9).parallax("0%", 0.1);
	$(r10).parallax("0%", 0.1);
	$(r11).parallax("0%", 0.1);
	
	$('.MustDie').parallax("0%", 2.0);
	$('.MustDie2').parallax("0%", 2.0);
	$('.MustDie3').parallax("0%", 2.0);
	$('.MustDie7').parallax("0%", 2.0);
	$('.MustDie71').parallax("0%", 2.0);
	$('.MustDie11').parallax("50%", 0.01);
	
	$('.FirstVui').css({"position":"fixed", "left":"40%","z-index":"1000"})
	$('#close').click(show2);
	$('.FirstVui').click(show).localScroll(800);
	function show() {
		function first_passed() {
			$('#load').fadeIn().animate({opacity: '-=0'}, 7000).fadeOut();
		}
		setTimeout(first_passed, 1000)
		
		function second_passed() {
			$('.FirstVui, #load').hide().animate({opacity: '-=0'},7000);
		}
		setTimeout(second_passed, 7000),
		$('.FirstVui').click(false);
	}
	function show2() {
		function save() {
			var key = 'key';
			var value = 1;
			localStorage.setItem(key,value);
			updateTable();
		}
		function first_passed() {
			$('#load').fadeIn().animate({opacity: '-=0'}, 1000).fadeOut();
		}
		setTimeout(first_passed, 1000)
		
		function second_passed() {
			$('.FirstVui, #load').hide().animate({opacity: '-=0'},1000);
		}
		setTimeout(second_passed, 1000),
		$('.FirstVui').click(false);
	}
//по клику включаем класс анимации
//по прошедстию времени переключаем класс анимации на статический класс


})
