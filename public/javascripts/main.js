//get data and calc votes
const url ='../fazenda.json'; 
slingshot(url, '#tpl', '#anchor'); 

function slingshot(url, tplId, anchor) {
	fetch(url)
	.then((res) => res.json())
	.then(function(response){
		const template = $(tplId).html();
		const newData = response;

		newData.data = newData.data.map(function(row){ 
			row.total = (row.positive + row.negative);
			row.positiveNumber = parseFloat(new String(row.positive))/parseFloat(new String(row.total)) || 0;
			row.positiveCalc = parseFloat(new String(row.positiveNumber)*100) || 0;
			row.positivePercent = Math.round(row.positiveCalc) || 0;
			row.negativeNumber = parseFloat(new String(row.negative))/parseFloat(new String(row.total)) || 0;
			row.negativeCalc = parseFloat(new String(row.negativeNumber)*100) || 0;
			row.negativePercent = Math.round(row.negativeCalc) || 0;
			return row;
		});

		newData.data = newData.data.sort((a,b)=>a.positive + b.positive);

		const stone = Handlebars.compile(template)(newData);

		setTimeout(function() {
			//show votes with click
			var qs = document.querySelectorAll.bind(document);
			qs(".js-click-votes").forEach(function(node, index){
				node.addEventListener("click", function(event) {
					var elm = event.target;
					elm.classList.toggle('table__row--modify');
				});
			});
		},500)

		$(anchor).append(stone);
	});
}