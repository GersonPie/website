import {assets} from './../../assets/assets'
import './Hero.css'
import './../../general-style/animation.css'
import { useState, useEffect } from 'react'
import { portuguese } from '../../assets/texts'

const Hero =()=>{
  const dataText= [
    'UI/UX Designer, Front-end Web Developer🚀',
    'Criando experiências Digitais através de código inovador🚀'

  ]
  const [heroText,setHeroText]= useState(dataText[0])
  const [countText, setCountText]= useState(1);


  
  useEffect(()=>{
    if(countText === heroText.length && heroText === dataText[0]){
      setTimeout(()=>{
        setCountText(0);
        setHeroText(dataText[1]);
      }, 2000);
    }
    else{
      setTimeout(()=>setCountText(countText+1), 20)
      
    }
  }, [countText])

    return (
      <>
      <div className='floating-spaceship'>
              <img src={assets.spaceship} className='spaceship' />
              <img src={assets.spaceship} className='spaceship1' />
              <img src={assets.spaceship} className='spaceship2' />
              
            </div>
      <div className='hero'>
        <div className="left-wrapper">
          <div className="img-img-wrapper">

            <div className="img-wrapper">
            <img src={assets.capitalImg} className='img' alt="capitalG" />
            </div>
            
          </div>

            <h1 className="capitalg-text">
                CapitalG
            </h1>

            <h3 className="description-text">
            {portuguese.hero.desc}
            </h3>

        </div>
        
        <div className="right-wrapper">


            <h1 className='desc-text'>{heroText.slice(0,countText)}{countText === heroText.length ? '':<><i class="bi bi-vector-pen"></i></>}</h1>
         

            <div className="buttons">
                <button className='button1'>{portuguese.hero.hire_btn}</button>
                <button className='button2'>{portuguese.hero.projects_btn}</button>
            </div>
            
        </div>  

      </div>
      <div className="hero-social-media">

        <div><i class="bi bi-facebook"></i>{portuguese.hero.sm_facebook}</div>
        <div><i class="bi bi-whatsapp"></i>{portuguese.hero.sm_whatsapp}</div>
        <div><i class="bi bi-instagram"></i>{portuguese.hero.sm_instagram}</div>
      </div>
      </>
    )
  }

export default Hero