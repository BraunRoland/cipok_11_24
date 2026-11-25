import type { formProps } from "../../types/props";

function Form({formCipo, setFormCipo}: formProps) {
    const dateRegex = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/gm
    return(
    <>
    <form id="form">
        <div className="row">
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
        <div className="row radioRow ">
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
                <button className="btn btn-success">hozzáadás</button>
            </div>
        )}
        {formCipo.id !== '' && (
            <div className="modiBtnDiv">
                <button className="btn btn-success">mentés</button>
                <button className="btn btn-secondary">mégse</button>
                <button className="btn btn-danger float-sm-end">törlés</button>
            </div>
        )}
    </form>
    </>
)
}

export default Form;