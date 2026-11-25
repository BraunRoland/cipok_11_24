import type { oldalProps } from "../../types/props";
import type { Cipo } from "../../types/types";
import Card from "../parts/Card";

function Moderator({cipok,view, changeCount, setChangeCount}:oldalProps) {
    async function patch(shoe: Cipo) {
        try {
            console.log(cipok);
            const response = await fetch(`http://localhost:3000/cipok/${shoe.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "applications/json" 
                },
                body: JSON.stringify({elerheto: !shoe.elerheto})
            });
            if (response.ok) {
                setChangeCount(changeCount += 1)
            }
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    }
    return (
        <>
        <div className="row">
            <div className="col-sm-12 text-center">
                <h2>Moderátor</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 mx-auto">
                {cipok.map((c,i) => (
                    <div className={`card ${c.elerheto? '':'unav'}`}>
                        <Card
                            cipo={c}
                            view={view}
                            key={i}
                        />
                        <div className="btnDiv">
                            <button onClick={()=> patch(c)} className={`btn btn-${c.elerheto? 'danger':'success'} patchBtn`}>{c.elerheto? 'kivétel':'Elérhetővé tevés'}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Moderator;