$("#mate_3").change(function() {
$( "#biologo_3" ).show(); 
$( "#bio_3 option" ).remove();
$( "#quim_3 option" ).remove();
$( "#admin_3 option" ).remove();
$( "#social_3 option" ).remove();
$( "#hum_3 option" ).remove();
$("#bio_3").append("<option value=0><--Seleccionar--></option>");
$("#quim_3").append("<option value=0><--Seleccionar--></option>");
$("#admin_3").append("<option value=0><--Seleccionar--></option>");
$("#social_3").append("<option value=0><--Seleccionar--></option>");
$("#hum_3").append("<option value=0><--Seleccionar--></option>");
$("#bio_3").selectpicker('refresh');
$("#quim_3").selectpicker('refresh');
$("#admin_3").selectpicker('refresh');
$("#social_3").selectpicker('refresh');
$("#hum_3").selectpicker('refresh');
if($("#mate_3").val() == 1){
    $("#bio_3").append("<option value=2>2</option>");
    $("#bio_3").append("<option value=3>3</option>");
    $("#bio_3").append("<option value=4>4</option>");
    $("#bio_3").append("<option value=5>5</option>");
    $("#bio_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2){
    $("#bio_3").append("<option value=1>1</option>");
    $("#bio_3").append("<option value=3>3</option>");
    $("#bio_3").append("<option value=4>4</option>");
    $("#bio_3").append("<option value=5>5</option>");
    $("#bio_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3){
    $("#bio_3").append("<option value=1>1</option>");
    $("#bio_3").append("<option value=2>2</option>");
    $("#bio_3").append("<option value=4>4</option>");
    $("#bio_3").append("<option value=5>5</option>");
    $("#bio_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4){
    $("#bio_3").append("<option value=1>1</option>");
    $("#bio_3").append("<option value=2>2</option>");
    $("#bio_3").append("<option value=3>3</option>");
    $("#bio_3").append("<option value=5>5</option>");
    $("#bio_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5){
    $("#bio_3").append("<option value=1>1</option>");
    $("#bio_3").append("<option value=2>2</option>");
    $("#bio_3").append("<option value=3>3</option>");
    $("#bio_3").append("<option value=4>4</option>");
    $("#bio_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 6){
    $("#bio_3").append("<option value=1>1</option>");
    $("#bio_3").append("<option value=2>2</option>");
    $("#bio_3").append("<option value=3>3</option>");
    $("#bio_3").append("<option value=4>4</option>");
    $("#bio_3").append("<option value=5>5</option>");
}
$("#bio_3").selectpicker('refresh');
});


$( "#bio_3" ).change(function() {
$( "#quimica_3" ).show();
$( "#quim_3 option" ).remove();
$( "#admin_3 option" ).remove();
$( "#social_3 option" ).remove();
$( "#hum_3 option" ).remove();
$("#quim_3").append("<option value=0><--Seleccionar--></option>");
$("#admin_3").append("<option value=0><--Seleccionar--></option>");
$("#social_3").append("<option value=0><--Seleccionar--></option>");
$("#hum_3").append("<option value=0><--Seleccionar--></option>");
$("#quim_3").selectpicker('refresh');
$("#admin_3").selectpicker('refresh');
$("#social_3").selectpicker('refresh');
$("#hum_3").selectpicker('refresh');
if($("#mate_3").val() == 1 && $("#bio_3").val() == 2){
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3){
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4){
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5){
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6){
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1){
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1){
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1){
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=5>5</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1){
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1){
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=4>4</option>");
    $("#quim_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5){
    $("#quim_3").append("<option value=1>1</option>");
    $("#quim_3").append("<option value=2>2</option>");
    $("#quim_3").append("<option value=3>3</option>");
    $("#quim_3").append("<option value=4>4</option>");
}
$("#quim_3").selectpicker('refresh');
});


$( "#quim_3" ).change(function() {
$( "#administracion_3" ).show();
$( "#admin_3 option" ).remove();
$( "#social_3 option" ).remove();
$( "#hum_3 option" ).remove();
$("#admin_3").append("<option value=0><--Seleccionar--></option>");
$("#social_3").append("<option value=0><--Seleccionar--></option>");
$("#hum_3").append("<option value=0><--Seleccionar--></option>");
$("#admin_3").selectpicker('refresh');
$("#social_3").selectpicker('refresh');
$("#hum_3").selectpicker('refresh');
if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=5>5</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=4>4</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1){
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=3>3</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4){
    $("#admin_3").append("<option value=1>1</option>");
    $("#admin_3").append("<option value=2>2</option>");
    $("#admin_3").append("<option value=3>3</option>");
}
$("#admin_3").selectpicker('refresh');
});


$( "#admin_3" ).change(function() {
$( "#sociales_3" ).show();
$( "#social_3 option" ).remove();
$( "#hum_3 option" ).remove();
$("#social_3").append("<option value=0><--Seleccionar--></option>");
$("#hum_3").append("<option value=0><--Seleccionar--></option>");
$("#social_3").selectpicker('refresh');
$("#hum_3").selectpicker('refresh');
if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=5>5</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=4>4</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=3>3</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1){
    $("#social_3").append("<option value=2>2</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3){
    $("#social_3").append("<option value=1>1</option>");
    $("#social_3").append("<option value=2>2</option>");
}
$("#social_3").selectpicker('refresh');
});


$( "#social_3" ).change(function() {
$( "#humanidad_3" ).show();
$( "#hum_3 option" ).remove();
$("#hum_3").append("<option value=0><--Seleccionar--></option>");
$("#hum_3").selectpicker('refresh');
if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 1 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 2 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 3 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 5 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 4 && $("#bio_3").val() == 6 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 1 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 2 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 3 && $("#quim_3").val() == 6 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 6 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=6>6</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 6){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 6 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 4 && $("#quim_3").val() == 6 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 5 && $("#bio_3").val() == 6 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 1 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 2 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 4 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 3 && $("#quim_3").val() == 5 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 1 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 2 && $("#admin_3").val() == 5 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=5>5</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 5){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 3 && $("#admin_3").val() == 5 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 4 && $("#quim_3").val() == 5 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 1 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 3 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 2 && $("#admin_3").val() == 4 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 1 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=4>4</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 2 && $("#social_3").val() == 4){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 3 && $("#admin_3").val() == 4 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 1 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=3>3</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 2 && $("#social_3").val() == 3){
    $("#hum_3").append("<option value=1>1</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 1){
    $("#hum_3").append("<option value=2>2</option>");
}else if($("#mate_3").val() == 6 && $("#bio_3").val() == 5 && $("#quim_3").val() == 4 && $("#admin_3").val() == 3 && $("#social_3").val() == 2){
    $("#hum_3").append("<option value=1>1</option>");
}
$("#hum_3").selectpicker('refresh');
});


$(document).change(function(){
if($("#mate_3").val() != 0 && $("#bio_3").val() != 0 && $("#quim_3").val() != 0 && $("#admin_3").val() != 0 && $("#social_3").val() != 0 && $("#hum_3").val() != 0){
    $("#boton_3").show();
}else{
    $("#boton_3").hide();
}
});

$("#boton_atras_2").click(function(){

    $("#3_Seccion").hide();
    $("#2_Seccion").show();
    $(".progress-bar").css("width", "10%").text("10%");

});

$('#boton_sig_3').click(function(){
    
    $("#3_Seccion").hide();
    $("#4_Seccion").show();
    $(".progress-bar").css("width", "30%").text("30%");

});