import type { oldalProps } from "../types/props";
import Card from "./Card";

function Admin({cipok}: oldalProps) {
    return (
        <>
        <div className="row">
            <div className="col-sm-12 text-center">
                <h2>Admin</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 mx-auto text-center">
                {cipok.map((c) => (
                    <div className="card">
                        <Card
                            cipo={c}
                        />
                        <button className="btn btn-warning">Módosítás</button>
                    </div>
                ))}
            </div>    
        </div>
        </>
    )
}

export default Admin;