import React, { useContext } from "react";
import { useRouter } from "next/router";
import UserContext from "@/complements/components/GlobalContextComp/UserContext";
import GlobalContext from "@/complements/components/GlobalContextComp/GlobalContextComp";
import Image from "next/image";
import Head from "next/head";
import { useTranslations } from "use-intl";
import HeaderComp from "@/complements/components/HeaderComp/HeaderComp";
import PagesHeadComp from "@/complements/components/PagesHeadComp/PagesHeadComp";
import FooterComp from "@/complements/components/FooterComp/FooterComp";
import styles from '@/styles/project.module.css'

export default function newestProject(){
  //------ User global context ------
  const { Environment,UsrCookie,setUsrCookie,Locale,setLocale,Language,setLanguage,}: any = useContext(GlobalContext)

  //------ Traslations component ------
  const { locale, locales, push } = useRouter()
  const trG = useTranslations('General') //Json file Tag for General pages
  const trI = useTranslations('Index') //Json file Tag for Index page
  const trHeader = useTranslations('Header') //Json file Tag for Header
  {/*Locale and respective translations*/}
  function defineLocale(lng:string){ //Complement the current route with the locale selected by user
    push('/', undefined, {locale:lng}),
    setLocale(lng)
  }
  function HandleSignIn(e:any){
    console.log(e)
  }


    return (
        <>
            <Head>
                <title>Newest Project</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <HeaderComp 
                logo={'/Icons/manifest_icons/MaskableIcon.png'}
                menus={[
                    {
                    menu: trHeader('menu1'),
                    link: '/'
                    },
                    // {
                    // menu: trHeader('menu2'),
                    // link: '/aboutUs'
                    // },
                    // {
                    // menu: trHeader('menu3'),
                    // link: '/innovationLab'
                    // },
                    {
                    menu: trHeader('menu4'),
                    link: '/newestProject'
                    },
                    // {
                    // menu: trHeader('menu5'),
                    // link: '/professionalServices'
                    // },
                    // {
                    // menu: trHeader('menu6'),
                    // link: '/digitalTransformation'
                    // },
                    {
                    menu: trHeader('menu7'),
                    link: '/getInTouch'
                    },
                ]}
                // LangsFlags={[
                //     {
                //     Lng: 'en',
                //     Icon: '/Icons/LangFlags/ENlng.png'
                //     },
                //     {
                //     Lng: 'fr',
                //     Icon: '/Icons/LangFlags/FRlng.png'
                //     },
                // ]}
                signin={trHeader('signin')}
                onClick={(e:any)=>HandleSignIn(e)}     
            />

            <main className={styles.main}>
                <h1>Poste</h1>
                <p className={styles.ServicesText}>
                    ...............................TEXT...............................
                    ...............................TEXT...............................
                    ...............................TEXT...............................
                    ...............................TEXT...............................
                    ...............................TEXT...............................
                </p>
                <span className={styles.Image}>
                    <Image className={styles.Img} src="/Images/project.jpeg" fill alt="Innovation_Lab"/>
                </span>
            </main>

            <FooterComp 
                // author= {'Alain R., Prafulla, Kader.'}
                copyright= {'Appy.yo'}
                // date= {'Feb 26, 2023'}
                // version= {'1.0.0'}
                // styles={{backgroundColor:'rgba(10,10,10,0.7)'}}
                classNames={''}
                langs={{
                developed: trG('developed'),
                copyright: trG('copyright'),
                made: trG('made'),
                version: trG('version'),
                }}
            />
        </>
    )
}