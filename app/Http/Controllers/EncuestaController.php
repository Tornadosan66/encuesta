<?php

namespace App\Http\Controllers;

use App\Models\Administrativo;
use App\Models\Biologico;
use App\Models\Fisicomatematico;
use App\Models\Humanidades;
use App\Models\Quimico;
use App\Models\Social;
use App\Models\Puntaje;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EncuestaController extends Controller
{
    public function index()
    {
        /*
        $preguntas = DB::table('fisico_matematico')
        ->join('biologico','biologico.id_tabla_general','=','fisico_matematico.id_tabla_general')->select('*')
        ->join('quimico','quimico.id_tabla_general','=','fisico_matematico.id_tabla_general')->select('*')
        ->join('administrativo','administrativo.id_tabla_general','=','fisico_matematico.id_tabla_general')->select('*')
        ->join('social','social.id_tabla_general','=','fisico_matematico.id_tabla_general')->select('*')
        ->join('humanidades','humanidades.id_tabla_general','=','fisico_matematico.id_tabla_general')->select('*')
        ->get();
        dd($preguntas);
        */

        $administradores = new Administrativo();
        $administradores = $administradores->all();
        $biologos = new Biologico();
        $biologos = $biologos->all();
        $matematicos = new Fisicomatematico();
        $matematicos = $matematicos->all();
        $humanos = new Humanidades();
        $humanos = $humanos->all();
        $quimicos = new Quimico();
        $quimicos = $quimicos->all();
        $sociales = new Social();
        $sociales = $sociales->all();

        return view('encuesta', compact('administradores','biologos','matematicos','humanos','quimicos','sociales'));
        //return view('encuesta', compact('preguntas'));
    }
    public function ingresar(Request $request)
    {
        $puntuacion = new Puntaje();
        $puntuacion->nombre = $request->nom;
        $puntuacion->escuela_procedencia = $request->escuela;
    }
}
