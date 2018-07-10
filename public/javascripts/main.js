var url='../fazenda.json'; // relative url : 'data.json'; protocole-relative absolute url: '//website.org/path/to/data.json';

//4a.function creation
var slingshot = function (url, tplId, anchor) {
$.getJSON(url, function(data) {
	var template = $(tplId).html();
	var stone = Handlebars.compile(template)(data);
	$(anchor).append(stone);
	});
}
//4b.function firing
slingshot('../fazenda.json', '#tpl', '#anchor'); // since url = 'data.json' , we can use both notations.