import React, { useState, useEffect } from 'react'
import Spotify from './spotify.js'
import dedo from './fotos/dedo.png'

const App = () => {
    const [currTs , setCurrTs] = useState(0);
    const [currDate , setCurrDate] = useState(0);
    const [partyTs , setPartyTs] = useState(0);
    const [partyDate , setPartyDate] = useState(0);
    const [minutos , setMinutos] = useState(0); // divido 60 
    const [segundos , setSegundos] = useState(0); //igual
    const [horas , setHoras] = useState(0); // divido 60 divido 60
    const [dias , setDias] = useState(0); // divido 60 divido 60 divido 24
    const [resta , setResta] = useState(0); // divido 60 divido 60 divido 24
    const calcTiempos = (resta) =>{
        let restoDeDias = (resta % 86400);
        let restoDeHoras = (restoDeDias % 3600);
        let restoDeMinutos = (restoDeHoras % 60);
        setHoras(Math.trunc(restoDeDias / 3600));
        setDias(Math.trunc(resta / 86400));
        setMinutos(Math.trunc(restoDeHoras / 60));
        setSegundos(restoDeMinutos);
    }

    useEffect(() => {
        setInterval(()=>{
            let curr_date = new Date();
            let curr_ts = Math.floor(curr_date.getTime() / 1000);
            let party_date = new Date("2022-09-10 21:00:00");
            let party_ts = Math.floor(party_date.getTime() / 1000);
            let resta = Math.trunc(party_ts - curr_ts);
            console.log(curr_date);
            setCurrDate(curr_date.toLocaleDateString());
            setCurrTs(curr_ts);
            setPartyDate(party_date.toLocaleDateString());
            setPartyTs(party_ts);
            setResta(resta);
            calcTiempos(resta);
        },1000)
    },[])



    return (
        <div  style={{width: '100vw' , overflowX: 'hidden'}} className="fondo d-flex flex-column justify-content-center align-items-center">
            <div className="boxTitulo d-flex justify-content-center align-items-center" ></div>
            <div className="text-center row mt-2 d-flex justify-content-center align-items-center boxTiempo">
                <div className='d-flex justify-content-center align-items-center'>
                  <p className="letra" style={{fontSize:'32.5px' , letterSpacing:'9.5px', textShadow: 'white 0.1em 0.1em 0.1em'}}>PROXIMA FECHA!!!</p>
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
                <p className='text-center letra' style={{fontSize:'30px' , textShadow: 'white 0.1em 0.1em 0.1em'}} >CONSEGUI TU TICKET!</p>
                <p className="text-center movimientoDeMano" style={{fontSize:'40px' , textShadow: 'white 0.1em 0.1em 0.1em'}}><img src={dedo} height="60px" alt="mano" ></img></p>
               <a style={{textDecoration: 'none' , color: 'white'}} target="_blank" rel="noreferrer" href='https://wa.me/+543482586525'> <button className="btn btn-danger" style={{padding: '20px' , fontSize: '18px'}} >TICKET</button></a>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center fotos' >
                <p className='text-center letra' style={{fontSize:'30px'  , textShadow: 'white 0.1em 0.1em 0.1em'}} >COMO LLEGAR?</p>
                <a style={{textDecoration: 'none' , color: 'white'}} target="_blank" rel="noreferrer" href='https://goo.gl/maps/97vpccZ2NyY6BWfQ7'><button className="btn btn-danger" style={{padding: '20px' , fontSize: '18px'}} >PREVIO M.BEER</button></a>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center fotos' >
                <p className='text-center letra' style={{fontSize:'30px'  , textShadow: 'white 0.1em 0.1em 0.1em'}} >FOTOS DE LA ULTIMA EDICION!</p>
                <a style={{textDecoration: 'none' , color: 'white'}} target="_blank" rel="noreferrer" href='https://drive.google.com/drive/folders/1gX5HdANtbV4iFxLoSID82R1TLWzlMEb_'><button className="btn btn-danger" style={{padding: '20px' , fontSize: '18px'}} >FOTOS</button></a>
            </div>
            <Spotify /> 
            <div className='d-flex justify-content-center align-items-center' style={{marginTop:'35px' , marginBottom: '25px' , overflow:'hidden' , height:'15vh' , width:'90vw'}}>
                <a href='https://www.instagram.com/malabrigobeer/?hl=es' target="_blank" rel="noreferrer" className="text-center"><i className="fa-brands fa-instagram" style={{color: 'white' , fontSize: '50px'}}></i></a>
            </div>
            <div className="small">version 1.6</div>
            <div className="small">currDate {currDate}</div>
            <div className="small">currDate type {typeof(currDate)}</div>
            <div className="small">currTs {currTs}</div>
            <div className="small">currTs type {typeof(currTs)}</div>
            <div className="small">partyDate {partyDate}</div>
            <div className="small">partyDate type {typeof(partyDate)}</div>
            <div className="small">partyTs {partyTs}</div>
            <div className="small">partyTs type {typeof(partyTs)}</div>
            <div className="small">resta {resta}</div>
      </div>
    )
}
  
export default App;