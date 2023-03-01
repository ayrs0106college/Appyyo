/*Modulos*/
import React from 'react'
import Head from 'next/head'

/*---------------------------------------------------------
 ------------- README COMPONENT INSTRUCTIONS: -------------
 The component has to be impoted as:
 import PagesHead from 'this component path'
 and implemented as an html element with the tag 
      <PagesHeadComp
        data={{
            faviconURL: "/Icons/manifest_icons/appyyo.png", //URL of icon to be displayed besides the title tab.
            title: trI('title'), //Title to be displayed in the tab. In case of traslations needs to consider the marker and tag to be traslated, such as this sample.
            description: trI('description'), //Description to be read by SEO for this page
            keywords: trI('keywords'), //Keywords to be read by SEO for this page
        }}
      />
---------------------------------------------------------*/

function PagesHeadComp(props: any) {    
    return( //Component with the specific metatags appñicable to every page to be displayed in order to optimize the title, icon, description, and keywords for the SEO in the desired language
        <>
            <Head>
                <title>{props.data.title}</title>
                <link rel="icon" href={props.data.faviconURL} />
                <meta name="title" content={props.data.title} />
                <meta name="description" content={props.data.description} />
                <meta name="keywords" content={props.data.keywords}/>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover'/>
            </Head>
        </>
    );
}
export default React.memo(PagesHeadComp)