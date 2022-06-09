$("#mate_7").change(function() {
$( "#biologo_7" ).show(); 
$( "#bio_7 option" ).remove();
$( "#quim_7 option" ).remove();
$( "#admin_7 option" ).remove();
$( "#social_7 option" ).remove();
$( "#hum_7 option" ).remove();
$("#bio_7").append("<option value=0><--Seleccionar--></option>");
$("#quim_7").append("<option value=0><--Seleccionar--></option>");
$("#admin_7").append("<option value=0><--Seleccionar--></option>");
$("#social_7").append("<option value=0><--Seleccionar--></option>");
$("#hum_7").append("<option value=0><--Seleccionar--></option>");
$("#bio_7").selectpicker('refresh');
$("#quim_7").selectpicker('refresh');
$("#admin_7").selectpicker('refresh');
$("#social_7").selectpicker('refresh');
$("#hum_7").selectpicker('refresh');
if($("#mate_7").val() == 1){
    $("#bio_7").append("<option value=2>2</option>");
    $("#bio_7").append("<option value=3>3</option>");
    $("#bio_7").append("<option value=4>4</option>");
    $("#bio_7").append("<option value=5>5</option>");
    $("#bio_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2){
    $("#bio_7").append("<option value=1>1</option>");
    $("#bio_7").append("<option value=3>3</option>");
    $("#bio_7").append("<option value=4>4</option>");
    $("#bio_7").append("<option value=5>5</option>");
    $("#bio_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3){
    $("#bio_7").append("<option value=1>1</option>");
    $("#bio_7").append("<option value=2>2</option>");
    $("#bio_7").append("<option value=4>4</option>");
    $("#bio_7").append("<option value=5>5</option>");
    $("#bio_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4){
    $("#bio_7").append("<option value=1>1</option>");
    $("#bio_7").append("<option value=2>2</option>");
    $("#bio_7").append("<option value=3>3</option>");
    $("#bio_7").append("<option value=5>5</option>");
    $("#bio_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5){
    $("#bio_7").append("<option value=1>1</option>");
    $("#bio_7").append("<option value=2>2</option>");
    $("#bio_7").append("<option value=3>3</option>");
    $("#bio_7").append("<option value=4>4</option>");
    $("#bio_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 6){
    $("#bio_7").append("<option value=1>1</option>");
    $("#bio_7").append("<option value=2>2</option>");
    $("#bio_7").append("<option value=3>3</option>");
    $("#bio_7").append("<option value=4>4</option>");
    $("#bio_7").append("<option value=5>5</option>");
}
$("#bio_7").selectpicker('refresh');
});


$( "#bio_7" ).change(function() {
$( "#quimica_7" ).show();
$( "#quim_7 option" ).remove();
$( "#admin_7 option" ).remove();
$( "#social_7 option" ).remove();
$( "#hum_7 option" ).remove();
$("#quim_7").append("<option value=0><--Seleccionar--></option>");
$("#admin_7").append("<option value=0><--Seleccionar--></option>");
$("#social_7").append("<option value=0><--Seleccionar--></option>");
$("#hum_7").append("<option value=0><--Seleccionar--></option>");
$("#quim_7").selectpicker('refresh');
$("#admin_7").selectpicker('refresh');
$("#social_7").selectpicker('refresh');
$("#hum_7").selectpicker('refresh');
if($("#mate_7").val() == 1 && $("#bio_7").val() == 2){
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3){
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4){
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5){
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6){
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1){
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1){
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1){
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=5>5</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1){
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1){
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=4>4</option>");
    $("#quim_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5){
    $("#quim_7").append("<option value=1>1</option>");
    $("#quim_7").append("<option value=2>2</option>");
    $("#quim_7").append("<option value=3>3</option>");
    $("#quim_7").append("<option value=4>4</option>");
}
$("#quim_7").selectpicker('refresh');
});


$( "#quim_7" ).change(function() {
$( "#administracion_7" ).show();
$( "#admin_7 option" ).remove();
$( "#social_7 option" ).remove();
$( "#hum_7 option" ).remove();
$("#admin_7").append("<option value=0><--Seleccionar--></option>");
$("#social_7").append("<option value=0><--Seleccionar--></option>");
$("#hum_7").append("<option value=0><--Seleccionar--></option>");
$("#admin_7").selectpicker('refresh');
$("#social_7").selectpicker('refresh');
$("#hum_7").selectpicker('refresh');
if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=5>5</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=4>4</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1){
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=3>3</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4){
    $("#admin_7").append("<option value=1>1</option>");
    $("#admin_7").append("<option value=2>2</option>");
    $("#admin_7").append("<option value=3>3</option>");
}
$("#admin_7").selectpicker('refresh');
});


$( "#admin_7" ).change(function() {
$( "#sociales_7" ).show();
$( "#social_7 option" ).remove();
$( "#hum_7 option" ).remove();
$("#social_7").append("<option value=0><--Seleccionar--></option>");
$("#hum_7").append("<option value=0><--Seleccionar--></option>");
$("#social_7").selectpicker('refresh');
$("#hum_7").selectpicker('refresh');
if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=5>5</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=4>4</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=3>3</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1){
    $("#social_7").append("<option value=2>2</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3){
    $("#social_7").append("<option value=1>1</option>");
    $("#social_7").append("<option value=2>2</option>");
}
$("#social_7").selectpicker('refresh');
});


$( "#social_7" ).change(function() {
$( "#humanidad_7" ).show();
$( "#hum_7 option" ).remove();
$("#hum_7").append("<option value=0><--Seleccionar--></option>");
$("#hum_7").selectpicker('refresh');
if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 1 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 2 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 3 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 5 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 4 && $("#bio_7").val() == 6 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 1 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 2 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 3 && $("#quim_7").val() == 6 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 6 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=6>6</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 6){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 6 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 4 && $("#quim_7").val() == 6 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 5 && $("#bio_7").val() == 6 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 1 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 2 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 4 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 3 && $("#quim_7").val() == 5 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 1 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 2 && $("#admin_7").val() == 5 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=5>5</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 5){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 3 && $("#admin_7").val() == 5 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 4 && $("#quim_7").val() == 5 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 1 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 3 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 2 && $("#admin_7").val() == 4 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 1 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=4>4</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 2 && $("#social_7").val() == 4){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 3 && $("#admin_7").val() == 4 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 1 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=3>3</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 2 && $("#social_7").val() == 3){
    $("#hum_7").append("<option value=1>1</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 1){
    $("#hum_7").append("<option value=2>2</option>");
}else if($("#mate_7").val() == 6 && $("#bio_7").val() == 5 && $("#quim_7").val() == 4 && $("#admin_7").val() == 3 && $("#social_7").val() == 2){
    $("#hum_7").append("<option value=1>1</option>");
}
$("#hum_7").selectpicker('refresh');
});


$(document).change(function(){
if($("#mate_7").val() != 0 && $("#bio_7").val() != 0 && $("#quim_7").val() != 0 && $("#admin_7").val() != 0 && $("#social_7").val() != 0 && $("#hum_7").val() != 0){
    $("#boton_7").show();
}else{
    $("#boton_7").hide();
}
});

$("#boton_atras_6").click(function(){

    $("#7_Seccion").hide();
    $("#6_Seccion").show();

});

$('#boton_sig_7').click(function(){
    
    $("#7_Seccion").hide();
    $("#8_Seccion").show();

});