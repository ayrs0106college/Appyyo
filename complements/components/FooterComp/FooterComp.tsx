/*---------------------------------------------------------
 ------------- README COMPONENT INSTRUCTIONS: -------------
 Type: Component
 Import statement: import Footer from '@/...path.../FooterComp'
 interface IFooter{
    author: string,
    copyright: string,
    date: string,
    version: string,
    styles?:{{}} // Optional inline styles
    classNames?: string // Optional multiple clases but the styling need to be in the global styles
 }
 
 <Footer 
    author= {'Alain Y. Rivera S.'}
    copyright= {'Personal Portfolio'}
    date= {'Feb 3, 2023'}
    version= {'1.0.0'}
    className= {'AppFooter'}
    styles?:{{}}
    classNames?: string
 />
---------------------------------------------------------*/

import React, { useContext } from 'react'
import styles from './FooterComp.module.css'
import { useTranslations } from 'use-intl'

//Imported complements from other components
import ShareComp from '@/complements/components/ShareComp/ShareComp'

interface ILangsFooter{
    developed?: string,
    copyright?: string,
    made?: string,
    version?: string,
}

interface IFooter{
    author?: string,
    copyright?: string,
    date?: string,
    version?: string,
    styles?: {},
    classNames?: string
    langs?: ILangsFooter
}

function Footer(props:IFooter){
    const trG = useTranslations('General')

    return (
        <>
            <div id={styles.AppFooter} className={props.classNames} style={props.styles}>
                {props.author && ((props.langs?.developed ? props.langs.developed : 'Developed by') + ': ' + props.author + '.')}
                {props.copyright && (' ' + (props.langs?.copyright ? props.langs.copyright : 'copyright') +': ' + props.copyright + '.') }
                {props.date && (' ' + (props.langs?.made ? props.langs.made : 'made') +': ' + props.date + '.')}
                {props.version && (' ' + (props.langs?.version ? props.langs.version : 'version') +': ' + props.version + '.')}
                    <a href="mailto:info@appyyo.com?subject = Feedback&body = Message">info@appyyo.com</a>
                <div>
                    <ShareComp 
                        styles={{margin:"3.5px"}}
                        IconSize={28}
                        facebook={{
                            url:'"https://on.natgeo.com/2zHaNup"'
                        }}
                        linkedin={{
                            url:'"https://on.natgeo.com/2zHaNup"'
                        }}
                        whatsapp={{
                            title:'Hola',
                            url:'"https://on.natgeo.com/2zHaNup"'
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default React.memo(Footer)