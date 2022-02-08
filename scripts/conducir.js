function conducir(edadDelUsuario){
    if(edadDelUsuario >= 18){
        return("puede conducir");
    }else{
        return("no puede conducir");
    }
}
module.exports = conducir; 