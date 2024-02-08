var a=document.getElementById('input');
var b=document.getElementById('result');
var c=document.getElementById('inputtype');
var d=document.getElementById('resulttype');

a.addEventListener('keyup',iresult);
c.addEventListener('change',iresult);
d.addEventListener('change',iresult);

function iresult(){
	if(c.value=='km' && d.value=='km'){
		b.value=a.value;
	}
	else if(c.value=='km' && d.value=='m'){
		b.value=(a.value)*1000;
	}
	else if(c.value=='km' && d.value=='cm'){
		b.value=(a.value)*100000;
	}
	else if(c.value=='km' && d.value=='mm'){
		b.value=(a.value)*1000000;
	}

	if(c.value=='m' && d.value=='km'){
		b.value=(a.value)/1000;
	}
	else if(c.value=='m' && d.value=='m'){
		b.value=a.value;
	}
	else if(c.value=='m' && d.value=='cm'){
		b.value=(a.value)*100;
	}
	else if(c.value=='m' && d.value=='mm'){
		b.value=(a.value)*1000;
	}

	if(c.value=='cm' && d.value=='km'){
		b.value=(a.value)/100000;
	}
	else if(c.value=='cm' && d.value=='m'){
		b.value=(a.value)/100;
	}
	else if(c.value=='cm' && d.value=='cm'){
		b.value=a.value;
	}
	else if(c.value=='cm' && d.value=='mm'){
		b.value=(a.value)*10;
	}

	if(c.value=='mm' && d.value=='km'){
		b.value=(a.value)/1000000;
	}
	else if(c.value=='mm' && d.value=='m'){
		b.value=(a.value)/1000;
	}
	else if(c.value=='mm' && d.value=='cm'){
		b.value=(a.value)/10;
	}
	else if(c.value=='mm' && d.value=='mm'){
		b.value=a.value;
	}
}

