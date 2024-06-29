import { useEffect, useState } from 'react';
import { Button } from './button';


export const MainContainer = ()=>{

    const container_data = [

        <div>
            <h1>Ola, Bem vindo ao Portal Capi_TalG</h1>
            <p>Seja um dos primeiros a inaugurar os nossos serviços.</p>
            <br/>
            <h3>Especialidades:</h3>
            <ul>
                <li>Criação de websites do ZERO</li>
                <li>Criação de aplicações com REACTJS</li>
                <li>Back-end development com nodejs, php e python</li>

            </ul>
            <Button class_name='button' text1='Ler mais' text0='Contactar' />
        </div>
        ,
      
        <div id="main-container-content">
            <h2 id="contact" className="dimed">Contacto</h2>
            <p className="contact-text dimed"><strong>Email:</strong> info.gersontamele@gmail.com</p>
            <p className="contact-text dimed"><strong>Celular:</strong> +258 86 78 50 576</p>
            <p className="contact-text dimed"><strong>IG:</strong> @Capi_TalG</p>
            <p className="contact-text dimed"><strong>LinkedIn:</strong> Capi TalG</p>
        </div>
    ,
  
    
        <div id="main-container-content" className='dimed'>
            <h2 className="">Quem é CapitalG</h2>

            <p className="">Um Jovem programador front-end e designer. </p> 
            <br/>
            <h4>Trabalho Em Equipe?</h4>
            <p>Capi faz parte do grupo <a href='#cxinter'>CXINTER</a> como designer e desenvolvedor front-end com varios projectos feitos em equipe.</p>
                <br/><p >Vamos dar uma volta em minha nave e descobrir mais?</p>

            <Button class_name="button" text1='Vamos🚀' text0='Go🚀'/>

        </div>
    ,
  
    <section className='contact-container dimed'>
        <h3>Fale Conosco</h3>
        <input className='input' type='text' name='username'  placeholder='Ex: 123@capi_talg.com'/>
        <textarea className='input textarea' placeholder='Ola, Adorei o seu trabalho e gostaria me ajuda-se na criação de uma loja virtual...'   />
    </section>

    ]

  
/********************* LOGIC ************************/
    const [UI, setUI] = useState(container_data[0]);
    const [count, setCount] = useState(0);
    const [isSliding, setIsSliding]= useState(false);
    const [isFocused, setisFocused]= useState(false)

    const cssAnimation = 'fade-animation';


///////////////////////////////////////////////////////////

    useEffect(()=> {
        //side effect on change the counting
        if(!isFocused) setUI(container_data[count]);

    }, [count]);

//////////////////////////////////////////////////////////
//////////////// [RUN THE TIMER]/////////////////////////
////////////////////////////////////////////////////////

    useEffect(()=>{
       const timer = setInterval(()=>{
        
            //if count is equal to the length of the data array, reset it
            if(!isFocused) count >= container_data.length -1 ? setCount(0) : setCount(count + 1);
            //console.log(count); //debug
            //run_counting();
            }, 15000);

        //clears the timeout    
        return ()=> {
            setIsSliding(true);
            clearInterval(timer);
        }

    }, [count])/*when ever count changes upthere it runs the code again*/

///////////////////////////////////////////////////////

    useEffect(()=>{

        if(!isSliding){}
        else {
            const timer = setTimeout(()=>setIsSliding(false), 1500);
        };

        // return ()=> clearTimeout(timer);
}, [isSliding]);

    return (
      <section id="main-container" onFocus={()=> setisFocused(true)} onBlur={()=> setisFocused(false)} className={isSliding ? cssAnimation : ''}>

            {UI}

      </section>
    )
  }
