import type { MouseEvent } from "react";
import type { formProps } from "../../types/props";

function Form({formCipo, setFormCipo, uresForm, changeCount, setChangeCount, ref}: formProps) {
    const dateRegex = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/gm;

    function megse(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setFormCipo(uresForm);
    }

    function validalas() {
        if (formCipo.nev == '') {
            throw new Error('A név nem lehet üres!');
        } else if (formCipo.kiadas > new Date()) {
            throw new Error('A dátum nem jó!');
        } else if (formCipo.ar < 0 ) {
            throw new Error('Az ár nem lehet kisebb 0-nál!')
        } else if (formCipo.allapot != 'új' && formCipo.allapot != 'megkimélt' && formCipo.allapot == 'használt') {
            throw new Error('Rossz állapot!');
        } else if (formCipo.szin == '') {
            throw new Error('Üres szín!');
        }
        return dateRegex.test(formCipo.kiadas.toString())? formCipo.kiadas.toString() : formCipo.kiadas.toISOString().split('T')[0]
    }

    async function torles(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/cipok/${formCipo.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "applications/json"
                }
            });
        if (response.ok) {
            setChangeCount(changeCount+=1);
            megse(e);
        }
        } catch (err) {
            if (err instanceof Error) {
                alert(err.message);
            }
        }
    }
    async function mentes(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        try {
            const date = validalas();
            const response = await fetch(`http://localhost:3000/cipok/${formCipo.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "applications/json" 
                },
                body: JSON.stringify({...formCipo, kiadas: date})
            });
            if (response.ok) {
                setChangeCount(changeCount+=1);
                megse(e);
            }
        } catch(err) {
            if (err instanceof Error) {
                alert(err.message);
            }
        }
    }
    async function hozzadas(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try{
            const date = validalas();
            const response = await fetch(`http://localhost:3000/cipok`, {
                method: "POST",
                headers: {
                    "Content-Type": "applications/json"
                },
                body: JSON.stringify({nev: formCipo.nev, kiadas: date, ar: formCipo.ar, elerheto: formCipo.elerheto, allapot: formCipo.allapot, szin: formCipo.szin})
            });
            if (response.ok) {
                setChangeCount(changeCount+=1);
                megse(e);
            }
        } catch (err) {
            if (err instanceof Error) {
                alert(err.message);
            }
        }    
    }
    return(
    <>
    <form id="form">
        <div className="row" ref={ref}>
            <div className="col-sm-12">
                <label htmlFor="nev" className="form-label">Név</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="nev" 
                    value={formCipo.nev} 
                    name="nev" 
                    placeholder="Add meg a cipő nevét"
                    onChange={(e) => setFormCipo((alap) => ({...alap, nev: e.target.value}))}
                />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label htmlFor="kiadas" className="form-label">Kiadási év</label>
                <input 
                    className="form-control" 
                    type="date" 
                    name="kiadas" 
                    id="kiadas"
                    value={dateRegex.test(formCipo.kiadas.toString())?formCipo.kiadas.toString():formCipo.kiadas.toISOString().split('T')[0]}
                    onChange={(e) => setFormCipo((alap) => ({...alap, kiadas: new Date(e.target.value)}))}
                />
            </div>
            <div className="col">
                <label htmlFor="ar" className="form-label">Ár</label>
                <input 
                    className="form-control" 
                    type="number"
                    min={0} 
                    name="ar" 
                    id="ar" 
                    placeholder="$"
                    value={formCipo.ar}
                    onChange={(e) => setFormCipo((alap) => ({...alap, ar: Number(e.target.value)}))}
                />
            </div>
            <div className="col">
                <label htmlFor="allapot" className="form-label">Állapot</label>
                <select 
                    className="form-select" 
                    name="allapot" 
                    onChange={(e) => setFormCipo((alap) => ({...alap, allapot: e.target.value}))} 
                    value={formCipo.allapot} 
                    id="allapot"
                >
                    <option value="új">Új</option>
                    <option value="használt">Használt</option>
                    <option value="megkimélt">Megkimélt</option>
                </select>
            </div>
        </div>
        <div className="row radioRow">
            <div className="col">
                <div className="form-check">
                    <label htmlFor="elerheto" className="form-check-label">Elérhetőség</label>
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name="elerheto" 
                        id="elerheto"
                        checked={formCipo.elerheto}
                        onChange={(e) => setFormCipo((alap) => ({...alap, elerheto: e.target.checked}))}
                    />
                </div>
            </div>
            <div className="col">
                <label htmlFor="szin" className="form-label d-inline align-top">Színe </label>
                <input 
                    type="color" 
                    name="szin" 
                    id="szin" 
                    className="form-control form-control-color d-inline"
                    value={formCipo.szin}
                    onChange={(e) => setFormCipo((alap) => ({...alap, szin: e.target.value}))} 
                />
            </div>
        </div>
        {formCipo.id === '' && (
            <div className="ujBtnDiv">
                <button className="btn btn-success" onClick={(e) => hozzadas(e)}>hozzáadás</button>
            </div>
        )}
        {formCipo.id !== '' && (
            <div className="modiBtnDiv">
                <button className="btn btn-success" onClick={(e) => mentes(e)}>mentés</button>
                <button className="btn btn-secondary" onClick={(e) => megse(e)}>mégse</button>
                <button className="btn btn-danger float-sm-end" onClick={(e) => torles(e)}>törlés</button>
            </div>
        )}
    </form>
    </>
)
}

export default Form;