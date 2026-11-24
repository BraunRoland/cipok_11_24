import type { oldalProps } from "../types/props";
import Card from "./Card";

function Index({cipok}: oldalProps) {
    return (
        <>
        <div className="row">
            <div className="col-sm-12 text-center">
                <h2>Főoldal</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 mx-auto">
                {cipok.map((c) => (
                    <div className="card">
                        <Card
                            cipo={c}
                        />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Index;