<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="#">
        <title>Univer</title>
        <link href="{{ asset('css/estilacho.css') }}" rel="stylesheet" media="all"/>
    </head>
    <body>
        <div class="prueba">
            <h1>Encuesta de preferencias universitarias</h1>
        </div>
        <div class="prueba_2">
            <h3>Instrucciones:</h3>
        </div>
        <div class="prueba_3">
            <p><center>A continuación presentamos una serie de actividades, debes establecer una jerarquía de preferencia.<br>Procede de la siguiente manera:<br><br>Califica con 6 la actividad que para ti tiene la mayor preferencia, la que sigue con 5, y así sucesivamente, hasta el 1, que significa menor preferencia.<br>No se puede repetir el número en cada grupo de enunciados.<br>Si observas que alguna actividad se repite, no pienses en lo que contestaste anteriomente.<br>Si al jerarquizar notas que ninguna actividad te satisface, entonces piensa cuál sería la que menos te disgusta.</center></p>
        </div>
        <div class="prueba_4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <label for="nom">Nombre:</label><br>
                        <input id="nom" type="text" name="nom" placeholder="Nombre" class="form-control" required>
                    </div>
                    <div class="col-md-8">
                        <label for="escuela">Escuela de procedencia:</label><br>
                        <input id="escuela" type="text" name="escuela" placeholder="Ejem. Univer" class="form-control" required>
                    </div>
                </div>
            </div>
        </div>
        <div class="prueba_5">

<!--1ra seccion-->
            <div id="1_Seccion" style="display: block;">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 1)
                            <div id="matematicas" class="col-md-8" style="display: block;">
                                <label for="mate">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate" name="mate" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 2)
                            <div id="biologo" class="col-md-8" style="display: none">
                                <label for="bio">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio" name="bio" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 3)
                            <div id="quimica" class="col-md-8" style="display: none">
                                <label for="quim">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim" name="quim" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 4)
                            <div id="administracion" class="col-md-8" style="display: none">
                                <label for="admin">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin" name="admin" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 5)
                            <div id="sociales" class="col-md-8" style="display: none">
                                <label for="social">{{$pregunton->pregunta}}</label><br>
                                <select required id="social" name="social" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 6)
                            <div id="humanidad" class="col-md-8" style="display: none">
                                <label for="hum">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum" name="hum" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>

<!--2da seccion-->
            <div id="2_Seccion" style="display: none">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 7)
                            <div id="matematicas_2" class="col-md-8" style="display: block;">
                                <label for="mate_2">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate_2" name="mate_2" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 8)
                            <div id="biologo_2" class="col-md-8" style="display: none">
                                <label for="bio_2">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio_2" name="bio_2" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 9)
                            <div id="quimica_2" class="col-md-8" style="display: none">
                                <label for="quim_2">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim_2" name="quim_2" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 10)
                            <div id="administracion_2" class="col-md-8" style="display: none">
                                <label for="admin_2">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin_2" name="admin_2" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 11)
                            <div id="sociales_2" class="col-md-8" style="display: none">
                                <label for="social_2">{{$pregunton->pregunta}}</label><br>
                                <select required id="social_2" name="social_2" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 12)
                            <div id="humanidad_2" class="col-md-8" style="display: none">
                                <label for="hum_2">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum_2" name="hum_2" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>

<!--3ra seccion-->
            <div id="3_Seccion" style="display: none">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 13)
                            <div id="matematicas_3" class="col-md-8" style="display: block;">
                                <label for="mate_3">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate_3" name="mate_3" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 14)
                            <div id="biologo_3" class="col-md-8" style="display: none">
                                <label for="bio_3">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio_3" name="bio_3" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 15)
                            <div id="quimica_3" class="col-md-8" style="display: none">
                                <label for="quim_3">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim_3" name="quim_3" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 16)
                            <div id="administracion_3" class="col-md-8" style="display: none">
                                <label for="admin_3">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin_3" name="admin_3" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 17)
                            <div id="sociales_3" class="col-md-8" style="display: none">
                                <label for="social_3">{{$pregunton->pregunta}}</label><br>
                                <select required id="social_3" name="social_3" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 18)
                            <div id="humanidad_3" class="col-md-8" style="display: none">
                                <label for="hum_3">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum_3" name="hum_3" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>

