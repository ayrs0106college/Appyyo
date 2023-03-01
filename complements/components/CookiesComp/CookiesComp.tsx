/*---------------------------------------------------------
 ------------- README FUNCTION INSTRUCTIONS: --------------
 Type: Component
 Import statements:
    import CookiesComp from  '@/...path.../Cookiesfunc'
 Import Modules:
    import { getCookie, getCookies, setCookie, deleteCookie } from 'cookies-next';

 Instructions:

    1) Create a state to save and retrieve the user election. It can be locally at the page to be used or as a global user context (Recomended).
    const [UsrCookie,setUsrCookie] = useState(null)

    2) Import component statement and Modules statement in the page to be used as described above. This will show the modal form for the user election.
    import CookiesComp from  '@/...path.../Cookiesfunc'
    import { getCookie, getCookies, setCookie, deleteCookie } from 'cookies-next';

    3) Insert the component as follow: (This will display the Cookies modal form ONLY IF it hasn't been selected before by the user)
    {UsrCookie == null && 
        <CookiesComp 
            setState={setUsrCookie} //Pass the state defined in step 1 to the required parameter "setState"
        />}

    4) Make use of next commands to set, get or delete the cookies:
        setCookie('key','value') // Set the pair key, value cookie
        getCookie('key') // Retrieve the value of a specific cookie 
        getCookies() // Retrieve all cookies set before
        deleteCookie('key'} // Delete the specified cookie

    5) Optional tool: Make use of below code to validate the cookies funcionality (Sample based on Global User Context)
    {UsrCookie !== null &&
        <div>
        <button onClick={()=>{
            setCookie('key','value')
            setLocalCookies(getCookies())
            }}>set cookie 'Key'</button>
        <button onClick={()=>{
            getCookie('key')
            alert(getCookie('key'))
            }}>get cookie 'Key'</button>
        <button onClick={()=>{
            getCookies()
            console.log(Environment.UserContext.UserSeeting.Navigation.CookiesSaved)
            }}>get all cookies</button>
        <button onClick={()=>{
            deleteCookie('key')
            setLocalCookies(getCookies())
        }}>delete cookie 'Key'</button>
        </div>
    }
---------------------------------------------------------*/

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Cookies.module.css'

export default function CookiesComp({setState, Contract}:any){
    const [ViewCookiesContract, setViewCookiesContract] = useState(false)
    return (
        <>
            <div className={styles.CookiePoint}>
                <p className={styles.CookieLegend}>Apply Preferences</p>
                    <div className={styles.Btns}>
                        <div className={styles.cookieBtn} onClick={() => {setState(false), setViewCookiesContract(false)}}>
                            <p className={styles.BtnLegend}>This Session</p>
                        </div>
                        <div className={styles.cookieBtn} onClick={() => {setState(true), setViewCookiesContract(false)}}>
                            <p className={styles.BtnLegend}>This & Next Sessions</p>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/Icons/DayNightIcon.png"
                            alt="Cookies"
                            width={35}
                            height={35}
                        />
                    </div>
                <span className={styles.cookiesnotification} onClick={()=>setViewCookiesContract(!ViewCookiesContract)}>( Read more )</span>
            </div>
            {ViewCookiesContract && 
                <div style={{width:"100%", height:"100%", position:'fixed', zIndex:"100", textAlign:"center", verticalAlign:"middle", padding:'2rem', backgroundColor:'rgb(var(--basecolor),1)', overflow:"auto"}}>
                    <p>{Contract}</p>
                    <button onClick={()=>setViewCookiesContract(!ViewCookiesContract)}>Close</button>
                </div>
            }
        </>
    )
}