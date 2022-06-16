$("#mate_9").change(function() {
$( "#biologo_9" ).show(); 
$( "#bio_9 option" ).remove();
$( "#quim_9 option" ).remove();
$( "#admin_9 option" ).remove();
$( "#social_9 option" ).remove();
$( "#hum_9 option" ).remove();
$("#bio_9").append("<option value=0><--Seleccionar--></option>");
$("#quim_9").append("<option value=0><--Seleccionar--></option>");
$("#admin_9").append("<option value=0><--Seleccionar--></option>");
$("#social_9").append("<option value=0><--Seleccionar--></option>");
$("#hum_9").append("<option value=0><--Seleccionar--></option>");
$("#bio_9").selectpicker('refresh');
$("#quim_9").selectpicker('refresh');
$("#admin_9").selectpicker('refresh');
$("#social_9").selectpicker('refresh');
$("#hum_9").selectpicker('refresh');
if($("#mate_9").val() == 1){
    $("#bio_9").append("<option value=2>2</option>");
    $("#bio_9").append("<option value=3>3</option>");
    $("#bio_9").append("<option value=4>4</option>");
    $("#bio_9").append("<option value=5>5</option>");
    $("#bio_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2){
    $("#bio_9").append("<option value=1>1</option>");
    $("#bio_9").append("<option value=3>3</option>");
    $("#bio_9").append("<option value=4>4</option>");
    $("#bio_9").append("<option value=5>5</option>");
    $("#bio_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3){
    $("#bio_9").append("<option value=1>1</option>");
    $("#bio_9").append("<option value=2>2</option>");
    $("#bio_9").append("<option value=4>4</option>");
    $("#bio_9").append("<option value=5>5</option>");
    $("#bio_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4){
    $("#bio_9").append("<option value=1>1</option>");
    $("#bio_9").append("<option value=2>2</option>");
    $("#bio_9").append("<option value=3>3</option>");
    $("#bio_9").append("<option value=5>5</option>");
    $("#bio_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5){
    $("#bio_9").append("<option value=1>1</option>");
    $("#bio_9").append("<option value=2>2</option>");
    $("#bio_9").append("<option value=3>3</option>");
    $("#bio_9").append("<option value=4>4</option>");
    $("#bio_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 6){
    $("#bio_9").append("<option value=1>1</option>");
    $("#bio_9").append("<option value=2>2</option>");
    $("#bio_9").append("<option value=3>3</option>");
    $("#bio_9").append("<option value=4>4</option>");
    $("#bio_9").append("<option value=5>5</option>");
}
$("#bio_9").selectpicker('refresh');
});


$( "#bio_9" ).change(function() {
$( "#quimica_9" ).show();
$( "#quim_9 option" ).remove();
$( "#admin_9 option" ).remove();
$( "#social_9 option" ).remove();
$( "#hum_9 option" ).remove();
$("#quim_9").append("<option value=0><--Seleccionar--></option>");
$("#admin_9").append("<option value=0><--Seleccionar--></option>");
$("#social_9").append("<option value=0><--Seleccionar--></option>");
$("#hum_9").append("<option value=0><--Seleccionar--></option>");
$("#quim_9").selectpicker('refresh');
$("#admin_9").selectpicker('refresh');
$("#social_9").selectpicker('refresh');
$("#hum_9").selectpicker('refresh');
if($("#mate_9").val() == 1 && $("#bio_9").val() == 2){
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3){
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4){
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5){
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6){
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1){
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1){
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1){
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=5>5</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1){
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1){
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=4>4</option>");
    $("#quim_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5){
    $("#quim_9").append("<option value=1>1</option>");
    $("#quim_9").append("<option value=2>2</option>");
    $("#quim_9").append("<option value=3>3</option>");
    $("#quim_9").append("<option value=4>4</option>");
}
$("#quim_9").selectpicker('refresh');
});


$( "#quim_9" ).change(function() {
$( "#administracion_9" ).show();
$( "#admin_9 option" ).remove();
$( "#social_9 option" ).remove();
$( "#hum_9 option" ).remove();
$("#admin_9").append("<option value=0><--Seleccionar--></option>");
$("#social_9").append("<option value=0><--Seleccionar--></option>");
$("#hum_9").append("<option value=0><--Seleccionar--></option>");
$("#admin_9").selectpicker('refresh');
$("#social_9").selectpicker('refresh');
$("#hum_9").selectpicker('refresh');
if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=5>5</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=4>4</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1){
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=3>3</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4){
    $("#admin_9").append("<option value=1>1</option>");
    $("#admin_9").append("<option value=2>2</option>");
    $("#admin_9").append("<option value=3>3</option>");
}
$("#admin_9").selectpicker('refresh');
});


$( "#admin_9" ).change(function() {
$( "#sociales_9" ).show();
$( "#social_9 option" ).remove();
$( "#hum_9 option" ).remove();
$("#social_9").append("<option value=0><--Seleccionar--></option>");
$("#hum_9").append("<option value=0><--Seleccionar--></option>");
$("#social_9").selectpicker('refresh');
$("#hum_9").selectpicker('refresh');
if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=5>5</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=4>4</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=3>3</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1){
    $("#social_9").append("<option value=2>2</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3){
    $("#social_9").append("<option value=1>1</option>");
    $("#social_9").append("<option value=2>2</option>");
}
$("#social_9").selectpicker('refresh');
});


$( "#social_9" ).change(function() {
$( "#humanidad_9" ).show();
$( "#hum_9 option" ).remove();
$("#hum_9").append("<option value=0><--Seleccionar--></option>");
$("#hum_9").selectpicker('refresh');
if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 1 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 2 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 3 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 5 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 4 && $("#bio_9").val() == 6 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 1 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 2 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 3 && $("#quim_9").val() == 6 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 6 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=6>6</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 6){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 6 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 4 && $("#quim_9").val() == 6 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 5 && $("#bio_9").val() == 6 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 1 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 2 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 4 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 3 && $("#quim_9").val() == 5 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 1 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 2 && $("#admin_9").val() == 5 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=5>5</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 5){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 3 && $("#admin_9").val() == 5 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 4 && $("#quim_9").val() == 5 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 1 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 3 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 2 && $("#admin_9").val() == 4 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 1 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=4>4</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 2 && $("#social_9").val() == 4){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 3 && $("#admin_9").val() == 4 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 1 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=3>3</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 2 && $("#social_9").val() == 3){
    $("#hum_9").append("<option value=1>1</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 1){
    $("#hum_9").append("<option value=2>2</option>");
}else if($("#mate_9").val() == 6 && $("#bio_9").val() == 5 && $("#quim_9").val() == 4 && $("#admin_9").val() == 3 && $("#social_9").val() == 2){
    $("#hum_9").append("<option value=1>1</option>");
}
$("#hum_9").selectpicker('refresh');
});