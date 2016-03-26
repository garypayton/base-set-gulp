var dummy = (function(){
	var ele = document.querySelector("#main");
	var MAX_ROTATE_VALUE = -360;
	var nStep = -10;
	var nRotateValue = 0;

	ele.addEventListener("click", function() {
		nRotateValue = 0;
		runRotate3d(this);
	},false);

	function runRotate3d() {
		if(nRotateValue <= MAX_ROTATE_VALUE) return;

		nRotateValue += nStep;
		ele.style.transform = "rotate3d(0,1,0,"+ nRotateValue +"deg)";
		requestAnimationFrame(runRotate3d);
	}

	function changeBgColor() {
		function _rv() {return Math.floor(Math.random()*256);}
		function _rvo(){return +(Math.random()).toFixed(1);}
		document.body.style.backgroundColor = "rgba("+_rv()+","+_rv()+","+_rv()+","+_rvo()+")";
	}

	return {
		runRotate3d : runRotate3d,
		changeBgColor : changeBgColor
	};

}());