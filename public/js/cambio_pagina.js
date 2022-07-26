$(document).change(function(){

//Validación: para habilitar un boton deben tener una opción los select que no sea la primera (es decir 0).
if($("#mate").val() != 0 && $("#bio").val() != 0 && $("#quim").val() != 0 && $("#admin").val() != 0 && $("#social").val() != 0 && $("#hum").val() != 0){
    $("#boton_1").show();
}else{  $("#boton_1").hide();  }
if($("#mate_2").val() != 0 && $("#bio_2").val() != 0 && $("#quim_2").val() != 0 && $("#admin_2").val() != 0 && $("#social_2").val() != 0 && $("#hum_2").val() != 0){
    $("#boton_2").show();
}else{  $("#boton_2").hide();  }
if($("#mate_3").val() != 0 && $("#bio_3").val() != 0 && $("#quim_3").val() != 0 && $("#admin_3").val() != 0 && $("#social_3").val() != 0 && $("#hum_3").val() != 0){
    $("#boton_3").show();
}else{  $("#boton_3").hide();  }
if($("#mate_4").val() != 0 && $("#bio_4").val() != 0 && $("#quim_4").val() != 0 && $("#admin_4").val() != 0 && $("#social_4").val() != 0 && $("#hum_4").val() != 0){
    $("#boton_4").show();
}else{  $("#boton_4").hide();  }
if($("#mate_5").val() != 0 && $("#bio_5").val() != 0 && $("#quim_5").val() != 0 && $("#admin_5").val() != 0 && $("#social_5").val() != 0 && $("#hum_5").val() != 0){
    $("#boton_5").show();
}else{  $("#boton_5").hide();  }
if($("#mate_6").val() != 0 && $("#bio_6").val() != 0 && $("#quim_6").val() != 0 && $("#admin_6").val() != 0 && $("#social_6").val() != 0 && $("#hum_6").val() != 0){
    $("#boton_6").show();
}else{  $("#boton_6").hide();  }
if($("#mate_7").val() != 0 && $("#bio_7").val() != 0 && $("#quim_7").val() != 0 && $("#admin_7").val() != 0 && $("#social_7").val() != 0 && $("#hum_7").val() != 0){
    $("#boton_7").show();
}else{  $("#boton_7").hide();  }
if($("#mate_8").val() != 0 && $("#bio_8").val() != 0 && $("#quim_8").val() != 0 && $("#admin_8").val() != 0 && $("#social_8").val() != 0 && $("#hum_8").val() != 0){
    $("#boton_8").show();
}else{  $("#boton_8").hide();  }
if($("#mate_9").val() != 0 && $("#bio_9").val() != 0 && $("#quim_9").val() != 0 && $("#admin_9").val() != 0 && $("#social_9").val() != 0 && $("#hum_9").val() != 0){
    $("#boton_9").show();
}else{  $("#boton_9").hide();  }
if($("#mate_10").val() != 0 && $("#bio_10").val() != 0 && $("#quim_10").val() != 0 && $("#admin_10").val() != 0 && $("#social_10").val() != 0 && $("#hum_10").val() != 0){
    if($("#mate_10").val() == $("#bio_10").val() || $("#mate_10").val() == $("#quim_10").val() || $("#mate_10").val() == $("#admin_10").val() || 
    	$("#mate_10").val() == $("#social_10").val() || $("#mate_10").val() == $("#hum_10").val() || $("#bio_10").val() == $("#mate_10").val() ||
    	$("#bio_10").val() == $("#quim_10").val() || $("#bio_10").val() == $("#admin_10").val() || $("#bio_10").val() == $("#social_10").val() ||
    	$("#bio_10").val() == $("#hum_10").val() || $("#quim_10").val() == $("#mate_10").val() || $("#quim_10").val() == $("#bio_10").val() ||
    	$("#quim_10").val() == $("#admin_10").val() || $("#quim_10").val() == $("#social_10").val() || $("#quim_10").val() == $("#hum_10").val() ||
    	$("#admin_10").val() == $("#mate_10").val() || $("#admin_10").val() == $("#bio_10").val() || $("#admin_10").val() == $("#quim_10").val() ||
    	$("#admin_10").val() == $("#social_10").val() || $("#admin_10").val() == $("#hum_10").val() || $("#social_10").val() == $("#mate_10").val() ||
    	$("#social_10").val() == $("#bio_10").val() || $("#social_10").val() == $("#quim_10").val() || $("#social_10").val() == $("#admin_10").val() ||
    	$("#social_10").val() == $("#hum_10").val() || $("#hum_10").val() == $("#mate_10").val() || $("#hum_10").val() == $("#bio_10").val() ||
    	$("#hum_10").val() == $("#quim_10").val() || $("#hum_10").val() == $("#admin_10").val() || $("#hum_10").val() == $("#social_10").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    }else{
    	$("#confirmar").show();
    	$(".progress-bar").css("width", "99%").text("99%");	
    }
}else{  $("#confirmar").hide();  }

if($("#1_Seccion").is(':visible')){
    $(".progress-bar").css("width", "5%").text("5%");
}
});

