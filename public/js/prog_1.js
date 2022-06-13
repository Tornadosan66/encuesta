$("#mate").change(function() {
$( "#biologo" ).show(); 
$( "#bio option" ).remove();
$( "#quim option" ).remove();
$( "#admin option" ).remove();
$( "#social option" ).remove();
$( "#hum option" ).remove();
$("#bio").append("<option value=0><--Seleccionar--></option>");
$("#quim").append("<option value=0><--Seleccionar--></option>");
$("#admin").append("<option value=0><--Seleccionar--></option>");
$("#social").append("<option value=0><--Seleccionar--></option>");
$("#hum").append("<option value=0><--Seleccionar--></option>");
$("#bio").selectpicker('refresh');
$("#quim").selectpicker('refresh');
$("#admin").selectpicker('refresh');
$("#social").selectpicker('refresh');
$("#hum").selectpicker('refresh');
if($("#mate").val() == 1){
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=5>5</option>");
    $("#bio").append("<option value=6>6</option>");
}else if($("#mate").val() == 2){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=5>5</option>");
    $("#bio").append("<option value=6>6</option>");
}else if($("#mate").val() == 3){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=5>5</option>");
    $("#bio").append("<option value=6>6</option>");
}else if($("#mate").val() == 4){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=5>5</option>");
    $("#bio").append("<option value=6>6</option>");
}else if($("#mate").val() == 5){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=6>6</option>");
}else if($("#mate").val() == 6){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=5>5</option>");
}
$("#bio").selectpicker('refresh');
});


$( "#bio" ).change(function() {
$( "#quimica" ).show();
$( "#quim option" ).remove();
$( "#admin option" ).remove();
$( "#social option" ).remove();
$( "#hum option" ).remove();
$("#quim").append("<option value=0><--Seleccionar--></option>");
$("#admin").append("<option value=0><--Seleccionar--></option>");
$("#social").append("<option value=0><--Seleccionar--></option>");
$("#hum").append("<option value=0><--Seleccionar--></option>");
$("#quim").selectpicker('refresh');
$("#admin").selectpicker('refresh');
$("#social").selectpicker('refresh');
$("#hum").selectpicker('refresh');
if($("#mate").val() == 1 && $("#bio").val() == 2){
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3){
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4){
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5){
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6){
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1){
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1){
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1){
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=5>5</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=5>5</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1){
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1){
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=4>4</option>");
    $("#quim").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5){
    $("#quim").append("<option value=1>1</option>");
    $("#quim").append("<option value=2>2</option>");
    $("#quim").append("<option value=3>3</option>");
    $("#quim").append("<option value=4>4</option>");
}
$("#quim").selectpicker('refresh');
});


$( "#quim" ).change(function() {
$( "#administracion" ).show();
$( "#admin option" ).remove();
$( "#social option" ).remove();
$( "#hum option" ).remove();
$("#admin").append("<option value=0><--Seleccionar--></option>");
$("#social").append("<option value=0><--Seleccionar--></option>");
$("#hum").append("<option value=0><--Seleccionar--></option>");
$("#admin").selectpicker('refresh');
$("#social").selectpicker('refresh');
$("#hum").selectpicker('refresh');
if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 3){
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 4){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2){
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3){
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1){
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2){
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1){
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=5>5</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 2){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 3){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1){
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=4>4</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1){
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=3>3</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4){
    $("#admin").append("<option value=1>1</option>");
    $("#admin").append("<option value=2>2</option>");
    $("#admin").append("<option value=3>3</option>");
}
$("#admin").selectpicker('refresh');
});


$( "#admin" ).change(function() {
$( "#sociales" ).show();
$( "#social option" ).remove();
$( "#hum option" ).remove();
$("#social").append("<option value=0><--Seleccionar--></option>");
$("#hum").append("<option value=0><--Seleccionar--></option>");
$("#social").selectpicker('refresh');
$("#hum").selectpicker('refresh');
if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=5>5</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 6){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 6){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=4>4</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 5){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 5){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 2){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 3){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 4){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 1){
    $("#social").append("<option value=3>3</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 4){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 1){
    $("#social").append("<option value=2>2</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 2){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 3){
    $("#social").append("<option value=1>1</option>");
    $("#social").append("<option value=2>2</option>");
}
$("#social").selectpicker('refresh');
});


$( "#social" ).change(function() {
$( "#humanidad" ).show();
$( "#hum option" ).remove();
$("#hum").append("<option value=0><--Seleccionar--></option>");
$("#hum").selectpicker('refresh');
if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 1 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 2 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 3 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 5 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 4 && $("#bio").val() == 6 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 1 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 2 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 3 && $("#quim").val() == 6 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 6 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 6){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=6>6</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 6){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 6 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 4 && $("#quim").val() == 6 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 5 && $("#bio").val() == 6 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 1 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 2 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 4 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 3 && $("#quim").val() == 5 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 1 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 2 && $("#admin").val() == 5 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 5){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=5>5</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 5){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 3 && $("#admin").val() == 5 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 4 && $("#quim").val() == 5 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 1 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 3 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 2 && $("#admin").val() == 4 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 1 && $("#social").val() == 4){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=4>4</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 2 && $("#social").val() == 4){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 3 && $("#admin").val() == 4 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 2){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 1 && $("#social").val() == 3){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 1){
    $("#hum").append("<option value=3>3</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 2 && $("#social").val() == 3){
    $("#hum").append("<option value=1>1</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 1){
    $("#hum").append("<option value=2>2</option>");
}else if($("#mate").val() == 6 && $("#bio").val() == 5 && $("#quim").val() == 4 && $("#admin").val() == 3 && $("#social").val() == 2){
    $("#hum").append("<option value=1>1</option>");
}
$("#hum").selectpicker('refresh');
});


$(document).change(function(){
if($("#mate").val() != 0 && $("#bio").val() != 0 && $("#quim").val() != 0 && $("#admin").val() != 0 && $("#social").val() != 0 && $("#hum").val() != 0){
    $("#boton_1").show();
}else{
    $("#boton_1").hide();
}
});

$('#boton_sig_1').click(function(){
    
    $("#1_Seccion").hide();
    $("#2_Seccion").show();
    $(".progress-bar").css("width", "10%").text("10%");

});