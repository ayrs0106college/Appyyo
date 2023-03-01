
import React, {useState} from 'react'
import Image from 'next/image'
/*Modulos*/
import ReactPlayer from 'react-player/lazy'
/*Estilos*/
import styles from './PlayerComp.module.css'

function PlayerComp({Seetings, ActPlayer, setActPlayer}:any) {

    const [myCornerX, setMyCornerX] = useState(Seetings.Left)
    const [myCornerY, setMyCornerY] = useState(Seetings.Top)
    const [myWidth, setMyWidth] = useState(Seetings.width)
    const [myHeight, setMyHeight] = useState(Seetings.height)
    const [myCorners, setMyCorners] = useState(true)

    function Corners(id:string){
        switch (id) {
            case 'TopLeft':
                setMyCornerX('0px')
                setMyCornerY('0px')
                break;
            case 'TopRight':
                setMyCornerX('calc(100% - 280px)')
                setMyCornerY('0px')
                break;
            case 'BotttomLeft':
                setMyCornerX('0px')
                setMyCornerY('calc(100% - 240px)')
                break;
            case 'BotttomRight':
                setMyCornerX('calc(100% - 280px)')
                setMyCornerY('calc(100% - 240px)')
                break;
            case 'Maximize':
                setMyCornerX('0px')
                setMyCornerY('0px')
                setMyWidth('100%')
                setMyHeight('100%')
                setMyCorners(false)
                break;
            case 'Minimize':
                setMyWidth('140px')
                setMyHeight('70px')
                setMyCorners(true)
                break;
            case 'Default':
                setMyCornerX(Seetings.Left)
                setMyCornerY(Seetings.Top)
                setMyWidth(Seetings.width)
                setMyHeight(Seetings.height)
                setMyCorners(true)
                break;
        }
    }

    return (
        <>
            {ActPlayer &&
                <div className={myCorners ? styles.PlayerScreen : `${styles.PlayerScreen} ${styles.PlayerScreenMaximized}`} id={styles.PlayerScreen}
                    style={{
                        width: myWidth,
                        height: myHeight,
                        left: myCornerX,
                        top: myCornerY,
                        position: Seetings.Position,
                    }}>
                    {myCorners && <span className={styles.Corner} id={styles.TopLeft} onClick={()=>Corners('TopLeft')}>«</span>}
                    {myCorners && <span className={styles.Corner} id={styles.TopRight} onClick={()=>Corners('TopRight')}>»</span>}
                    <ReactPlayer className={styles.Screen}
                        url={Seetings.Url}
                        volume={parseInt(Seetings.Volume)}
                        width= '93%'
                        height= '100%'
                        controls
                        playing
                    />
                    {myCorners && <span className={styles.Corner} id={styles.BotttomLeft} onClick={()=>Corners('BotttomLeft')}>«</span>}
                    {myCorners && <span className={styles.Corner} id={styles.BotttomRight} onClick={()=>Corners('BotttomRight')}>»</span>}
                    <a className={styles.Default} id={styles.Default} onClick={()=>Corners('Default')}>
                        <Image src="/Icons/DefaultIcon.png" fill alt="AYRSWebApp"/>
                    </a>
                    <a className={styles.ClosePlayer} onClick={() => setActPlayer(false)}>
                        <Image src="/Icons/ClosePlayerIcon.png" fill alt="AYRSWebApp"/>
                    </a>
                    {myCorners && <a className={styles.Maximize} id={styles.Maximize} onClick={()=>Corners('Maximize')}>
                        <Image src="/Icons/MaximizeIcon.png" fill alt="AYRSWebApp"/>
                    </a>}
                    {myCorners && <a className={styles.Minimize} id={styles.Minimize} onClick={()=>Corners('Minimize')}>
                        <Image src="/Icons/MinimizeIcon.png" fill alt="AYRSWebApp"/>
                    </a>}
                </div>
            }
        </>
    )
  }
  export default React.memo(PlayerComp)