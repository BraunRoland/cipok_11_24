import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Fejlec from './components/static/Fejlec'
import { useEffect, useState } from 'react'
import Index from './components/pages/Index'
import Moderator from './components/pages/Mod'
import Admin from './components/pages/Admin'
import type { Cipo } from './types/types'

function App() {
  const [oldal,setOldal] = useState<'index' | 'mod' | 'admin'>('index');
  const [changeCount, setChangeCount] = useState<number>(0);
  const [cipok,setCipok] = useState<Cipo[]>([])
  useEffect(() => {
      async function  betolt() {
        try{
          const response = await fetch('http://localhost:3000/cipok');
          const data = await response.json();
          setCipok(data as Cipo[])
        } catch (err) {
          if (err instanceof Error) {
            console.log(err.message)
          }
        }
      }
      betolt();
  },[changeCount])

  return (
    <>
    <Fejlec
      setOldal={setOldal}
    />
    {cipok.length> 0 && (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mx-auto">
            {oldal == 'index' &&
            (
              <Index
                cipok={cipok}
                view={oldal}
                changeCount={changeCount}
                setChangeCount={setChangeCount}
              />
            )}
            {oldal == 'mod' && (
              <Moderator
                cipok={cipok}
                view={oldal}
                changeCount={changeCount}
                setChangeCount={setChangeCount}
              />
            )}
            {oldal == 'admin' && (
              <Admin
                cipok={cipok}
                view={oldal}
                changeCount={changeCount}
                setChangeCount={setChangeCount}
              />
            )}
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default App;