<!--4ta seccion-->
            <div id="4_Seccion" style="display: none">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 19)
                            <div id="matematicas_4" class="col-md-8" style="display: block;">
                                <label for="mate_4">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate_4" name="mate_4" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 20)
                            <div id="biologo_4" class="col-md-8" style="display: none">
                                <label for="bio_4">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio_4" name="bio_4" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 21)
                            <div id="quimica_4" class="col-md-8" style="display: none">
                                <label for="quim_4">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim_4" name="quim_4" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 22)
                            <div id="administracion_4" class="col-md-8" style="display: none">
                                <label for="admin_4">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin_4" name="admin_4" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 23)
                            <div id="sociales_4" class="col-md-8" style="display: none">
                                <label for="social_4">{{$pregunton->pregunta}}</label><br>
                                <select required id="social_4" name="social_4" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 24)
                            <div id="humanidad_4" class="col-md-8" style="display: none">
                                <label for="hum_4">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum_4" name="hum_4" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>

<!--5ta seccion-->
            <div id="5_Seccion" style="display: none">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 25)
                            <div id="matematicas_5" class="col-md-8" style="display: block;">
                                <label for="mate_5">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate_5" name="mate_5" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 26)
                            <div id="biologo_5" class="col-md-8" style="display: none">
                                <label for="bio_5">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio_5" name="bio_5" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 27)
                            <div id="quimica_5" class="col-md-8" style="display: none">
                                <label for="quim_5">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim_5" name="quim_5" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 28)
                            <div id="administracion_5" class="col-md-8" style="display: none">
                                <label for="admin_5">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin_5" name="admin_5" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 29)
                            <div id="sociales_5" class="col-md-8" style="display: none">
                                <label for="social_5">{{$pregunton->pregunta}}</label><br>
                                <select required id="social_5" name="social_5" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 30)
                            <div id="humanidad_5" class="col-md-8" style="display: none">
                                <label for="hum_5">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum_5" name="hum_5" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>

<!--6ta seccion-->
            <div id="6_Seccion" style="display: none">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 31)
                            <div id="matematicas_6" class="col-md-8" style="display: block;">
                                <label for="mate_6">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate_6" name="mate_6" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 32)
                            <div id="biologo_6" class="col-md-8" style="display: none">
                                <label for="bio_6">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio_6" name="bio_6" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 33)
                            <div id="quimica_6" class="col-md-8" style="display: none">
                                <label for="quim_6">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim_6" name="quim_6" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 34)
                            <div id="administracion_6" class="col-md-8" style="display: none">
                                <label for="admin_6">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin_6" name="admin_6" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 35)
                            <div id="sociales_6" class="col-md-8" style="display: none">
                                <label for="social_6">{{$pregunton->pregunta}}</label><br>
                                <select required id="social_6" name="social_6" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 36)
                            <div id="humanidad_6" class="col-md-8" style="display: none">
                                <label for="hum_6">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum_6" name="hum_6" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>

<!--7ma seccion-->
            <div id="7_Seccion" style="display: none">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 37)
                            <div id="matematicas_7" class="col-md-8" style="display: block;">
                                <label for="mate_7">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate_7" name="mate_7" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 38)
                            <div id="biologo_7" class="col-md-8" style="display: none">
                                <label for="bio_7">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio_7" name="bio_7" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 39)
                            <div id="quimica_7" class="col-md-8" style="display: none">
                                <label for="quim_7">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim_7" name="quim_7" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 40)
                            <div id="administracion_7" class="col-md-8" style="display: none">
                                <label for="admin_7">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin_7" name="admin_7" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 41)
                            <div id="sociales_7" class="col-md-8" style="display: none">
                                <label for="social_7">{{$pregunton->pregunta}}</label><br>
                                <select required id="social_7" name="social_7" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 42)
                            <div id="humanidad_7" class="col-md-8" style="display: none">
                                <label for="hum_7">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum_7" name="hum_7" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>

