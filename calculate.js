

	var gt = document.getElementById("grade_table");
	
	function getAverage(){
		var tempVal1 = 0;
		var tempVal2 = 0;
		for(var i=1;i<=4;i++){
			if(retNumerical(document.getElementById("ipt2"+i).value) != 0){
				tempVal1 += retNumerical(document.getElementById("ipt1"+i).value);
				tempVal2 += retNumerical(document.getElementById("ipt2"+i).value);
			}
			else{
				alert("There is no space to fill in or the divisor is 0");

			}
		}
		var showTotal = retNumerical((tempVal1/tempVal2*100).toFixed(1)) + "/100";
		gt.rows[5].cells[3].innerHTML = showTotal;
	}
	
	function retNumerical(val){
		var ret;
		if (isNaN(parseFloat(val))){
			ret = 0;
		}else{
			ret = parseFloat(val);
		}
		return ret;
	}
	
	function getPercentage(obj){
		var tempTrNo = obj.id.substr(4);
		var tempVal1 = retNumerical(document.getElementById("ipt1" + tempTrNo).value);
		var tempVal2 = retNumerical(document.getElementById("ipt2" + tempTrNo).value);
		var showResult;
		if(tempVal2 != 0){
			showResult = retNumerical((tempVal1/tempVal2*100).toFixed(1)) + "%";
			gt.rows[tempTrNo].cells[3].innerHTML = showResult;
		}
	}
	