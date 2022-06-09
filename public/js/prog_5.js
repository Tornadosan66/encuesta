$("#mate_6").change(function() {
$( "#biologo_6" ).show(); 
$( "#bio_6 option" ).remove();
$( "#quim_6 option" ).remove();
$( "#admin_6 option" ).remove();
$( "#social_6 option" ).remove();
$( "#hum_6 option" ).remove();
$("#bio_6").append("<option value=0><--Seleccionar--></option>");
$("#quim_6").append("<option value=0><--Seleccionar--></option>");
$("#admin_6").append("<option value=0><--Seleccionar--></option>");
$("#social_6").append("<option value=0><--Seleccionar--></option>");
$("#hum_6").append("<option value=0><--Seleccionar--></option>");
$("#bio_6").selectpicker('refresh');
$("#quim_6").selectpicker('refresh');
$("#admin_6").selectpicker('refresh');
$("#social_6").selectpicker('refresh');
$("#hum_6").selectpicker('refresh');
if($("#mate_6").val() == 1){
    $("#bio_6").append("<option value=2>2</option>");
    $("#bio_6").append("<option value=3>3</option>");
    $("#bio_6").append("<option value=4>4</option>");
    $("#bio_6").append("<option value=5>5</option>");
    $("#bio_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2){
    $("#bio_6").append("<option value=1>1</option>");
    $("#bio_6").append("<option value=3>3</option>");
    $("#bio_6").append("<option value=4>4</option>");
    $("#bio_6").append("<option value=5>5</option>");
    $("#bio_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3){
    $("#bio_6").append("<option value=1>1</option>");
    $("#bio_6").append("<option value=2>2</option>");
    $("#bio_6").append("<option value=4>4</option>");
    $("#bio_6").append("<option value=5>5</option>");
    $("#bio_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4){
    $("#bio_6").append("<option value=1>1</option>");
    $("#bio_6").append("<option value=2>2</option>");
    $("#bio_6").append("<option value=3>3</option>");
    $("#bio_6").append("<option value=5>5</option>");
    $("#bio_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5){
    $("#bio_6").append("<option value=1>1</option>");
    $("#bio_6").append("<option value=2>2</option>");
    $("#bio_6").append("<option value=3>3</option>");
    $("#bio_6").append("<option value=4>4</option>");
    $("#bio_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 6){
    $("#bio_6").append("<option value=1>1</option>");
    $("#bio_6").append("<option value=2>2</option>");
    $("#bio_6").append("<option value=3>3</option>");
    $("#bio_6").append("<option value=4>4</option>");
    $("#bio_6").append("<option value=5>5</option>");
}
$("#bio_6").selectpicker('refresh');
});


$( "#bio_6" ).change(function() {
$( "#quimica_6" ).show();
$( "#quim_6 option" ).remove();
$( "#admin_6 option" ).remove();
$( "#social_6 option" ).remove();
$( "#hum_6 option" ).remove();
$("#quim_6").append("<option value=0><--Seleccionar--></option>");
$("#admin_6").append("<option value=0><--Seleccionar--></option>");
$("#social_6").append("<option value=0><--Seleccionar--></option>");
$("#hum_6").append("<option value=0><--Seleccionar--></option>");
$("#quim_6").selectpicker('refresh');
$("#admin_6").selectpicker('refresh');
$("#social_6").selectpicker('refresh');
$("#hum_6").selectpicker('refresh');
if($("#mate_6").val() == 1 && $("#bio_6").val() == 2){
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3){
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4){
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5){
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6){
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1){
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1){
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1){
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=5>5</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1){
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1){
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=4>4</option>");
    $("#quim_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5){
    $("#quim_6").append("<option value=1>1</option>");
    $("#quim_6").append("<option value=2>2</option>");
    $("#quim_6").append("<option value=3>3</option>");
    $("#quim_6").append("<option value=4>4</option>");
}
$("#quim_6").selectpicker('refresh');
});


$( "#quim_6" ).change(function() {
$( "#administracion_6" ).show();
$( "#admin_6 option" ).remove();
$( "#social_6 option" ).remove();
$( "#hum_6 option" ).remove();
$("#admin_6").append("<option value=0><--Seleccionar--></option>");
$("#social_6").append("<option value=0><--Seleccionar--></option>");
$("#hum_6").append("<option value=0><--Seleccionar--></option>");
$("#admin_6").selectpicker('refresh');
$("#social_6").selectpicker('refresh');
$("#hum_6").selectpicker('refresh');
if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=5>5</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=4>4</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1){
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=3>3</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4){
    $("#admin_6").append("<option value=1>1</option>");
    $("#admin_6").append("<option value=2>2</option>");
    $("#admin_6").append("<option value=3>3</option>");
}
$("#admin_6").selectpicker('refresh');
});


$( "#admin_6" ).change(function() {
$( "#sociales_6" ).show();
$( "#social_6 option" ).remove();
$( "#hum_6 option" ).remove();
$("#social_6").append("<option value=0><--Seleccionar--></option>");
$("#hum_6").append("<option value=0><--Seleccionar--></option>");
$("#social_6").selectpicker('refresh');
$("#hum_6").selectpicker('refresh');
if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=5>5</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=4>4</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=3>3</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1){
    $("#social_6").append("<option value=2>2</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3){
    $("#social_6").append("<option value=1>1</option>");
    $("#social_6").append("<option value=2>2</option>");
}
$("#social_6").selectpicker('refresh');
});


$( "#social_6" ).change(function() {
$( "#humanidad_6" ).show();
$( "#hum_6 option" ).remove();
$("#hum_6").append("<option value=0><--Seleccionar--></option>");
$("#hum_6").selectpicker('refresh');
if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 1 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 2 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 3 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 5 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 4 && $("#bio_6").val() == 6 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 1 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 2 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 3 && $("#quim_6").val() == 6 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 6 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=6>6</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 6){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 6 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 4 && $("#quim_6").val() == 6 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 5 && $("#bio_6").val() == 6 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 1 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 2 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 4 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 3 && $("#quim_6").val() == 5 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 1 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 2 && $("#admin_6").val() == 5 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=5>5</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 5){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 3 && $("#admin_6").val() == 5 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 4 && $("#quim_6").val() == 5 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 1 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 3 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 2 && $("#admin_6").val() == 4 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 1 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=4>4</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 2 && $("#social_6").val() == 4){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 3 && $("#admin_6").val() == 4 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 1 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=3>3</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 2 && $("#social_6").val() == 3){
    $("#hum_6").append("<option value=1>1</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 1){
    $("#hum_6").append("<option value=2>2</option>");
}else if($("#mate_6").val() == 6 && $("#bio_6").val() == 5 && $("#quim_6").val() == 4 && $("#admin_6").val() == 3 && $("#social_6").val() == 2){
    $("#hum_6").append("<option value=1>1</option>");
}
$("#hum_6").selectpicker('refresh');
});


$(document).change(function(){
if($("#mate_6").val() != 0 && $("#bio_6").val() != 0 && $("#quim_6").val() != 0 && $("#admin_6").val() != 0 && $("#social_6").val() != 0 && $("#hum_6").val() != 0){
    $("#boton_6").show();
}else{
    $("#boton_6").hide();
}
});

$("#boton_atras_5").click(function(){

    $("#6_Seccion").hide();
    $("#5_Seccion").show();

});

$('#boton_sig_6').click(function(){
    
    $("#6_Seccion").hide();
    $("#7_Seccion").show();

});