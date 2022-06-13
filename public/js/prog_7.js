$("#mate_8").change(function() {
$( "#biologo_8" ).show(); 
$( "#bio_8 option" ).remove();
$( "#quim_8 option" ).remove();
$( "#admin_8 option" ).remove();
$( "#social_8 option" ).remove();
$( "#hum_8 option" ).remove();
$("#bio_8").append("<option value=0><--Seleccionar--></option>");
$("#quim_8").append("<option value=0><--Seleccionar--></option>");
$("#admin_8").append("<option value=0><--Seleccionar--></option>");
$("#social_8").append("<option value=0><--Seleccionar--></option>");
$("#hum_8").append("<option value=0><--Seleccionar--></option>");
$("#bio_8").selectpicker('refresh');
$("#quim_8").selectpicker('refresh');
$("#admin_8").selectpicker('refresh');
$("#social_8").selectpicker('refresh');
$("#hum_8").selectpicker('refresh');
if($("#mate_8").val() == 1){
    $("#bio_8").append("<option value=2>2</option>");
    $("#bio_8").append("<option value=3>3</option>");
    $("#bio_8").append("<option value=4>4</option>");
    $("#bio_8").append("<option value=5>5</option>");
    $("#bio_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2){
    $("#bio_8").append("<option value=1>1</option>");
    $("#bio_8").append("<option value=3>3</option>");
    $("#bio_8").append("<option value=4>4</option>");
    $("#bio_8").append("<option value=5>5</option>");
    $("#bio_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3){
    $("#bio_8").append("<option value=1>1</option>");
    $("#bio_8").append("<option value=2>2</option>");
    $("#bio_8").append("<option value=4>4</option>");
    $("#bio_8").append("<option value=5>5</option>");
    $("#bio_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4){
    $("#bio_8").append("<option value=1>1</option>");
    $("#bio_8").append("<option value=2>2</option>");
    $("#bio_8").append("<option value=3>3</option>");
    $("#bio_8").append("<option value=5>5</option>");
    $("#bio_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5){
    $("#bio_8").append("<option value=1>1</option>");
    $("#bio_8").append("<option value=2>2</option>");
    $("#bio_8").append("<option value=3>3</option>");
    $("#bio_8").append("<option value=4>4</option>");
    $("#bio_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 6){
    $("#bio_8").append("<option value=1>1</option>");
    $("#bio_8").append("<option value=2>2</option>");
    $("#bio_8").append("<option value=3>3</option>");
    $("#bio_8").append("<option value=4>4</option>");
    $("#bio_8").append("<option value=5>5</option>");
}
$("#bio_8").selectpicker('refresh');
});


$( "#bio_8" ).change(function() {
$( "#quimica_8" ).show();
$( "#quim_8 option" ).remove();
$( "#admin_8 option" ).remove();
$( "#social_8 option" ).remove();
$( "#hum_8 option" ).remove();
$("#quim_8").append("<option value=0><--Seleccionar--></option>");
$("#admin_8").append("<option value=0><--Seleccionar--></option>");
$("#social_8").append("<option value=0><--Seleccionar--></option>");
$("#hum_8").append("<option value=0><--Seleccionar--></option>");
$("#quim_8").selectpicker('refresh');
$("#admin_8").selectpicker('refresh');
$("#social_8").selectpicker('refresh');
$("#hum_8").selectpicker('refresh');
if($("#mate_8").val() == 1 && $("#bio_8").val() == 2){
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3){
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4){
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5){
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6){
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1){
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1){
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1){
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=5>5</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1){
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1){
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=4>4</option>");
    $("#quim_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5){
    $("#quim_8").append("<option value=1>1</option>");
    $("#quim_8").append("<option value=2>2</option>");
    $("#quim_8").append("<option value=3>3</option>");
    $("#quim_8").append("<option value=4>4</option>");
}
$("#quim_8").selectpicker('refresh');
});


$( "#quim_8" ).change(function() {
$( "#administracion_8" ).show();
$( "#admin_8 option" ).remove();
$( "#social_8 option" ).remove();
$( "#hum_8 option" ).remove();
$("#admin_8").append("<option value=0><--Seleccionar--></option>");
$("#social_8").append("<option value=0><--Seleccionar--></option>");
$("#hum_8").append("<option value=0><--Seleccionar--></option>");
$("#admin_8").selectpicker('refresh');
$("#social_8").selectpicker('refresh');
$("#hum_8").selectpicker('refresh');
if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=5>5</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=4>4</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1){
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=3>3</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4){
    $("#admin_8").append("<option value=1>1</option>");
    $("#admin_8").append("<option value=2>2</option>");
    $("#admin_8").append("<option value=3>3</option>");
}
$("#admin_8").selectpicker('refresh');
});


$( "#admin_8" ).change(function() {
$( "#sociales_8" ).show();
$( "#social_8 option" ).remove();
$( "#hum_8 option" ).remove();
$("#social_8").append("<option value=0><--Seleccionar--></option>");
$("#hum_8").append("<option value=0><--Seleccionar--></option>");
$("#social_8").selectpicker('refresh');
$("#hum_8").selectpicker('refresh');
if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=5>5</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=4>4</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=3>3</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1){
    $("#social_8").append("<option value=2>2</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3){
    $("#social_8").append("<option value=1>1</option>");
    $("#social_8").append("<option value=2>2</option>");
}
$("#social_8").selectpicker('refresh');
});


$( "#social_8" ).change(function() {
$( "#humanidad_8" ).show();
$( "#hum_8 option" ).remove();
$("#hum_8").append("<option value=0><--Seleccionar--></option>");
$("#hum_8").selectpicker('refresh');
if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 1 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 2 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 3 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 5 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 4 && $("#bio_8").val() == 6 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 1 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 2 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 3 && $("#quim_8").val() == 6 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 6 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=6>6</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 6){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 6 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 4 && $("#quim_8").val() == 6 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 5 && $("#bio_8").val() == 6 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 1 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 2 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 4 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 3 && $("#quim_8").val() == 5 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 1 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 2 && $("#admin_8").val() == 5 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=5>5</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 5){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 3 && $("#admin_8").val() == 5 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 4 && $("#quim_8").val() == 5 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 1 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 3 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 2 && $("#admin_8").val() == 4 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 1 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=4>4</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 2 && $("#social_8").val() == 4){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 3 && $("#admin_8").val() == 4 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 1 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=3>3</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 2 && $("#social_8").val() == 3){
    $("#hum_8").append("<option value=1>1</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 1){
    $("#hum_8").append("<option value=2>2</option>");
}else if($("#mate_8").val() == 6 && $("#bio_8").val() == 5 && $("#quim_8").val() == 4 && $("#admin_8").val() == 3 && $("#social_8").val() == 2){
    $("#hum_8").append("<option value=1>1</option>");
}
$("#hum_8").selectpicker('refresh');
});


$(document).change(function(){
if($("#mate_8").val() != 0 && $("#bio_8").val() != 0 && $("#quim_8").val() != 0 && $("#admin_8").val() != 0 && $("#social_8").val() != 0 && $("#hum_8").val() != 0){
    $("#boton_8").show();
}else{
    $("#boton_8").hide();
}
});

$("#boton_atras_7").click(function(){

    $("#8_Seccion").hide();
    $("#7_Seccion").show();
    $(".progress-bar").css("width", "60%").text("60%");

});

$('#boton_sig_8').click(function(){
    
    $("#8_Seccion").hide();
    $("#9_Seccion").show();
    $(".progress-bar").css("width", "80%").text("80%");

});