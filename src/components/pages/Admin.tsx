import { useRef, useState } from "react";
import type { oldalProps } from "../../types/props";
import type { Cipo } from "../../types/types";
import Card from "../parts/Card";
import Form from "../parts/Form";

function Admin({cipok, view, changeCount, setChangeCount}: oldalProps) {
    const uresform: Cipo = {
        id: '',
        nev: '',
        kiadas: new Date(),
        elerheto: false,
        ar: 0,
        szin: '#000000',
        allapot: 'új'
    };
    const [formCipo, setFormCipo] = useState<Cipo>(uresform);
    const targetSection = useRef<HTMLDivElement | null>(null); //Ai-al neztem meg ezt hogy kell csinalni
    
    function modositas(c: Cipo) {
        setFormCipo(c);
        targetSection.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })    
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
                    uresForm={uresform}
                    changeCount={changeCount}
                    setChangeCount={setChangeCount}
                    ref={targetSection}
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
                            <button className="btn btn-warning modiBtn" onClick={()=> modositas(c)}>Módosítás</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Admin;