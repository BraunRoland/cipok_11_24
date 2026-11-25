import type { oldalProps } from "../../types/props";
import Card from "../parts/Card";

function Index({cipok, view}: oldalProps) {
    return (
        <>
        <div className="row">
            <div className="col-sm-12 text-center">
                <h2>Főoldal</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 mx-auto">
                {cipok.map((c,i) => (
                    <div className="card" key={i}>
                        <Card
                            cipo={c}
                            view= {view}
                        />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Index;