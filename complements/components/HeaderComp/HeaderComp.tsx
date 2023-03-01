import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from './HeaderComp.module.css'
import { useTranslations } from 'use-intl'
import GlobalContext from '../GlobalContextComp/GlobalContextComp'

interface IFlagLang{
    Lng: string,
    Icon: string,
}

interface IMenus{
    menu: string,
    link?: string,
}

interface IHeadersMenu{
    logo?: any,
    menus?: IMenus[],
    LangsFlags?: IFlagLang[],
    signin?: string,
}  

export default function HeaderComp(props:IHeadersMenu){
    const { Environment,UsrCookie,setUsrCookie,Locale,setLocale,Language,setLanguage,}: any = useContext(GlobalContext)
    const trHead = useTranslations('Header')
    const { locale, locales, push } = useRouter()

    function ReturnLang(Language:string){
        push('/', undefined, {locale:Language}),
        setLocale(Language)
    }

    return (
        <>
            <div className={styles.Header}>
                {props.logo && 
                        <Link href="/">
                            <div className={styles.HeaderLogo}>
                                <Image src={props.logo} width={70} height={70} alt="appy.yo logo"/>
                            </div>
                        </Link>
                }
                <div>
                    <div className={styles.MenusContainer}>
                        {props.menus?.map((menu:any, i:any)=>{
                                return(
                                    <a href={menu.link} className={styles.MenuButton} key={i}>{menu.menu}</a>
                                )
                            })
                        }
                    </div>
                </div>
                {props.LangsFlags && 
                    <div className={styles.FlagLangsContainer}>
                        {props.LangsFlags.map((Lng:any, i:any)=>
                            <div key={i} className={styles.HeaderFlagsLngs}>
                                <Image onClick={()=>ReturnLang(Lng.Lng)} src={Lng.Icon} width={21} height={21} alt="Language Flag"/>
                            </div>
                        )}
                    </div>
                }
                {props.signin && 
                    <button className={styles.SignInButton}>{props.signin}</button>
                }
            </div>
        </>
    )
}