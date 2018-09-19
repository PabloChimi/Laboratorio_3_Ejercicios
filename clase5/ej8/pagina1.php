<?php

$nombre_fichero = "json/MOC_DATA.json";
$gestor = fopen($nombre_fichero, "r");
$contenido = fread($gestor, filesize($nombre_fichero));
fclose($gestor);
sleep(3);
echo $contenido;


?>