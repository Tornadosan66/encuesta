$("#mate_10").change(function() {
$( "#biologo_10" ).show(); 
$( "#bio_10 option" ).remove();
$( "#quim_10 option" ).remove();
$( "#admin_10 option" ).remove();
$( "#social_10 option" ).remove();
$( "#hum_10 option" ).remove();
$("#bio_10").append("<option value=0><--Seleccionar--></option>");
$("#quim_10").append("<option value=0><--Seleccionar--></option>");
$("#admin_10").append("<option value=0><--Seleccionar--></option>");
$("#social_10").append("<option value=0><--Seleccionar--></option>");
$("#hum_10").append("<option value=0><--Seleccionar--></option>");
$("#bio_10").selectpicker('refresh');
$("#quim_10").selectpicker('refresh');
$("#admin_10").selectpicker('refresh');
$("#social_10").selectpicker('refresh');
$("#hum_10").selectpicker('refresh');
if($("#mate_10").val() == 1){
    $("#bio_10").append("<option value=2>2</option>");
    $("#bio_10").append("<option value=3>3</option>");
    $("#bio_10").append("<option value=4>4</option>");
    $("#bio_10").append("<option value=5>5</option>");
    $("#bio_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2){
    $("#bio_10").append("<option value=1>1</option>");
    $("#bio_10").append("<option value=3>3</option>");
    $("#bio_10").append("<option value=4>4</option>");
    $("#bio_10").append("<option value=5>5</option>");
    $("#bio_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3){
    $("#bio_10").append("<option value=1>1</option>");
    $("#bio_10").append("<option value=2>2</option>");
    $("#bio_10").append("<option value=4>4</option>");
    $("#bio_10").append("<option value=5>5</option>");
    $("#bio_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4){
    $("#bio_10").append("<option value=1>1</option>");
    $("#bio_10").append("<option value=2>2</option>");
    $("#bio_10").append("<option value=3>3</option>");
    $("#bio_10").append("<option value=5>5</option>");
    $("#bio_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5){
    $("#bio_10").append("<option value=1>1</option>");
    $("#bio_10").append("<option value=2>2</option>");
    $("#bio_10").append("<option value=3>3</option>");
    $("#bio_10").append("<option value=4>4</option>");
    $("#bio_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 6){
    $("#bio_10").append("<option value=1>1</option>");
    $("#bio_10").append("<option value=2>2</option>");
    $("#bio_10").append("<option value=3>3</option>");
    $("#bio_10").append("<option value=4>4</option>");
    $("#bio_10").append("<option value=5>5</option>");
}
$("#bio_10").selectpicker('refresh');
});


$( "#bio_10" ).change(function() {
$( "#quimica_10" ).show();
$( "#quim_10 option" ).remove();
$( "#admin_10 option" ).remove();
$( "#social_10 option" ).remove();
$( "#hum_10 option" ).remove();
$("#quim_10").append("<option value=0><--Seleccionar--></option>");
$("#admin_10").append("<option value=0><--Seleccionar--></option>");
$("#social_10").append("<option value=0><--Seleccionar--></option>");
$("#hum_10").append("<option value=0><--Seleccionar--></option>");
$("#quim_10").selectpicker('refresh');
$("#admin_10").selectpicker('refresh');
$("#social_10").selectpicker('refresh');
$("#hum_10").selectpicker('refresh');
if($("#mate_10").val() == 1 && $("#bio_10").val() == 2){
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3){
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4){
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5){
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6){
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1){
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1){
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1){
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=5>5</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1){
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1){
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=4>4</option>");
    $("#quim_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5){
    $("#quim_10").append("<option value=1>1</option>");
    $("#quim_10").append("<option value=2>2</option>");
    $("#quim_10").append("<option value=3>3</option>");
    $("#quim_10").append("<option value=4>4</option>");
}
$("#quim_10").selectpicker('refresh');
});


$( "#quim_10" ).change(function() {
$( "#administracion_10" ).show();
$( "#admin_10 option" ).remove();
$( "#social_10 option" ).remove();
$( "#hum_10 option" ).remove();
$("#admin_10").append("<option value=0><--Seleccionar--></option>");
$("#social_10").append("<option value=0><--Seleccionar--></option>");
$("#hum_10").append("<option value=0><--Seleccionar--></option>");
$("#admin_10").selectpicker('refresh');
$("#social_10").selectpicker('refresh');
$("#hum_10").selectpicker('refresh');
if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=5>5</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=4>4</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1){
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=3>3</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4){
    $("#admin_10").append("<option value=1>1</option>");
    $("#admin_10").append("<option value=2>2</option>");
    $("#admin_10").append("<option value=3>3</option>");
}
$("#admin_10").selectpicker('refresh');
});


$( "#admin_10" ).change(function() {
$( "#sociales_10" ).show();
$( "#social_10 option" ).remove();
$( "#hum_10 option" ).remove();
$("#social_10").append("<option value=0><--Seleccionar--></option>");
$("#hum_10").append("<option value=0><--Seleccionar--></option>");
$("#social_10").selectpicker('refresh');
$("#hum_10").selectpicker('refresh');
if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=5>5</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=4>4</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=3>3</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1){
    $("#social_10").append("<option value=2>2</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3){
    $("#social_10").append("<option value=1>1</option>");
    $("#social_10").append("<option value=2>2</option>");
}
$("#social_10").selectpicker('refresh');
});


$( "#social_10" ).change(function() {
$( "#humanidad_10" ).show();
$( "#hum_10 option" ).remove();
$("#hum_10").append("<option value=0><--Seleccionar--></option>");
$("#hum_10").selectpicker('refresh');
if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 1 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 2 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 3 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 5 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 4 && $("#bio_10").val() == 6 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 1 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 2 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 3 && $("#quim_10").val() == 6 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 6 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=6>6</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 6){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 6 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 4 && $("#quim_10").val() == 6 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 5 && $("#bio_10").val() == 6 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 1 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 2 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 4 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 3 && $("#quim_10").val() == 5 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 1 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 2 && $("#admin_10").val() == 5 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=5>5</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 5){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 3 && $("#admin_10").val() == 5 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 4 && $("#quim_10").val() == 5 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 1 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 3 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 2 && $("#admin_10").val() == 4 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 1 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=4>4</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 2 && $("#social_10").val() == 4){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 3 && $("#admin_10").val() == 4 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 1 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=3>3</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 2 && $("#social_10").val() == 3){
    $("#hum_10").append("<option value=1>1</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 1){
    $("#hum_10").append("<option value=2>2</option>");
}else if($("#mate_10").val() == 6 && $("#bio_10").val() == 5 && $("#quim_10").val() == 4 && $("#admin_10").val() == 3 && $("#social_10").val() == 2){
    $("#hum_10").append("<option value=1>1</option>");
}
$("#hum_10").selectpicker('refresh');
});


$(document).change(function(){
if($("#mate_10").val() != 0 && $("#bio_10").val() != 0 && $("#quim_10").val() != 0 && $("#admin_10").val() != 0 && $("#social_10").val() != 0 && $("#hum_10").val() != 0){
    $("#confirmar").show();
}else{
    $("#confirmar").hide();
}
});

$("#boton_atras_9").click(function(){

    $("#10_Seccion").hide();
    $("#9_Seccion").show();

});
