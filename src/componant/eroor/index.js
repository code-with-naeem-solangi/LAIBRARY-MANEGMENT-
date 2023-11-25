import React from "react";
import"./index.css"
import { Link} from "react-router-dom";

const Eroor = ()=>{
 
    return(
        <>
        <div className="contrl">
          <h1 className="pdg">404 </h1>
          <h1 className="pdgt">THIS PAGE WILL BE NOT FOUND</h1>
         <Link to={"/"} className="spcl">GO TO HOME PAGE</Link>
        </div>
        </>
    )
}
export default Eroor; 