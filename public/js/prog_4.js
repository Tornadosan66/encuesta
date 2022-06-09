$("#mate_5").change(function() {
$( "#biologo_5" ).show(); 
$( "#bio_5 option" ).remove();
$( "#quim_5 option" ).remove();
$( "#admin_5 option" ).remove();
$( "#social_5 option" ).remove();
$( "#hum_5 option" ).remove();
$("#bio_5").append("<option value=0><--Seleccionar--></option>");
$("#quim_5").append("<option value=0><--Seleccionar--></option>");
$("#admin_5").append("<option value=0><--Seleccionar--></option>");
$("#social_5").append("<option value=0><--Seleccionar--></option>");
$("#hum_5").append("<option value=0><--Seleccionar--></option>");
$("#bio_5").selectpicker('refresh');
$("#quim_5").selectpicker('refresh');
$("#admin_5").selectpicker('refresh');
$("#social_5").selectpicker('refresh');
$("#hum_5").selectpicker('refresh');
if($("#mate_5").val() == 1){
    $("#bio_5").append("<option value=2>2</option>");
    $("#bio_5").append("<option value=3>3</option>");
    $("#bio_5").append("<option value=4>4</option>");
    $("#bio_5").append("<option value=5>5</option>");
    $("#bio_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2){
    $("#bio_5").append("<option value=1>1</option>");
    $("#bio_5").append("<option value=3>3</option>");
    $("#bio_5").append("<option value=4>4</option>");
    $("#bio_5").append("<option value=5>5</option>");
    $("#bio_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3){
    $("#bio_5").append("<option value=1>1</option>");
    $("#bio_5").append("<option value=2>2</option>");
    $("#bio_5").append("<option value=4>4</option>");
    $("#bio_5").append("<option value=5>5</option>");
    $("#bio_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4){
    $("#bio_5").append("<option value=1>1</option>");
    $("#bio_5").append("<option value=2>2</option>");
    $("#bio_5").append("<option value=3>3</option>");
    $("#bio_5").append("<option value=5>5</option>");
    $("#bio_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5){
    $("#bio_5").append("<option value=1>1</option>");
    $("#bio_5").append("<option value=2>2</option>");
    $("#bio_5").append("<option value=3>3</option>");
    $("#bio_5").append("<option value=4>4</option>");
    $("#bio_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 6){
    $("#bio_5").append("<option value=1>1</option>");
    $("#bio_5").append("<option value=2>2</option>");
    $("#bio_5").append("<option value=3>3</option>");
    $("#bio_5").append("<option value=4>4</option>");
    $("#bio_5").append("<option value=5>5</option>");
}
$("#bio_5").selectpicker('refresh');
});


$( "#bio_5" ).change(function() {
$( "#quimica_5" ).show();
$( "#quim_5 option" ).remove();
$( "#admin_5 option" ).remove();
$( "#social_5 option" ).remove();
$( "#hum_5 option" ).remove();
$("#quim_5").append("<option value=0><--Seleccionar--></option>");
$("#admin_5").append("<option value=0><--Seleccionar--></option>");
$("#social_5").append("<option value=0><--Seleccionar--></option>");
$("#hum_5").append("<option value=0><--Seleccionar--></option>");
$("#quim_5").selectpicker('refresh');
$("#admin_5").selectpicker('refresh');
$("#social_5").selectpicker('refresh');
$("#hum_5").selectpicker('refresh');
if($("#mate_5").val() == 1 && $("#bio_5").val() == 2){
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3){
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4){
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5){
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6){
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1){
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1){
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1){
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=5>5</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1){
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1){
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=4>4</option>");
    $("#quim_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5){
    $("#quim_5").append("<option value=1>1</option>");
    $("#quim_5").append("<option value=2>2</option>");
    $("#quim_5").append("<option value=3>3</option>");
    $("#quim_5").append("<option value=4>4</option>");
}
$("#quim_5").selectpicker('refresh');
});


$( "#quim_5" ).change(function() {
$( "#administracion_5" ).show();
$( "#admin_5 option" ).remove();
$( "#social_5 option" ).remove();
$( "#hum_5 option" ).remove();
$("#admin_5").append("<option value=0><--Seleccionar--></option>");
$("#social_5").append("<option value=0><--Seleccionar--></option>");
$("#hum_5").append("<option value=0><--Seleccionar--></option>");
$("#admin_5").selectpicker('refresh');
$("#social_5").selectpicker('refresh');
$("#hum_5").selectpicker('refresh');
if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=5>5</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=4>4</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1){
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=3>3</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4){
    $("#admin_5").append("<option value=1>1</option>");
    $("#admin_5").append("<option value=2>2</option>");
    $("#admin_5").append("<option value=3>3</option>");
}
$("#admin_5").selectpicker('refresh');
});


$( "#admin_5" ).change(function() {
$( "#sociales_5" ).show();
$( "#social_5 option" ).remove();
$( "#hum_5 option" ).remove();
$("#social_5").append("<option value=0><--Seleccionar--></option>");
$("#hum_5").append("<option value=0><--Seleccionar--></option>");
$("#social_5").selectpicker('refresh');
$("#hum_5").selectpicker('refresh');
if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=5>5</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=4>4</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=3>3</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1){
    $("#social_5").append("<option value=2>2</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3){
    $("#social_5").append("<option value=1>1</option>");
    $("#social_5").append("<option value=2>2</option>");
}
$("#social_5").selectpicker('refresh');
});


$( "#social_5" ).change(function() {
$( "#humanidad_5" ).show();
$( "#hum_5 option" ).remove();
$("#hum_5").append("<option value=0><--Seleccionar--></option>");
$("#hum_5").selectpicker('refresh');
if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 1 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 2 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 3 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 5 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 4 && $("#bio_5").val() == 6 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 1 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 2 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 3 && $("#quim_5").val() == 6 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 6 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=6>6</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 6){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 6 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 4 && $("#quim_5").val() == 6 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 5 && $("#bio_5").val() == 6 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 1 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 2 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 4 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 3 && $("#quim_5").val() == 5 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 1 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 2 && $("#admin_5").val() == 5 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=5>5</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 5){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 3 && $("#admin_5").val() == 5 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 4 && $("#quim_5").val() == 5 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 1 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 3 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 2 && $("#admin_5").val() == 4 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 1 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=4>4</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 2 && $("#social_5").val() == 4){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 3 && $("#admin_5").val() == 4 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 1 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=3>3</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 2 && $("#social_5").val() == 3){
    $("#hum_5").append("<option value=1>1</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 1){
    $("#hum_5").append("<option value=2>2</option>");
}else if($("#mate_5").val() == 6 && $("#bio_5").val() == 5 && $("#quim_5").val() == 4 && $("#admin_5").val() == 3 && $("#social_5").val() == 2){
    $("#hum_5").append("<option value=1>1</option>");
}
$("#hum_5").selectpicker('refresh');
});


$(document).change(function(){
if($("#mate_5").val() != 0 && $("#bio_5").val() != 0 && $("#quim_5").val() != 0 && $("#admin_5").val() != 0 && $("#social_5").val() != 0 && $("#hum_5").val() != 0){
    $("#boton_5").show();
}else{
    $("#boton_5").hide();
}
});

$("#boton_atras_4").click(function(){

    $("#5_Seccion").hide();
    $("#4_Seccion").show();

});

$('#boton_sig_5').click(function(){
    
    $("#5_Seccion").hide();
    $("#6_Seccion").show();

});