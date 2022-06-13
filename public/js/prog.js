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
}else{
    $("#boton_2").hide();
}

if($("#1_Seccion").is(':visible')){
    $(".progress-bar").css("width", "5%").text("5%");
}
});

$("#boton_atras_1").click(function(){

    $("#2_Seccion").hide();
    $("#1_Seccion").show();
    $(".progress-bar").css("width", "5%").text("5%");

});

$('#boton_sig_2').click(function(){
    
    $("#2_Seccion").hide();
    $("#3_Seccion").show();
    $(".progress-bar").css("width", "20%").text("20%");

});

