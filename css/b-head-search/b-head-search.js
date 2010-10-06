/**
 * @author Oleg
 */

$(function() {
	// Для формы поиска
	var search_box_text = "Поиск внутри Microsoft.com";
	
	$('#msviLSBtBox').val(search_box_text).parent().addClass('default-value');
	$('#msviLSBtBox').focus(function(){
		if ($(this).parent().hasClass('default-value')) {
			$(this).
				val('')
				.parent().removeClass('default-value');
		}
	});
	
	$('#msviLSBtBox').blur(function(){
		if ($(this).val() == "") {
			$(this).parent().addClass('default-value').end().val(search_box_text);
		}
	});
	
	$('#msviLSBssearch').click(function(){
		if ($('#msviLSBtBox').val() == search_box_text) {
			$('#msviLSBtBox').val('');
		}
	});
	$('#msviLSBtBox').after($('<input>').attr({'type': 'hidden', 'name': 'q', 'id' : 'msviLSBtBox-q'}));
	$('#msviLSBtBox').keyup(function(){
		$('#msviLSBtBox-q').val(encodeURIComponent($(this).val()));
	});
	
	$('#msviLSBWeb').click(function(){
		if ($('#msviLSBtBox').val() == search_box_text) {
			$('#msviLSBtBox-q').val('');
		}
		$(this).parents('form').attr('action', 'http://bing.com');
	});
});