//Botones para regresar a un bloque.
$("#boton_atras_1").click(function(){
    $("#2_Seccion").hide();
    $("#1_Seccion").show();
    $(".progress-bar").css("width", "5%").text("5%"); });
$("#boton_atras_2").click(function(){
    $("#3_Seccion").hide();
    $("#2_Seccion").show();
    $(".progress-bar").css("width", "10%").text("10%"); });
$("#boton_atras_3").click(function(){
    $("#4_Seccion").hide();
    $("#3_Seccion").show();
    $(".progress-bar").css("width", "20%").text("20%"); });
$("#boton_atras_4").click(function(){
    $("#5_Seccion").hide();
    $("#4_Seccion").show();
    $(".progress-bar").css("width", "30%").text("30%"); });
$("#boton_atras_5").click(function(){
    $("#6_Seccion").hide();
    $("#5_Seccion").show();
    $(".progress-bar").css("width", "40%").text("40%");});
$("#boton_atras_6").click(function(){
    $("#7_Seccion").hide();
    $("#6_Seccion").show();
    $(".progress-bar").css("width", "50%").text("50%"); });
$("#boton_atras_7").click(function(){
    $("#8_Seccion").hide();
    $("#7_Seccion").show();
    $(".progress-bar").css("width", "60%").text("60%"); });
$("#boton_atras_8").click(function(){
    $("#9_Seccion").hide();
    $("#8_Seccion").show();
    $(".progress-bar").css("width", "70%").text("70%");});
$("#boton_atras_9").click(function(){
    $("#10_Seccion").hide();
    $("#9_Seccion").show();
    $(".progress-bar").css("width", "80%").text("80%"); });

