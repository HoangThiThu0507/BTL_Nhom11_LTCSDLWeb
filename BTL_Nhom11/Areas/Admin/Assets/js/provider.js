﻿//Kịch bản cho provider.html - provider.js

function checkValidProvider(fn){
	
	var name = document.getElementById("txtName").value;
	var check = document.getElementById("chkAgree").checked;
	
	var btnReg = document.getElementById("btnReg");
	
	//Tham chiếu đến đối tượng bị lỗi cho name
	var errorName = document.getElementById("viewErrorName");
	
	if(name.trim() !="" && check){
		btnReg.disabled = false;
		
	}else{
		if(name.trim()== ""){
			errorName.innerHTML = "Thiếu tên nhà cung cấp. ";
			errorName.style.color = "red";
		}else{
			errorName.innerHTML = "";
		}
		btnReg.disabled=true;
	}
}