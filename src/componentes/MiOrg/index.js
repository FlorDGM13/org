import { useState } from "react";
import "./MiOrg.css"
const MiOrg = (props) => {
    console.log(props);
    //estado - hooks
    //useState (utiliza el estado)
    // const [nombreVariable, functionActualiza] = usesState(valorinicial)
    //const [mostrar,actualizarMostrar] = useState(true)
    //const manejarClick = () => {
      //  console.log("MOSTRAR/OCULTAR ELEMENTO", !mostrar);
        //actualizarMostrar()
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion </h3> 
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg