<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="#">
        <title>Univer</title>
        <link href="{{ asset('css/estilacho.css') }}" rel="stylesheet" media="all"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
        
        <div class="prueba">
            <h1>Encuesta de preferencias universitarias</h1>
        </div>
        <div class="prueba_2">
            <h3>Resultados</h3>
        </div>
        <div class="prueba_6">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <center>
                            <p>Nombre: {{$nombre}}<br>
                            Escuela de procedencia: {{$escuela}}<br>
                            <br>
                            Fisíco matematico: &nbsp; {{$fm}}<br>
                            Biológico: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$bio}}<br>
                            Químico: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$quim}}<br>
                            Administrativo: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$admon}}<br>
                            Social: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$soc}}<br>
                            Humanidades: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$hum}}</p>
                        </center>
                    </div>
                    
                    <br /><br />

                    <div class="col-md-12">
                        <center>
                            <a href="{{route('prueba',$id)}}">
                                <button type="button" class="btn btn-primary">Ver PDF</button>
                            </a>
                            <a href="{{route('encuesta.create')}}">
                                <button type="button" class="btn btn-primary">Volver</button>
                            </a>
                        </center>
                    </div>
                </div>
            </div>
        </div>

    </body>
</html>
