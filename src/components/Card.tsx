import type { cardProps } from "../types/props";

function Card({cipo}: cardProps) {
    return (
        <>
        <div className="card-body">
            <h4 className="card-title" style={{color: cipo.szin}}>{cipo.nev}</h4>
            <p className="card-text">Kiadás: {cipo.kiadas.toString()}</p>
            <p className="card-text">Ár: {cipo.ar}</p>
            <p className="card-text">Elérhető?: {cipo.elerheto? 'Igen' : 'Nem'}</p>
            <p className="card-text">Állapot: {cipo.allapot}</p>
        </div>
        </>
    )
}

export default Card;