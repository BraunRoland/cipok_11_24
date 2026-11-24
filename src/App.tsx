import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Fejlec from './components/Fejlec'
import { useEffect, useState } from 'react'
import Index from './components/Index'
import Moderator from './components/Mod'
import Admin from './components/Admin'
import type { Cipo } from './types/types'

function App() {
  const [oldal,setOldal] = useState<'index' | 'mod' | 'admin'>('admin');
  const [cipok,setCipok] = useState<Cipo[]>([])
  useEffect(() => {
      async function  betolt() {
        try{
          const response = await fetch('cipok.json');
          const data = await response.json();
          setCipok(data.cipok as Cipo[])
        } catch (err) {
          if (err instanceof Error) {
            console.log(err.message)
          }
        }
      }
      betolt();
  },[])

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
              />
            )}
            {oldal == 'mod' && (
              <Moderator/>
            )}
            {oldal == 'admin' && (
              <Admin
                cipok={cipok}
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
