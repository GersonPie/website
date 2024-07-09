import { assets } from '../../assets/assets'
import './Tech.css'

export const Tech = ()=>{
    

    return (
        <div className="tech" id='projectos'>
            <h2>Tecnologias</h2><br />
            <div className="tech-box">
                
                <ul className='tech-groups'>
                    <li className='tech-groups-child'>
                        <h3>Design</h3>
                        <div className="tech-design-text-wrapper">
                            <ul>
                                <li>UI Design</li>
                                <li>UX Design</li>
                                <li>Websites</li>
                                <li>Apps</li>
                                <li>Logos</li>
                                <li>Design Gráfico Geral</li>
                            </ul>
                        </div>
                    </li>

                    <li className='tech-groups-child'>
                        <h3>Desenvolvedor Front-end</h3>
                        <div className="tech-front-text-wrapper">
                            <ul>
                                <li>HTML</li>
                                <li>Javascript</li>
                                <li>Websites</li>
                                <li>Apps</li>
                                <li>Logos</li>
                                <li>Design Gráfico Geral</li>
                            </ul>
                        </div>
                    </li>

                    <li className='tech-groups-child'>
                        <h3>Mentor</h3>
                        <div className="tech-mentor-text-wrapper">
                            <ul>
                                <li>UI Design</li>
                                <li>UX Design</li>
                                <li>Design de Websites</li>
                                <li>Desenvolvimento web</li>
                                
                            </ul>
                        </div>
                    </li>
                </ul>

            </div>
            <br />
        </div>
    )
}