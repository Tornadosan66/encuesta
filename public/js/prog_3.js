$("#mate_4").change(function() {
$( "#biologo_4" ).show(); 
$( "#bio_4 option" ).remove();
$( "#quim_4 option" ).remove();
$( "#admin_4 option" ).remove();
$( "#social_4 option" ).remove();
$( "#hum_4 option" ).remove();
$("#bio_4").append("<option value=0><--Seleccionar--></option>");
$("#quim_4").append("<option value=0><--Seleccionar--></option>");
$("#admin_4").append("<option value=0><--Seleccionar--></option>");
$("#social_4").append("<option value=0><--Seleccionar--></option>");
$("#hum_4").append("<option value=0><--Seleccionar--></option>");
$("#bio_4").selectpicker('refresh');
$("#quim_4").selectpicker('refresh');
$("#admin_4").selectpicker('refresh');
$("#social_4").selectpicker('refresh');
$("#hum_4").selectpicker('refresh');
if($("#mate_4").val() == 1){
    $("#bio_4").append("<option value=2>2</option>");
    $("#bio_4").append("<option value=3>3</option>");
    $("#bio_4").append("<option value=4>4</option>");
    $("#bio_4").append("<option value=5>5</option>");
    $("#bio_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2){
    $("#bio_4").append("<option value=1>1</option>");
    $("#bio_4").append("<option value=3>3</option>");
    $("#bio_4").append("<option value=4>4</option>");
    $("#bio_4").append("<option value=5>5</option>");
    $("#bio_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3){
    $("#bio_4").append("<option value=1>1</option>");
    $("#bio_4").append("<option value=2>2</option>");
    $("#bio_4").append("<option value=4>4</option>");
    $("#bio_4").append("<option value=5>5</option>");
    $("#bio_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4){
    $("#bio_4").append("<option value=1>1</option>");
    $("#bio_4").append("<option value=2>2</option>");
    $("#bio_4").append("<option value=3>3</option>");
    $("#bio_4").append("<option value=5>5</option>");
    $("#bio_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5){
    $("#bio_4").append("<option value=1>1</option>");
    $("#bio_4").append("<option value=2>2</option>");
    $("#bio_4").append("<option value=3>3</option>");
    $("#bio_4").append("<option value=4>4</option>");
    $("#bio_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 6){
    $("#bio_4").append("<option value=1>1</option>");
    $("#bio_4").append("<option value=2>2</option>");
    $("#bio_4").append("<option value=3>3</option>");
    $("#bio_4").append("<option value=4>4</option>");
    $("#bio_4").append("<option value=5>5</option>");
}
$("#bio_4").selectpicker('refresh');
});


$( "#bio_4" ).change(function() {
$( "#quimica_4" ).show();
$( "#quim_4 option" ).remove();
$( "#admin_4 option" ).remove();
$( "#social_4 option" ).remove();
$( "#hum_4 option" ).remove();
$("#quim_4").append("<option value=0><--Seleccionar--></option>");
$("#admin_4").append("<option value=0><--Seleccionar--></option>");
$("#social_4").append("<option value=0><--Seleccionar--></option>");
$("#hum_4").append("<option value=0><--Seleccionar--></option>");
$("#quim_4").selectpicker('refresh');
$("#admin_4").selectpicker('refresh');
$("#social_4").selectpicker('refresh');
$("#hum_4").selectpicker('refresh');
if($("#mate_4").val() == 1 && $("#bio_4").val() == 2){
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3){
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4){
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5){
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6){
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1){
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1){
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1){
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=5>5</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1){
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1){
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=4>4</option>");
    $("#quim_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5){
    $("#quim_4").append("<option value=1>1</option>");
    $("#quim_4").append("<option value=2>2</option>");
    $("#quim_4").append("<option value=3>3</option>");
    $("#quim_4").append("<option value=4>4</option>");
}
$("#quim_4").selectpicker('refresh');
});


$( "#quim_4" ).change(function() {
$( "#administracion_4" ).show();
$( "#admin_4 option" ).remove();
$( "#social_4 option" ).remove();
$( "#hum_4 option" ).remove();
$("#admin_4").append("<option value=0><--Seleccionar--></option>");
$("#social_4").append("<option value=0><--Seleccionar--></option>");
$("#hum_4").append("<option value=0><--Seleccionar--></option>");
$("#admin_4").selectpicker('refresh');
$("#social_4").selectpicker('refresh');
$("#hum_4").selectpicker('refresh');
if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=5>5</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=4>4</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1){
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=3>3</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4){
    $("#admin_4").append("<option value=1>1</option>");
    $("#admin_4").append("<option value=2>2</option>");
    $("#admin_4").append("<option value=3>3</option>");
}
$("#admin_4").selectpicker('refresh');
});


$( "#admin_4" ).change(function() {
$( "#sociales_4" ).show();
$( "#social_4 option" ).remove();
$( "#hum_4 option" ).remove();
$("#social_4").append("<option value=0><--Seleccionar--></option>");
$("#hum_4").append("<option value=0><--Seleccionar--></option>");
$("#social_4").selectpicker('refresh');
$("#hum_4").selectpicker('refresh');
if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=5>5</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=4>4</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=3>3</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1){
    $("#social_4").append("<option value=2>2</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3){
    $("#social_4").append("<option value=1>1</option>");
    $("#social_4").append("<option value=2>2</option>");
}
$("#social_4").selectpicker('refresh');
});


$( "#social_4" ).change(function() {
$( "#humanidad_4" ).show();
$( "#hum_4 option" ).remove();
$("#hum_4").append("<option value=0><--Seleccionar--></option>");
$("#hum_4").selectpicker('refresh');
if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 1 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 2 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 3 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 5 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 4 && $("#bio_4").val() == 6 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 1 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 2 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 3 && $("#quim_4").val() == 6 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 6 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=6>6</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 6){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 6 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 4 && $("#quim_4").val() == 6 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 5 && $("#bio_4").val() == 6 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 1 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 2 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 4 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 3 && $("#quim_4").val() == 5 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 1 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 2 && $("#admin_4").val() == 5 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=5>5</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 5){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 3 && $("#admin_4").val() == 5 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 4 && $("#quim_4").val() == 5 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 1 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 3 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 2 && $("#admin_4").val() == 4 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 1 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=4>4</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 2 && $("#social_4").val() == 4){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 3 && $("#admin_4").val() == 4 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 1 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=3>3</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 2 && $("#social_4").val() == 3){
    $("#hum_4").append("<option value=1>1</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 1){
    $("#hum_4").append("<option value=2>2</option>");
}else if($("#mate_4").val() == 6 && $("#bio_4").val() == 5 && $("#quim_4").val() == 4 && $("#admin_4").val() == 3 && $("#social_4").val() == 2){
    $("#hum_4").append("<option value=1>1</option>");
}
$("#hum_4").selectpicker('refresh');
});


$(document).change(function(){
if($("#mate_4").val() != 0 && $("#bio_4").val() != 0 && $("#quim_4").val() != 0 && $("#admin_4").val() != 0 && $("#social_4").val() != 0 && $("#hum_4").val() != 0){
    $("#boton_4").show();
}else{
    $("#boton_4").hide();
}
});

$("#boton_atras_3").click(function(){

    $("#4_Seccion").hide();
    $("#3_Seccion").show();
    $(".progress-bar").css("width", "20%").text("20%");

});

$('#boton_sig_4').click(function(){
    
    $("#4_Seccion").hide();
    $("#5_Seccion").show();
    $(".progress-bar").css("width", "40%").text("40%");

});