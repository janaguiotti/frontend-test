var url='../fazenda.json'; 

var slingshot = function (url, tplId, anchor) {
$.getJSON(url, function(data) {
	var template = $(tplId).html();
	var stone = Handlebars.compile(template)(data);
	$(anchor).append(stone);
	});
}
slingshot('../fazenda.json', '#tpl', '#anchor'); 

//count votes
$(document).ready(function() {
	$('.js-click-votes').click(function(){
		$(this).toggleClass('table__row--modify');
	});
});
