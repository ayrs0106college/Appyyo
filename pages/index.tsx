import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import React, { lazy, useState, useEffect, useContext, useRef } from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useTranslations } from 'use-intl'
import PagesHeadComp from '@/complements/components/PagesHeadComp/PagesHeadComp'
import GlobalContext from '@/complements/components/GlobalContextComp/GlobalContextComp'
import HeaderComp from '@/complements/components/HeaderComp/HeaderComp'
import FooterComp from '@/complements/components/FooterComp/FooterComp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <PagesHeadComp
        data={{
            faviconURL: "/Icons/manifest_icons/appyyo.png", //URL of icon to be displayed besides the title tab.
            title: trI('title'), //Title to be displayed in the tab. In case of traslations needs to consider the marker and tag to be traslated, such as this sample.
            description: trI('description'), //Description to be read by SEO for this page
            keywords: trI('keywords'), //Keywords to be read by SEO for this page
        }}
      />
      <main className={styles.main}>
        <HeaderComp 
          logo={'/Icons/manifest_icons/MaskableIcon.png'}
          // menus={[
          //   {
          //     menu: trHeader('menu1'),
          //     link: '/'
          //   },
          //   {
          //     menu: trHeader('menu2'),
          //     link: '/aboutUs'
          //   },
          //   {
          //     menu: trHeader('menu3'),
          //     link: '/innovationLab'
          //   },
          //   {
          //     menu: trHeader('menu4'),
          //     link: '/newestProject'
          //   },
          //   {
          //     menu: trHeader('menu5'),
          //     link: '/professionalServices'
          //   },
          // ]}
          // LangsFlags={[
          //   {
          //     Lng: 'en',
          //     Icon: '/Icons/LangFlags/ENlng.png'
          //   },
          //   {
          //     Lng: 'fr',
          //     Icon: '/Icons/LangFlags/FRlng.png'
          //   },
          // ]}
          signin={trHeader('signin')}
        />
        <div id={styles.MainLinksMenu}>
          <Link id={styles.NewestProject} className={styles.MainLink} href="/newestProject"><span>Newest Project</span></Link>
          <Link id={styles.InnovationLab} className={styles.MainLink} href="/innovationLab"><span>Innovation Lab</span></Link>
          <Link id={styles.ProfessionalServices} className={styles.MainLink} href="/professionalServices"><span>Professional Services</span></Link>
          <Link id={styles.AboutUs} className={styles.MainLink} href="/aboutUs"><span>About Us</span></Link>
          <Link id={styles.DigitalTransformation} className={styles.MainLink} href="/digitalTransformation"><span>Digital Transformation</span></Link>
        </div>
      </main>
        {/*Footer Component*/}
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
