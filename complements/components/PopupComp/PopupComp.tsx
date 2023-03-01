/*Modulos*/
import React, { useState } from 'react'
/*Componentes*/
import PlayerComp from '../PlayerComp/PlayerComp'
/*Estilos*/
import styles from './PopupComp.module.css'

interface IPopUp{

}

function PopupComp({ MsgConfig, setActMsg }:any) {
    const [PlayerUrl, setPlayerUrl] = useState(null)
    const [ActPlayer, setActPlayer] = useState(false)

    {MsgConfig.setTime !== null && setTimeout(() => setActMsg(false), MsgConfig.setTime)}//Con tiempo => Respeta tiempo definido aun cuando tenga botones

    return (
        <div className={styles.Msg}>
            <h1 className={styles.MainMessage}>{MsgConfig.mainmessage}</h1>
            <span className={styles.CloseMsg} onClick={()=>setActMsg(false)}>X</span>
            <p className={styles.description}>{MsgConfig.description}</p>
            {MsgConfig.LeftAction !== null && MsgConfig.LeftAction}
            {MsgConfig.RightAction !== null && MsgConfig.RightAction}<br/>
            {MsgConfig.tutorial !== null && 
                <a className={styles.tutorial} onClick={() => { setActPlayer(true); setPlayerUrl(MsgConfig.TutorialURL) }}>{MsgConfig.tutorial}</a>}
            {ActPlayer && 
                <PlayerComp
                    Seetings={{
                        Url: `${PlayerUrl}`,
                        Width: '560px',
                        Height: '280px',
                        Left: 'calc(50% - 140px)',
                        Top: 'calc(50% - 140px)',
                        Position: 'fixed',
                        Volume: '1',
                    }}
                    ActPlayer={ActPlayer}
                    setActPlayer={setActPlayer}
                />
            }
        </div>
    )
}
export default React.memo(PopupComp)
//--------------------------------------Message Functions-----------------------------------//
export function ONLY_NOTIF(answerTag:any, setAnswerTag:any, setStateConfirm:any){
    if (answerTag){
        setStateConfirm(null)
        setAnswerTag(null)
    }
}

export function VALIDA_DATOS_CONTACTO(answerTag:any, setAnswerTag:any, setStateConfirm:any){
    if (answerTag){
        setStateConfirm(null)
        setAnswerTag(null)
    }
}

export function VALIDA_PASSWORD(Password:any, ClientID:any, {setValidPasswordSign, setAnswerTag}:any){
    //ENVIAR A MODULO DE AUTENTICACION E IMPORTAR LA FUNCIÓN EN ESTE MODULO CODIFICAR
    if (Password === 'Alain'){
        setValidPasswordSign(true)
        setAnswerTag(null)
    } else {
        setValidPasswordSign(false)
        setAnswerTag(null)
    }
}
