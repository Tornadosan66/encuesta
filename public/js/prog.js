$("#mate_2").change(function() {
$( "#biologo_2" ).show(); 
$( "#bio_2 option" ).remove();
$( "#quim_2 option" ).remove();
$( "#admin_2 option" ).remove();
$( "#social_2 option" ).remove();
$( "#hum_2 option" ).remove();
$("#bio_2").append("<option value=0><--Seleccionar--></option>");
$("#quim_2").append("<option value=0><--Seleccionar--></option>");
$("#admin_2").append("<option value=0><--Seleccionar--></option>");
$("#social_2").append("<option value=0><--Seleccionar--></option>");
$("#hum_2").append("<option value=0><--Seleccionar--></option>");
$("#bio_2").selectpicker('refresh');
$("#quim_2").selectpicker('refresh');
$("#admin_2").selectpicker('refresh');
$("#social_2").selectpicker('refresh');
$("#hum_2").selectpicker('refresh');
if($("#mate_2").val() == 1){
    $("#bio_2").append("<option value=2>2</option>");
    $("#bio_2").append("<option value=3>3</option>");
    $("#bio_2").append("<option value=4>4</option>");
    $("#bio_2").append("<option value=5>5</option>");
    $("#bio_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2){
    $("#bio_2").append("<option value=1>1</option>");
    $("#bio_2").append("<option value=3>3</option>");
    $("#bio_2").append("<option value=4>4</option>");
    $("#bio_2").append("<option value=5>5</option>");
    $("#bio_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3){
    $("#bio_2").append("<option value=1>1</option>");
    $("#bio_2").append("<option value=2>2</option>");
    $("#bio_2").append("<option value=4>4</option>");
    $("#bio_2").append("<option value=5>5</option>");
    $("#bio_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4){
    $("#bio_2").append("<option value=1>1</option>");
    $("#bio_2").append("<option value=2>2</option>");
    $("#bio_2").append("<option value=3>3</option>");
    $("#bio_2").append("<option value=5>5</option>");
    $("#bio_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5){
    $("#bio_2").append("<option value=1>1</option>");
    $("#bio_2").append("<option value=2>2</option>");
    $("#bio_2").append("<option value=3>3</option>");
    $("#bio_2").append("<option value=4>4</option>");
    $("#bio_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 6){
    $("#bio_2").append("<option value=1>1</option>");
    $("#bio_2").append("<option value=2>2</option>");
    $("#bio_2").append("<option value=3>3</option>");
    $("#bio_2").append("<option value=4>4</option>");
    $("#bio_2").append("<option value=5>5</option>");
}
$("#bio_2").selectpicker('refresh');
});


$( "#bio_2" ).change(function() {
$( "#quimica_2" ).show();
$( "#quim_2 option" ).remove();
$( "#admin_2 option" ).remove();
$( "#social_2 option" ).remove();
$( "#hum_2 option" ).remove();
$("#quim_2").append("<option value=0><--Seleccionar--></option>");
$("#admin_2").append("<option value=0><--Seleccionar--></option>");
$("#social_2").append("<option value=0><--Seleccionar--></option>");
$("#hum_2").append("<option value=0><--Seleccionar--></option>");
$("#quim_2").selectpicker('refresh');
$("#admin_2").selectpicker('refresh');
$("#social_2").selectpicker('refresh');
$("#hum_2").selectpicker('refresh');
if($("#mate_2").val() == 1 && $("#bio_2").val() == 2){
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3){
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4){
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5){
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6){
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1){
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1){
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1){
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=5>5</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1){
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1){
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=4>4</option>");
    $("#quim_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5){
    $("#quim_2").append("<option value=1>1</option>");
    $("#quim_2").append("<option value=2>2</option>");
    $("#quim_2").append("<option value=3>3</option>");
    $("#quim_2").append("<option value=4>4</option>");
}
$("#quim_2").selectpicker('refresh');
});


$( "#quim_2" ).change(function() {
$( "#administracion_2" ).show();
$( "#admin_2 option" ).remove();
$( "#social_2 option" ).remove();
$( "#hum_2 option" ).remove();
$("#admin_2").append("<option value=0><--Seleccionar--></option>");
$("#social_2").append("<option value=0><--Seleccionar--></option>");
$("#hum_2").append("<option value=0><--Seleccionar--></option>");
$("#admin_2").selectpicker('refresh');
$("#social_2").selectpicker('refresh');
$("#hum_2").selectpicker('refresh');
if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=5>5</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=4>4</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1){
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=3>3</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4){
    $("#admin_2").append("<option value=1>1</option>");
    $("#admin_2").append("<option value=2>2</option>");
    $("#admin_2").append("<option value=3>3</option>");
}
$("#admin_2").selectpicker('refresh');
});


$( "#admin_2" ).change(function() {
$( "#sociales_2" ).show();
$( "#social_2 option" ).remove();
$( "#hum_2 option" ).remove();
$("#social_2").append("<option value=0><--Seleccionar--></option>");
$("#hum_2").append("<option value=0><--Seleccionar--></option>");
$("#social_2").selectpicker('refresh');
$("#hum_2").selectpicker('refresh');
if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=5>5</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=4>4</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=3>3</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1){
    $("#social_2").append("<option value=2>2</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3){
    $("#social_2").append("<option value=1>1</option>");
    $("#social_2").append("<option value=2>2</option>");
}
$("#social_2").selectpicker('refresh');
});


$( "#social_2" ).change(function() {
$( "#humanidad_2" ).show();
$( "#hum_2 option" ).remove();
$("#hum_2").append("<option value=0><--Seleccionar--></option>");
$("#hum_2").selectpicker('refresh');
if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 1 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 2 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 3 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 5 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 4 && $("#bio_2").val() == 6 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 1 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 2 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 3 && $("#quim_2").val() == 6 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 6 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=6>6</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 6){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 6 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 4 && $("#quim_2").val() == 6 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 5 && $("#bio_2").val() == 6 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 1 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 2 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 4 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 3 && $("#quim_2").val() == 5 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 1 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 2 && $("#admin_2").val() == 5 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=5>5</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 5){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 3 && $("#admin_2").val() == 5 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 4 && $("#quim_2").val() == 5 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 1 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 3 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 2 && $("#admin_2").val() == 4 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 1 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=4>4</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 2 && $("#social_2").val() == 4){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 3 && $("#admin_2").val() == 4 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 1 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=3>3</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 2 && $("#social_2").val() == 3){
    $("#hum_2").append("<option value=1>1</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 1){
    $("#hum_2").append("<option value=2>2</option>");
}else if($("#mate_2").val() == 6 && $("#bio_2").val() == 5 && $("#quim_2").val() == 4 && $("#admin_2").val() == 3 && $("#social_2").val() == 2){
    $("#hum_2").append("<option value=1>1</option>");
}
$("#hum_2").selectpicker('refresh');
});


$(document).change(function(){
if($("#mate_2").val() != 0 && $("#bio_2").val() != 0 && $("#quim_2").val() != 0 && $("#admin_2").val() != 0 && $("#social_2").val() != 0 && $("#hum_2").val() != 0){
    $("#boton_2").show();
}else{ $("#boton_2").hide(); }
if($("#mate").val() != 0 && $("#bio").val() != 0 && $("#quim").val() != 0 && $("#admin").val() != 0 && $("#social").val() != 0 && $("#hum").val() != 0){
    $("#boton_1").show();
}else{ $("#boton_1").hide(); }
if($("#mate_3").val() != 0 && $("#bio_3").val() != 0 && $("#quim_3").val() != 0 && $("#admin_3").val() != 0 && $("#social_3").val() != 0 && $("#hum_3").val() != 0){
    $("#boton_3").show();
}else{ $("#boton_3").hide(); }
if($("#mate_4").val() != 0 && $("#bio_4").val() != 0 && $("#quim_4").val() != 0 && $("#admin_4").val() != 0 && $("#social_4").val() != 0 && $("#hum_4").val() != 0){
    $("#boton_4").show();
}else{ $("#boton_4").hide(); }
if($("#mate_5").val() != 0 && $("#bio_5").val() != 0 && $("#quim_5").val() != 0 && $("#admin_5").val() != 0 && $("#social_5").val() != 0 && $("#hum_5").val() != 0){
    $("#boton_5").show();
}else{ $("#boton_5").hide(); }
if($("#mate_6").val() != 0 && $("#bio_6").val() != 0 && $("#quim_6").val() != 0 && $("#admin_6").val() != 0 && $("#social_6").val() != 0 && $("#hum_6").val() != 0){
    $("#boton_6").show();
}else{ $("#boton_6").hide(); }
if($("#mate_7").val() != 0 && $("#bio_7").val() != 0 && $("#quim_7").val() != 0 && $("#admin_7").val() != 0 && $("#social_7").val() != 0 && $("#hum_7").val() != 0){
    $("#boton_7").show();
}else{ $("#boton_7").hide(); }
if($("#mate_8").val() != 0 && $("#bio_8").val() != 0 && $("#quim_8").val() != 0 && $("#admin_8").val() != 0 && $("#social_8").val() != 0 && $("#hum_8").val() != 0){
    $("#boton_8").show();
}else{ $("#boton_8").hide(); }
if($("#mate_9").val() != 0 && $("#bio_9").val() != 0 && $("#quim_9").val() != 0 && $("#admin_9").val() != 0 && $("#social_9").val() != 0 && $("#hum_9").val() != 0){
    $("#boton_9").show();
}else{ $("#boton_9").hide(); }
if($("#mate_10").val() != 0 && $("#bio_10").val() != 0 && $("#quim_10").val() != 0 && $("#admin_10").val() != 0 && $("#social_10").val() != 0 && $("#hum_10").val() != 0){
    $("#confirmar").show();
    $(".progress-bar").css("width", "99%").text("99%");
}else{ $("#confirmar").hide(); }

if($("#1_Seccion").is(':visible')){
    $(".progress-bar").css("width", "5%").text("5%");
}
});

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
$('#boton_sig_1').click(function(){
    $("#1_Seccion").hide();
    $("#2_Seccion").show();
    $(".progress-bar").css("width", "10%").text("10%"); });
$('#boton_sig_2').click(function(){
    $("#2_Seccion").hide();
    $("#3_Seccion").show();
    $(".progress-bar").css("width", "20%").text("20%"); });
$('#boton_sig_3').click(function(){
    $("#3_Seccion").hide();
    $("#4_Seccion").show();
    $(".progress-bar").css("width", "30%").text("30%"); });
$('#boton_sig_4').click(function(){
    $("#4_Seccion").hide();
    $("#5_Seccion").show();
    $(".progress-bar").css("width", "40%").text("40%"); });
$('#boton_sig_5').click(function(){
    $("#5_Seccion").hide();
    $("#6_Seccion").show();
    $(".progress-bar").css("width", "50%").text("50%"); });
$('#boton_sig_6').click(function(){
    $("#6_Seccion").hide();
    $("#7_Seccion").show();
    $(".progress-bar").css("width", "60%").text("60%"); });
$('#boton_sig_7').click(function(){
    $("#7_Seccion").hide();
    $("#8_Seccion").show();
    $(".progress-bar").css("width", "70%").text("70%"); });
$('#boton_sig_8').click(function(){
    $("#8_Seccion").hide();
    $("#9_Seccion").show();
    $(".progress-bar").css("width", "80%").text("80%"); });
$('#boton_sig_9').click(function(){
    $("#9_Seccion").hide();
    $("#10_Seccion").show();
    $(".progress-bar").css("width", "90%").text("90%"); });