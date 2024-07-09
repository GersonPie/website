import { assets } from '../../assets/assets'
import { portuguese } from '../../assets/texts'
import './ShowCase.css'

export const ShowCase = ()=>{
    

    return (
        <div className="showcase">
            
            
            <div className="showcase-box">
                <h2 className='showcase-title'>{portuguese.about_me.title}</h2>
                <p className='showcase-desc'>{portuguese.about_me.desc}</p>
        
            </div>

            <div className="graphic">
                <div className="graphic-values">
                        
                    <div className="graphic-0 graphic-child">20%(Front-end Dev.)</div>

                </div>
                <div className="graphic-values">
                        
                    <div className="graphic-1 graphic-child">10%(DataBase sql/non-sql)</div>

                </div>
                <div className="graphic-values">
                        
                    <div className="graphic-2 graphic-child">60%(Figma / design)</div>

                </div>
                <div className="graphic-values">
                        
                    <div className="graphic-3 graphic-child">10%(Backend with node)</div>

                </div>
            </div>
      
        </div>
    )
}