<!--8va seccion-->
            <div id="8_Seccion" style="display: none">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 43)
                            <div id="matematicas_8" class="col-md-8" style="display: block;">
                                <label for="mate_8">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate_8" name="mate_8" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 44)
                            <div id="biologo_8" class="col-md-8" style="display: none">
                                <label for="bio_8">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio_8" name="bio_8" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 45)
                            <div id="quimica_8" class="col-md-8" style="display: none">
                                <label for="quim_8">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim_8" name="quim_8" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 46)
                            <div id="administracion" class="col-md-8" style="display: none">
                                <label for="admin_8">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin_8" name="admin_8" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 47)
                            <div id="sociales_8" class="col-md-8" style="display: none">
                                <label for="social_8">{{$pregunton->pregunta}}</label><br>
                                <select required id="social_8" name="social_8" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 48)
                            <div id="humanidad_8" class="col-md-8" style="display: none">
                                <label for="hum_8">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum_8" name="hum_8" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>

<!--9na seccion-->
            <div id="9_Seccion" style="display: none">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 49)
                            <div id="matematicas_9" class="col-md-8" style="display: block;">
                                <label for="mate_9">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate_9" name="mate_9" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 50)
                            <div id="biologo_9" class="col-md-8" style="display: none">
                                <label for="bio_9">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio_9" name="bio_9" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 51)
                            <div id="quimica_9" class="col-md-8" style="display: none">
                                <label for="quim_9">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim_9" name="quim_9" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 52)
                            <div id="administracion_9" class="col-md-8" style="display: none">
                                <label for="admin_9">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin_9" name="admin_9" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 53)
                            <div id="sociales_9" class="col-md-8" style="display: none">
                                <label for="social_9">{{$pregunton->pregunta}}</label><br>
                                <select required id="social_9" name="social_9" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 54)
                            <div id="humanidad_9" class="col-md-8" style="display: none">
                                <label for="hum_9">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum_9" name="hum_9" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>

<!--10ma seccion-->
            <div id="10_Seccion" style="display: none">
            <div class="card-body">
                <div class="row"><br>
                    @foreach ($matematicos as $pregunton)
                        @if($pregunton->id_tabla_general == 55)
                            <div id="matematicas_10" class="col-md-8" style="display: block;">
                                <label for="mate_10">{{$pregunton->pregunta}}</label><br>
                                <select required id="mate_10" name="mate_10" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($biologos as $pregunton)
                        @if($pregunton->id_tabla_general == 56)
                            <div id="biologo_10" class="col-md-8" style="display: none">
                                <label for="bio_10">{{$pregunton->pregunta}}</label><br>
                                <select required id="bio_10" name="bio_10" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($quimicos as $pregunton)
                        @if($pregunton->id_tabla_general == 57)
                            <div id="quimica_10" class="col-md-8" style="display: none">
                                <label for="quim_10">{{$pregunton->pregunta}}</label><br>
                                <select required id="quim_10" name="quim_10" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($administradores as $pregunton)
                        @if($pregunton->id_tabla_general == 58)
                            <div id="administracion_10" class="col-md-8" style="display: none">
                                <label for="admin_10">{{$pregunton->pregunta}}</label><br>
                                <select required id="admin_10" name="admin_10" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($sociales as $pregunton)
                        @if($pregunton->id_tabla_general == 59)
                            <div id="sociales_10" class="col-md-8" style="display: none">
                                <label for="social_10">{{$pregunton->pregunta}}</label><br>
                                <select required id="social_10" name="social_10" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                    @foreach ($humanos as $pregunton)
                        @if($pregunton->id_tabla_general == 60)
                            <div id="humanidad_10" class="col-md-8" style="display: none">
                                <label for="hum_10">{{$pregunton->pregunta}}</label><br>
                                <select required id="hum_10" name="hum_10" class="form-control selectpicker"data-live-search="true">
                                    <option value=""><--Seleccionar--></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        @endif
                    @endforeach<br>
                </div>
            </div>
            </div>
        </div>

        <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
        <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/css/bootstrap-select.min.css'>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.3/js/bootstrap-select.min.js"></script>

        <script defer src="{{asset('prog.js')}}"></script>
    </body>
</html>

