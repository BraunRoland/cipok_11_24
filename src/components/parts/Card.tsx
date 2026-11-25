import type { cardProps } from "../../types/props";

function Card({cipo, view}: cardProps) {
    const dateRegex = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/gm;
    return (
        <>
        <div className= {`card-body ${cipo.elerheto? '':'unav'}`} >
            <h4 className="card-title text-center" style={{color: cipo.szin}}>{cipo.nev}</h4>
            <p className="card-text"><strong>Kiadás:</strong> {cipo.kiadas.toString()}</p>
            {view != 'mod' && (
                <p className="card-text"><strong>Ár:</strong> {cipo.ar} $</p>
            )}
            <p className="card-text"><strong>Elérhető?:</strong> {cipo.elerheto? 'Igen' : 'Nem'}</p>
            <p className="card-text"><strong>Állapot:</strong> {cipo.allapot}</p>
        </div>
        </>
    )
}

export default Card;