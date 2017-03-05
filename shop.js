window.onload = function(){
	var aLi = document.getElementsByTagName('li');

	var oDiv = document.getElementById('div1');

	var obj = {};
	var oMoney = null;
	var iNum = 0;

	for(var i=0;i<aLi.length;i++){
		aLi[i].ondragstart = function(ev){

			var aP = this.getElementsByTagName('p');

			ev.dataTransfer.setData('title', aP[0].innerHTML );
			ev.dataTransfer.setData('money', aP[1].innerHTML );

			ev.dataTransfer.setDragImage(this,0,0);

		};
	}

	oDiv.ondragover = function(ev){
		ev.preventDefault();
	};

	oDiv.ondrop = function(ev){

		var title = ev.dataTransfer.getData('title');
		var money = ev.dataTransfer.getData('money');


		if( !obj[title] ){

			var oP = document.createElement('p');

			var oSpan = document.createElement('span');
			oSpan.innerHTML = 1;
			oSpan.className = 'box1';
			oP.appendChild(oSpan);

			var oSpan = document.createElement('span');
			oSpan.innerHTML = title;
			oSpan.className = 'box2';
			oP.appendChild(oSpan);

			var oSpan = document.createElement('span');
			oSpan.innerHTML = money;
			oSpan.className = 'box3';
			oP.appendChild(oSpan);

			oDiv.appendChild( oP );

			obj[title] = 1;

		}
		else{

			var aBox1 = document.getElementsByClassName('box1');
			var aBox2 = document.getElementsByClassName('box2');

			for(var i=0;i<aBox2.length;i++){

				if( aBox2[i].innerHTML == title ){
					aBox1[i].innerHTML = parseInt(aBox1[i].innerHTML) + 1;
				}

			}

		}

		ev.preventDefault();

		if(!oMoney){
			oMoney = document.createElement('div');
			oMoney.id = 'allMoney';

		}

		iNum += parseInt(money);

		oMoney.innerHTML = iNum + '￥';
		oDiv.appendChild( oMoney );


	};

};
