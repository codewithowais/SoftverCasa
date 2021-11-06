import React from "react";
import './Main.css';
import Particles from "./NewParticle";
import Navbar from "./Navbar";


export default function Main() {
    return (
        <div style={{ backgroundColor: "gray" }}>
            <Particles />
            {/* <div id={"particles-js"} > </div> */}
            {/* <div className="count-particles" >
                <span className="js-count-particles" > -- </span> particles
            </div> */}
            <div className="count-particles" >
            <Navbar />
            </div>

        </div>
    )
}