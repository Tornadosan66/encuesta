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
    public function store(Request $request)
    {
        $puntuacion = new Puntaje();
        $puntuacion->nombre = $request->nom;
        $puntuacion->escuela_procedencia = $request->escuela;

        $fm = $request->mate + $request->mate_2 + $request->mate_3 + $request->mate_4 + $request->mate_5 + $request->mate_6 + $request->mate_7 + $request->mate_8 + $request->mate_9 + $request->mate_10;
        $bio = $request->bio + $request->bio_2 + $request->bio_3 + $request->bio_4 + $request->bio_5 + $request->bio_6 + $request->bio_7 + $request->bio_8 + $request->bio_9 + $request->bio_10;
        $quim = $request->quim + $request->quim_2 + $request->quim_3 + $request->quim_4 + $request->quim_5 + $request->quim_6 + $request->quim_7 + $request->quim_8 + $request->quim_9 + $request->quim_10;
        $admon = $request->admin + $request->admin_2 + $request->admin_3 + $request->admin_4 + $request->admin_5 + $request->admin_6 + $request->admin_7 + $request->admin_8 + $request->admin_9 + $request->admin_10;
        $soc = $request->social + $request->social_2 + $request->social_3 + $request->social_4 + $request->social_5 + $request->social_6 + $request->social_7 + $request->social_8 + $request->social_9 + $request->social_10;
        $hum = $request->hum + $request->hum_2 + $request->hum_3 + $request->hum_4 + $request->hum_5 + $request->hum_6 + $request->hum_7 + $request->hum_8 + $request->hum_9 + $request->hum_10;

        //dd($request->all());
        //dd($fm, $bio, $quim, $admon, $soc, $hum);

        $puntuacion->puntaje_fm = $fm;
        $puntuacion->puntaje_bio = $bio;
        $puntuacion->puntaje_quim = $quim;
        $puntuacion->puntaje_admon = $admon;
        $puntuacion->puntaje_soc = $soc;
        $puntuacion->puntaje_hum = $hum;

        $puntuacion->save();

        return view('welcome');
    }
}
