$( "#mate" ).change(function() {
$( "#biologo" ).show();
$( "#bio option" ).remove();
                
$("#bio").append("<option value=0><--Seleccionar--></option>");
$("#bio").selectpicker('refresh');

if($("#mate").val() == 1){
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=5>5</option>");
    $("#bio").append("<option value=6>6</option>");
}
else if($("#mate").val() == 2){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=5>5</option>");
    $("#bio").append("<option value=6>6</option>");
}
else if($("#mate").val() == 3){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=5>5</option>");
    $("#bio").append("<option value=6>6</option>");
}
else if($("#mate").val() == 4){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=5>5</option>");
    $("#bio").append("<option value=6>6</option>");
}
else if($("#mate").val() == 5){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=6>6</option>");
}
else if($("#mate").val() == 6){
    $("#bio").append("<option value=1>1</option>");
    $("#bio").append("<option value=2>2</option>");
    $("#bio").append("<option value=3>3</option>");
    $("#bio").append("<option value=4>4</option>");
    $("#bio").append("<option value=5>5</option>");
}
$("#bio").selectpicker('refresh');
});

$( "#bio" ).change(function() {