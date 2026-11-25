import { useState } from "react";
import type { oldalProps } from "../../types/props";
import type { Cipo } from "../../types/types";
import Card from "../parts/Card";
import Form from "../parts/Form";

function Admin({cipok, view}: oldalProps) {
    const uresform: Cipo = {
        id: 'asd',
        nev: '',
        kiadas: new Date(),
        elerheto: false,
        ar: 0,
        szin: '#000000',
        allapot: 'új'
    };
    const [formCipo, setFormCipo] = useState<Cipo>(uresform);

    function megse() {

    }
    function torles(shoe: Cipo) {

    }
    function mentes(shoe: Cipo) {

    }
    function hozzadas() {
        
    }
    return (
        <>
        <div className="row">
            <div className="col-sm-12 text-center">
                <h2>Admin</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-8 mx-auto">
                <Form
                    formCipo={formCipo}
                    setFormCipo={setFormCipo}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 mx-auto">
                {cipok.map((c,index) => (
                    <div className={`card ${c.elerheto? '':'unav'}`} key={index}>
                        <Card
                            cipo={c}
                            view={view}
                            setFormCipo={setFormCipo}
                        />
                        <div className="btnDiv">
                            <button className="btn btn-warning modiBtn" onClick={()=> (setFormCipo(c))}>Módosítás</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Admin;