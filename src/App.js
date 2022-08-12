import React, { useState, useEffect } from 'react'
import Spotify from './spotify.js'
import dedo from './fotos/dedo.png'

let time = Date.parse('9 10 2022 21:00:00 GMT-3')

const App = () => {
    const [inicio , setInicio] = useState(0);
    const [fechaLimite] = useState(time)
    const [resta , setResta] = useState(0);
    const [minutos , setMinutos] = useState(0)// divido 60 
    const [segundos , setSegundos] = useState(0)//igual
    const [horas , setHoras] = useState(0)// divido 60 divido 60
    const [dias , setDias] = useState(0)// divido 60 divido 60 divido 24

    useEffect(() => {
      nuevaHora()
    })

    const tiempos = () =>{
      if(resta){
        let restoDeDias = 0;
        let restoDeHoras = 0;
        let restoDeMinutos = 0;
        restoDeDias = (resta % 86400)
        setDias(Math.trunc(resta / 86400))
        restoDeHoras = (restoDeDias % 3600)
        setHoras(Math.trunc(restoDeDias / 3600))
        restoDeMinutos = (restoDeHoras % 60)
        setMinutos(Math.trunc(restoDeHoras / 60))
        setSegundos(restoDeMinutos)
      }
    }

    const nuevaHora = () =>{
      if(inicio === 0){
          setInicio(1)  
          setInterval(()=>{
            setResta(Math.trunc((fechaLimite - Date.now())/1000))
          }, 1000)
      }
      tiempos();
    }

    return (
        <div  style={{width: '100vw' , overflowX: 'hidden'}} className="fondo d-flex flex-column justify-content-center align-items-center">
            <div className="boxTitulo d-flex justify-content-center align-items-center" ></div>
            <div className="text-center row mt-2 d-flex justify-content-center align-items-center boxTiempo">
                <div className='d-flex justify-content-center align-items-center'>
                  <p className="letra" style={{fontSize:'32.5px' , letterSpacing:'9.5px', textShadow: 'white 0.1em 0.1em 0.1em'}}>PROXIMA FECHA</p>
                </div>
                <div className=' border border-dark tiempos text-center' style={{width: '18%'}}>
                  <p className="text-center ajuste1" style={{borderBottom: 'black solid 1px' }}>{dias !== 1 ? 'DIAS' : 'DIA'}</p>
                  <p style={{fontSize: '25px' , fontWeight: '3.5px' }} className="text-center">{dias}</p>
                </div>
                <div className=' border border-dark tiempos text-center' style={{width: '18%'}}>
                    <p className="text-center ajuste1" style={{borderBottom: 'black solid 1px' }}>{horas !== 1 ? 'HORAS' : 'HORA'}</p>
                    <p style={{fontSize: '25px' , fontWeight: '3.5px' }} className="text-center">{horas < 10 ? `0${horas}` : horas}</p>
                </div>
                <div className=' border border-dark tiempos text-center' style={{width: '18%'}}>
                    <p className="text-center ajuste1" style={{borderBottom: 'black solid 1px' }}>MIN</p>
                    <p style={{fontSize: '25px' , fontWeight: '3.5px' }} className="text-center">{minutos < 10 ? `0${minutos}` : minutos}</p>
                </div>
                <div className=' border border-dark tiempos text-center' style={{width: '18%'}}>
                    <p className="text-center ajuste1" style={{borderBottom: 'black solid 1px' }}>SEG</p>
                    <p style={{fontSize: '25px' , fontWeight: '3.5px' }} className="text-center">{segundos < 10 ? `0${segundos}` : segundos}</p>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center tickets'>
                <p className='text-center letra' style={{fontSize:'30px' , textShadow: 'white 0.1em 0.1em 0.1em'}} >CONSEGUI TU TICKET</p>
                <p className="text-center movimientoDeMano" style={{fontSize:'40px' , textShadow: 'white 0.1em 0.1em 0.1em'}}><img src={dedo} height="60px" ></img></p>
                <button className="btn btn-danger" style={{padding: '20px' , fontSize: '18px'}} ><a style={{textDecoration: 'none' , color: 'white'}} target="_blank" href='https://wa.me/+543482586525'>TICKET</a></button>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center fotos' >
                <p className='text-center letra' style={{fontSize:'30px'  , textShadow: 'white 0.1em 0.1em 0.1em'}} >FOTOS DE LA EDICION ANTERIOR</p>
                <button className="btn btn-danger" style={{padding: '20px' , fontSize: '18px'}} ><a style={{textDecoration: 'none' , color: 'white'}} target="_blank" href='https://drive.google.com/drive/folders/1gX5HdANtbV4iFxLoSID82R1TLWzlMEb_'>FOTOS</a></button>
            </div>
            <Spotify /> 
            <div className="PosicionIconos" style={{marginTop:'15px' , marginLeft:'140px' , marginBottom: '10px' , overflow:'hidden'}}>
                <div style={{height: '8vh' , width: '50vw'}} className='d-flex justify-content-end align-items-center'>
                    <a href='https://www.instagram.com/malabrigobeer/?hl=es' target="_blank" className="me-2"><i className="fa-brands fa-instagram" style={{color: 'black' , fontSize: '50px'}}></i></a>
                </div>
            </div>
      </div>
    )
}
  
export default App;