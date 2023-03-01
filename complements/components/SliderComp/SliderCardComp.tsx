/*---------------------------------------------------------
 ------------- README FUNCTION INSTRUCTIONS: --------------
Type: Component
Import statement: import SliderCardComp from '@/...path.../SliderCardComp'
interface ISlideGallery{
    ImgSeconds: number,
    classNames?: string,
    styles: string,
    title: string
    shortdesc: string
    url: string
    images: string[]
}

<SliderCardComp 
    ImgSeconds={3} // Seconds for each image previos to be changed for the next one
    classNames={""}
    title={"Gallery 1"}
    shortdesc={"Shrt Desc 1"}
    url={"url1 "}
    images={[ //Array of images
        '/Images/IMG1.png',
        '/Images/IMG2.png',
        '/Images/IMG3.png',
        '/Images/IMG4.png',
        '/Images/IMG5.png',
        '/Images/IMG6.png',
        '/Images/IMG7.png',
        '/Images/IMG8.png',
        '/Images/IMG9.png',
        '/Images/IMG10.png',
        ]}
/>
---------------------------------------------------------*/

/*Modulos*/
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
/*Estilos*/
import styles from './SliderCardComp.module.css'

interface ISlideGallery{
    ImgSeconds: number,
    classNames?: string,
    styles?: any,
    title?: string
    shortdesc?: string
    url?: string
    images: string[]
}

function SliderCardComp(props:ISlideGallery) {
    const [Delay, setDelay] = useState(Math.abs(props.ImgSeconds*1000));
    const Imgs = props.images
    const [Counter, setCounter] = useState(0);
    setTimeout(() => {
        { (Counter >= (Imgs.length - 1)) ? setCounter(0) : setCounter(Counter + 1) }
    }, Delay);

    return (
        <div className={styles.SlidCardContainer}
            onMouseOver={()=>setDelay(100000000)}
            onMouseLeave={()=>setTimeout(()=>{setDelay(props.ImgSeconds*1000)},3500)}
        >
            <div className={props.classNames} >
                <div className={styles.SliderCardLink}
                    style={props.styles}>
                    {props.title && <p className={styles.CardTitle}>{props.title}</p>}
                    {props.url && <a href={`${props.url}`} target="_black" rel="noreferrer noopener" className={styles.CardUrl}>&#128279;</a>}
                    {Imgs.length>1 && 
                        <a className={styles.PrvImgSlideCard}
                        onClick={() => setCounter(Counter === 0 ? Imgs.length - 1 : Counter - 1)}
                        >«</a>}
                        <Image className={styles.SlideImage}
                            style={{animationDuration:`${Imgs.length * props.ImgSeconds}`+'s'}}
                            onClick={() => setCounter(Counter === Imgs.length - 1 ? 0 : Counter + 1)}
                            src={Imgs[Counter]} fill alt="SliderComp"
                        />
                    {Imgs.length>1 &&
                        <a className={styles.NxtImgSlideCard}
                            onClick={() => setCounter(Counter === Imgs.length - 1 ? 0 : Counter + 1)}
                        >»</a>}
                    {props.shortdesc && <p className={styles.CardDescription}>{props.shortdesc}</p>}
                </div>
            </div>
        </div>
    );
}

export default React.memo(SliderCardComp)