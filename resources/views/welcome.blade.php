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
            <a href="{{route('encuesta.index')}}">
                <button type="button" class="btn btn-primary">Comenzar con la encuesta</button>
            </a>
        </div>
    </body>
</html>
