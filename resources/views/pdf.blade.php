<style>
@page{
  margin: 0;
  display: flex;
}
.prueba{
	background: #131313;
  	height: 65px;
  	width: 75%;
	display: flex;
	justify-content: center;
  	align-items: center;
  	margin: 0 auto;
  	color: #0F00F0;
}
.prueba_2{
	background: #FFFFFF;
  	height: 60px;
  	width: 75%;
	display: flex;
	justify-content: center;
  	align-items: center;
  	margin: 0 auto;
  	color: #000000;
}
.prueba_6{
	background: #E5E5E5;
  	height: 250px;
  	width: 75%;
	display: flex;
	justify-content: center;
  	align-items: center;
  	margin: 0 auto;
  	color: #000000;
  	font-size: 17px;
  	font-weight: bold;
}
div.primero {
  margin:  0;
  height:100%;
  width: 100%;
  background: url({{ public_path('/img/Fondo.png') }}) no-repeat;
  background-color: #322A44;
  background-attachment: fixed;
  background-size: contain;
}
</style>
<div class="primero">
	<div class="prueba">
		<center>
			<h1>Encuesta de preferencias universitarias</h1>
		</center>
	</div>
	<div class="prueba_2">
		<center>
			<h3>Resultados</h3>
		</center>
	</div>
	<div class="prueba_6">
		<div class="card-body">
			<div class="row">
				<div class="col-md-12">
					<center>
	                    <p>Nombre: {{$puntaje->nombre}}<br>
	                    Escuela de procedencia: {{$puntaje->escuela_procedencia}}<br>
	                    <br>
	                    Fisíco matematico: &nbsp; {{$puntaje->puntaje_fm}}<br>
	                    Biológico: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$puntaje->puntaje_bio}}<br>
	                    Químico: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$puntaje->puntaje_quim}}<br>
	                    Administrativo: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$puntaje->puntaje_admon}}<br>
	                    Social: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$puntaje->puntaje_soc}}<br>
	                    Humanidades: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{$puntaje->puntaje_hum}}</p>
					</center>
				</div>
			</div>
		</div>
	</div>
</div>