//Validacion en el que todos los numeros deben ser iguales.
$('#boton_sig_1').click(function(){
    if($("#mate").val() == $("#bio").val() || $("#mate").val() == $("#quim").val() || $("#mate").val() == $("#admin").val() || 
    	$("#mate").val() == $("#social").val() || $("#mate").val() == $("#hum").val() || $("#bio").val() == $("#mate").val() ||
    	$("#bio").val() == $("#quim").val() || $("#bio").val() == $("#admin").val() || $("#bio").val() == $("#social").val() ||
    	$("#bio").val() == $("#hum").val() || $("#quim").val() == $("#mate").val() || $("#quim").val() == $("#bio").val() ||
    	$("#quim").val() == $("#admin").val() || $("#quim").val() == $("#social").val() || $("#quim").val() == $("#hum").val() ||
    	$("#admin").val() == $("#mate").val() || $("#admin").val() == $("#bio").val() || $("#admin").val() == $("#quim").val() ||
    	$("#admin").val() == $("#social").val() || $("#admin").val() == $("#hum").val() || $("#social").val() == $("#mate").val() ||
    	$("#social").val() == $("#bio").val() || $("#social").val() == $("#quim").val() || $("#social").val() == $("#admin").val() ||
    	$("#social").val() == $("#hum").val() || $("#hum").val() == $("#mate").val() || $("#hum").val() == $("#bio").val() ||
    	$("#hum").val() == $("#quim").val() || $("#hum").val() == $("#admin").val() || $("#hum").val() == $("#social").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    	//echo "<script>alert('Usuario ya existe');</script>";
    }else{
    	$("#1_Seccion").hide();
	    $("#2_Seccion").show();
	    $(".progress-bar").css("width", "10%").text("10%");
    }
});
$('#boton_sig_2').click(function(){
	if($("#mate_2").val() == $("#bio_2").val() || $("#mate_2").val() == $("#quim_2").val() || $("#mate_2").val() == $("#admin_2").val() || 
    	$("#mate_2").val() == $("#social_2").val() || $("#mate_2").val() == $("#hum_2").val() || $("#bio_2").val() == $("#mate_2").val() ||
    	$("#bio_2").val() == $("#quim_2").val() || $("#bio_2").val() == $("#admin_2").val() || $("#bio_2").val() == $("#social_2").val() ||
    	$("#bio_2").val() == $("#hum_2").val() || $("#quim_2").val() == $("#mate_2").val() || $("#quim_2").val() == $("#bio_2").val() ||
    	$("#quim_2").val() == $("#admin_2").val() || $("#quim_2").val() == $("#social_2").val() || $("#quim_2").val() == $("#hum_2").val() ||
    	$("#admin_2").val() == $("#mate_2").val() || $("#admin_2").val() == $("#bio_2").val() || $("#admin_2").val() == $("#quim_2").val() ||
    	$("#admin_2").val() == $("#social_2").val() || $("#admin_2").val() == $("#hum_2").val() || $("#social_2").val() == $("#mate_2").val() ||
    	$("#social_2").val() == $("#bio_2").val() || $("#social_2").val() == $("#quim_2").val() || $("#social_2").val() == $("#admin_2").val() ||
    	$("#social_2").val() == $("#hum_2").val() || $("#hum_2").val() == $("#mate_2").val() || $("#hum_2").val() == $("#bio_2").val() ||
    	$("#hum_2").val() == $("#quim_2").val() || $("#hum_2").val() == $("#admin_2").val() || $("#hum_2").val() == $("#social_2").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    	//echo "<script>alert('Usuario ya existe');</script>";
    }else{
    	$("#2_Seccion").hide();
	    $("#3_Seccion").show();
	    $(".progress-bar").css("width", "20%").text("20%");
    }
});
$('#boton_sig_3').click(function(){
	if($("#mate_3").val() == $("#bio_3").val() || $("#mate_3").val() == $("#quim_3").val() || $("#mate_3").val() == $("#admin_3").val() || 
    	$("#mate_3").val() == $("#social_3").val() || $("#mate_3").val() == $("#hum_3").val() || $("#bio_3").val() == $("#mate_3").val() ||
    	$("#bio_3").val() == $("#quim_3").val() || $("#bio_3").val() == $("#admin_3").val() || $("#bio_3").val() == $("#social_3").val() ||
    	$("#bio_3").val() == $("#hum_3").val() || $("#quim_3").val() == $("#mate_3").val() || $("#quim_3").val() == $("#bio_3").val() ||
    	$("#quim_3").val() == $("#admin_3").val() || $("#quim_3").val() == $("#social_3").val() || $("#quim_3").val() == $("#hum_3").val() ||
    	$("#admin_3").val() == $("#mate_3").val() || $("#admin_3").val() == $("#bio_3").val() || $("#admin_3").val() == $("#quim_3").val() ||
    	$("#admin_3").val() == $("#social_3").val() || $("#admin_3").val() == $("#hum_3").val() || $("#social_3").val() == $("#mate_3").val() ||
    	$("#social_3").val() == $("#bio_3").val() || $("#social_3").val() == $("#quim_3").val() || $("#social_3").val() == $("#admin_3").val() ||
    	$("#social_3").val() == $("#hum_3").val() || $("#hum_3").val() == $("#mate_3").val() || $("#hum_3").val() == $("#bio_3").val() ||
    	$("#hum_3").val() == $("#quim_3").val() || $("#hum_3").val() == $("#admin_3").val() || $("#hum_3").val() == $("#social_3").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    	//echo "<script>alert('Usuario ya existe');</script>";
    }else{
    	$("#3_Seccion").hide();
	    $("#4_Seccion").show();
	    $(".progress-bar").css("width", "30%").text("30%");
    }
});
$('#boton_sig_4').click(function(){
	if($("#mate_4").val() == $("#bio_4").val() || $("#mate_4").val() == $("#quim_4").val() || $("#mate_4").val() == $("#admin_4").val() || 
    	$("#mate_4").val() == $("#social_4").val() || $("#mate_4").val() == $("#hum_4").val() || $("#bio_4").val() == $("#mate_4").val() ||
    	$("#bio_4").val() == $("#quim_4").val() || $("#bio_4").val() == $("#admin_4").val() || $("#bio_4").val() == $("#social_4").val() ||
    	$("#bio_4").val() == $("#hum_4").val() || $("#quim_4").val() == $("#mate_4").val() || $("#quim_4").val() == $("#bio_4").val() ||
    	$("#quim_4").val() == $("#admin_4").val() || $("#quim_4").val() == $("#social_4").val() || $("#quim_4").val() == $("#hum_4").val() ||
    	$("#admin_4").val() == $("#mate_4").val() || $("#admin_4").val() == $("#bio_4").val() || $("#admin_4").val() == $("#quim_4").val() ||
    	$("#admin_4").val() == $("#social_4").val() || $("#admin_4").val() == $("#hum_4").val() || $("#social_4").val() == $("#mate_4").val() ||
    	$("#social_4").val() == $("#bio_4").val() || $("#social_4").val() == $("#quim_4").val() || $("#social_4").val() == $("#admin_4").val() ||
    	$("#social_4").val() == $("#hum_4").val() || $("#hum_4").val() == $("#mate_4").val() || $("#hum_4").val() == $("#bio_4").val() ||
    	$("#hum_4").val() == $("#quim_4").val() || $("#hum_4").val() == $("#admin_4").val() || $("#hum_4").val() == $("#social_4").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    	//echo "<script>alert('Usuario ya existe');</script>";
    }else{
    	$("#4_Seccion").hide();
	    $("#5_Seccion").show();
	    $(".progress-bar").css("width", "40%").text("40%");
    }
});
$('#boton_sig_5').click(function(){
	if($("#mate_5").val() == $("#bio_5").val() || $("#mate_5").val() == $("#quim_5").val() || $("#mate_5").val() == $("#admin_5").val() || 
    	$("#mate_5").val() == $("#social_5").val() || $("#mate_5").val() == $("#hum_5").val() || $("#bio_5").val() == $("#mate_5").val() ||
    	$("#bio_5").val() == $("#quim_5").val() || $("#bio_5").val() == $("#admin_5").val() || $("#bio_5").val() == $("#social_5").val() ||
    	$("#bio_5").val() == $("#hum_5").val() || $("#quim_5").val() == $("#mate_5").val() || $("#quim_5").val() == $("#bio_5").val() ||
    	$("#quim_5").val() == $("#admin_5").val() || $("#quim_5").val() == $("#social_5").val() || $("#quim_5").val() == $("#hum_5").val() ||
    	$("#admin_5").val() == $("#mate_5").val() || $("#admin_5").val() == $("#bio_5").val() || $("#admin_5").val() == $("#quim_5").val() ||
    	$("#admin_5").val() == $("#social_5").val() || $("#admin_5").val() == $("#hum_5").val() || $("#social_5").val() == $("#mate_5").val() ||
    	$("#social_5").val() == $("#bio_5").val() || $("#social_5").val() == $("#quim_5").val() || $("#social_5").val() == $("#admin_5").val() ||
    	$("#social_5").val() == $("#hum_5").val() || $("#hum_5").val() == $("#mate_5").val() || $("#hum_5").val() == $("#bio_5").val() ||
    	$("#hum_5").val() == $("#quim_5").val() || $("#hum_5").val() == $("#admin_5").val() || $("#hum_5").val() == $("#social_5").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    	//echo "<script>alert('Usuario ya existe');</script>";
    }else{
    	$("#5_Seccion").hide();
	    $("#6_Seccion").show();
	    $(".progress-bar").css("width", "50%").text("50%");
    }
});
$('#boton_sig_6').click(function(){
	if($("#mate_6").val() == $("#bio_6").val() || $("#mate_6").val() == $("#quim_6").val() || $("#mate_6").val() == $("#admin_6").val() || 
    	$("#mate_6").val() == $("#social_6").val() || $("#mate_6").val() == $("#hum_6").val() || $("#bio_6").val() == $("#mate_6").val() ||
    	$("#bio_6").val() == $("#quim_6").val() || $("#bio_6").val() == $("#admin_6").val() || $("#bio_6").val() == $("#social_6").val() ||
    	$("#bio_6").val() == $("#hum_6").val() || $("#quim_6").val() == $("#mate_6").val() || $("#quim_6").val() == $("#bio_6").val() ||
    	$("#quim_6").val() == $("#admin_6").val() || $("#quim_6").val() == $("#social_6").val() || $("#quim_6").val() == $("#hum_6").val() ||
    	$("#admin_6").val() == $("#mate_6").val() || $("#admin_6").val() == $("#bio_6").val() || $("#admin_6").val() == $("#quim_6").val() ||
    	$("#admin_6").val() == $("#social_6").val() || $("#admin_6").val() == $("#hum_6").val() || $("#social_6").val() == $("#mate_6").val() ||
    	$("#social_6").val() == $("#bio_6").val() || $("#social_6").val() == $("#quim_6").val() || $("#social_6").val() == $("#admin_6").val() ||
    	$("#social_6").val() == $("#hum_6").val() || $("#hum_6").val() == $("#mate_6").val() || $("#hum_6").val() == $("#bio_6").val() ||
    	$("#hum_6").val() == $("#quim_6").val() || $("#hum_6").val() == $("#admin_6").val() || $("#hum_6").val() == $("#social_6").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    	//echo "<script>alert('Usuario ya existe');</script>";
    }else{
	    $("#6_Seccion").hide();
	    $("#7_Seccion").show();
	    $(".progress-bar").css("width", "60%").text("60%");
    }
});
$('#boton_sig_7').click(function(){
	if($("#mate_7").val() == $("#bio_7").val() || $("#mate_7").val() == $("#quim_7").val() || $("#mate_7").val() == $("#admin_7").val() || 
    	$("#mate_7").val() == $("#social_7").val() || $("#mate_7").val() == $("#hum_7").val() || $("#bio_7").val() == $("#mate_7").val() ||
    	$("#bio_7").val() == $("#quim_7").val() || $("#bio_7").val() == $("#admin_7").val() || $("#bio_7").val() == $("#social_7").val() ||
    	$("#bio_7").val() == $("#hum_7").val() || $("#quim_7").val() == $("#mate_7").val() || $("#quim_7").val() == $("#bio_7").val() ||
    	$("#quim_7").val() == $("#admin_7").val() || $("#quim_7").val() == $("#social_7").val() || $("#quim_7").val() == $("#hum_7").val() ||
    	$("#admin_7").val() == $("#mate_7").val() || $("#admin_7").val() == $("#bio_7").val() || $("#admin_7").val() == $("#quim_7").val() ||
    	$("#admin_7").val() == $("#social_7").val() || $("#admin_7").val() == $("#hum_7").val() || $("#social_7").val() == $("#mate_7").val() ||
    	$("#social_7").val() == $("#bio_7").val() || $("#social_7").val() == $("#quim_7").val() || $("#social_7").val() == $("#admin_7").val() ||
    	$("#social_7").val() == $("#hum_7").val() || $("#hum_7").val() == $("#mate_7").val() || $("#hum_7").val() == $("#bio_7").val() ||
    	$("#hum_7").val() == $("#quim_7").val() || $("#hum_7").val() == $("#admin_7").val() || $("#hum_7").val() == $("#social_7").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    	//echo "<script>alert('Usuario ya existe');</script>";
    }else{
	    $("#7_Seccion").hide();
	    $("#8_Seccion").show();
	    $(".progress-bar").css("width", "70%").text("70%");
    }
});
$('#boton_sig_8').click(function(){
	if($("#mate_8").val() == $("#bio_8").val() || $("#mate_8").val() == $("#quim_8").val() || $("#mate_8").val() == $("#admin_8").val() || 
    	$("#mate_8").val() == $("#social_8").val() || $("#mate_8").val() == $("#hum_8").val() || $("#bio_8").val() == $("#mate_8").val() ||
    	$("#bio_8").val() == $("#quim_8").val() || $("#bio_8").val() == $("#admin_8").val() || $("#bio_8").val() == $("#social_8").val() ||
    	$("#bio_8").val() == $("#hum_8").val() || $("#quim_8").val() == $("#mate_8").val() || $("#quim_8").val() == $("#bio_8").val() ||
    	$("#quim_8").val() == $("#admin_8").val() || $("#quim_8").val() == $("#social_8").val() || $("#quim_8").val() == $("#hum_8").val() ||
    	$("#admin_8").val() == $("#mate_8").val() || $("#admin_8").val() == $("#bio_8").val() || $("#admin_8").val() == $("#quim_8").val() ||
    	$("#admin_8").val() == $("#social_8").val() || $("#admin_8").val() == $("#hum_8").val() || $("#social_8").val() == $("#mate_8").val() ||
    	$("#social_8").val() == $("#bio_8").val() || $("#social_8").val() == $("#quim_8").val() || $("#social_8").val() == $("#admin_8").val() ||
    	$("#social_8").val() == $("#hum_8").val() || $("#hum_8").val() == $("#mate_8").val() || $("#hum_8").val() == $("#bio_8").val() ||
    	$("#hum_8").val() == $("#quim_8").val() || $("#hum_8").val() == $("#admin_8").val() || $("#hum_8").val() == $("#social_8").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    	//echo "<script>alert('Usuario ya existe');</script>";
    }else{
	    $("#8_Seccion").hide();
	    $("#9_Seccion").show();
	    $(".progress-bar").css("width", "80%").text("80%");
    }
});
$('#boton_sig_9').click(function(){
	if($("#mate_9").val() == $("#bio_9").val() || $("#mate_9").val() == $("#quim_9").val() || $("#mate_9").val() == $("#admin_9").val() || 
    	$("#mate_9").val() == $("#social_9").val() || $("#mate_9").val() == $("#hum_9").val() || $("#bio_9").val() == $("#mate_9").val() ||
    	$("#bio_9").val() == $("#quim_9").val() || $("#bio_9").val() == $("#admin_9").val() || $("#bio_9").val() == $("#social_9").val() ||
    	$("#bio_9").val() == $("#hum_9").val() || $("#quim_9").val() == $("#mate_9").val() || $("#quim_9").val() == $("#bio_9").val() ||
    	$("#quim_9").val() == $("#admin_9").val() || $("#quim_9").val() == $("#social_9").val() || $("#quim_9").val() == $("#hum_9").val() ||
    	$("#admin_9").val() == $("#mate_9").val() || $("#admin_9").val() == $("#bio_9").val() || $("#admin_9").val() == $("#quim_9").val() ||
    	$("#admin_9").val() == $("#social_9").val() || $("#admin_9").val() == $("#hum_9").val() || $("#social_9").val() == $("#mate_9").val() ||
    	$("#social_9").val() == $("#bio_9").val() || $("#social_9").val() == $("#quim_9").val() || $("#social_9").val() == $("#admin_9").val() ||
    	$("#social_9").val() == $("#hum_9").val() || $("#hum_9").val() == $("#mate_9").val() || $("#hum_9").val() == $("#bio_9").val() ||
    	$("#hum_9").val() == $("#quim_9").val() || $("#hum_9").val() == $("#admin_9").val() || $("#hum_9").val() == $("#social_9").val()){
    	console.log("No se pueden poner numeros iguales, todos diferentes por favor.");
    	//echo "<script>alert('Usuario ya existe');</script>";
    }else{
	    $("#9_Seccion").hide();
	    $("#10_Seccion").show();
	    $(".progress-bar").css("width", "90%").text("90%");
    }
});