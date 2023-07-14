const {db}=require("../cnn")

//actores
const consultarActores =async(req,res)=>{
    const response=await db.any("select rc_id_control,rc_tiene_rotulo from revision a order by a.rc_id_control desc;");
    res.json(response);
}



const crearActor =async(req,res)=>{
    const{rc_tiene_rotulo}=req.body;
    console.log("pensando llegar");
    console.log(rc_tiene_rotulo);
    const response =await db.query("insert into revision (rc_tiene_rotulo) values($1)",[rc_tiene_rotulo]);
    res.json({
        message:"Actor creado correctamente",
        body:{
            actor:{rc_tiene_rotulo}
        }
    })
}
const updateActor =async (req,res)=>{
    const {rc_id_control,rc_area_pa, rc_cumple_area_pa,rc_nro_losas_pa,rc_cumple_nro_losas, rc_vigencia_pa}=req.body;
    const response = await db.any(`UPDATE revision set rc_area_pa=$2, rc_cumple_area_pa=$3, rc_nro_losas_pa=$4,rc_cumple_nro_losas=$5, rc_vigencia_pa=$6,rc_estado_pa=true where rc_id_control=$1`,[rc_id_control,rc_area_pa, rc_cumple_area_pa,rc_nro_losas_pa,rc_cumple_nro_losas,  rc_vigencia_pa,true])
    res.json({
        message:'Actor actualizada correctamente',
        body:{
            rc_id_control,rc_area_pa, rc_cumple_area_pa,rc_nro_losas_pa,rc_cumple_nro_losas, rc_vigencia_pa
        }
    })
}


module.exports={
    consultarActores,
    crearActor,
    updateActor,

}