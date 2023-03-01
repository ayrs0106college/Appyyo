/*---------------------------------------------------------
 ------------- README COMPONENT INSTRUCTIONS: -------------
 Type: Component
 Import statement:
 import { WaitComp, Success, Failed } from '@/...path.../WaitComp'//PopUp de Exito o Falla en Loading

 Add two states:

 const [wait, setWait] = useState(false)//Ventana de Cargando
 const [success, setSuccess] = useState(null)//Ventana de Cargando

 Add at the end of pages where it will be used with next two statements:
 
 {wait && <WaitComp />}
 {success !== null && (success ? <Success /> : <Failed />)}
 
 Control the component through the states.

 setWait(true) ==> Show the wait component
 setWait(false) ==> Hide the wait component
 setWait(null) ==> Hide the wait component

 setSuccess(null) ==> Hide the two alternative components <Success/> and <Failed/> from this components
 setSuccess(true) ==> Show the alternative component <Success/> and Hide the alternative components <Failed/>
 setSuccess(null) ==> Hide the alternative components <Failed/> and Show the alternative component <Success/>
---------------------------------------------------------*/

import React from 'react'
import Image from 'next/image'
import styles from './Wait.module.css'

export function WaitComp() {
    return(
        <div className={styles.Loading}>
            <Image src={"/Icons/NIXINIcon.png"} width={40} height={40} alt="NIXIN" />
            <Image src={"/Icons/LoadingIcon.png"} width={40} height={40} alt="NIXIN" />
        </div>
    )
}
React.memo(WaitComp)

export function Success(){
    return(
        <div className={styles.Success}>
            <Image src={"/Icons/NIXINIcon.png"} width={40} height={40} alt="NIXIN" />
            <Image src={"/Icons/LoadingIcon.png"} width={40} height={40} alt="NIXIN" />
        </div>
    )
}
React.memo(Success)

export function Failed(){
    return(
        <div className={styles.Failed}>
            <Image src={"/Icons/RestIcon.png"} width={40} height={40} alt="NIXIN" />
            <Image src={"/Icons/NIXINIcon.png"} width={40} height={40} alt="NIXIN" />
            <Image src={"/Icons/RetryIcon.png"} width={40} height={40} alt="NIXIN" />
            <Image src={"/Icons/LoadingIcon.png"} width={40} height={40} alt="NIXIN" />
        </div>
    )
}
React.memo(Failed)