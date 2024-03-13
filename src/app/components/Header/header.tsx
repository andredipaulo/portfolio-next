import './header.css'
import Image from 'next/image'

export default function Header(){
    return (
        <div className="container">
            <div className="header" id='header'>
                <div className='header-nome'>
                    <h3>Olá, Eu sou o </h3>
                    
                    <h2>&lt; André <br/> Di Paulo /&gt;</h2>

                    <div className='header-stack'>
                        <h3>Fullstack Developer</h3>
                    </div>

                    <div className='header-experience'>
                        <div className='header-experience-year'>
                            <p className='experience-numbers'>3</p>
                            <p className='experience-text'>Anos de experiencia</p>
                        </div>
                        <div className='header-experience-project'>
                            <p className='experience-numbers'>13</p>
                            <p className='experience-text'>Projetos</p>
                        </div>
                    </div>
                </div>            
                
                <div className='container-image'>
                    <div className='header-image'>
                        <Image 
                            src='/image/andre.jpeg'
                            alt="Logo Profile"
                            width={325}
                            height={325}
                        />
                    </div>
                    
                    <div className='image-react'>
                        <Image 
                            src='/image/react.png'
                            alt="Logo Profile"
                            width={40}
                            height={40}
                        />
                    </div>
                    
                    <div className='image-typescript'>
                        <Image 
                            src='/image/typescript.png'
                            alt="Logo Profile"
                            width={40}
                            height={40}
                        />
                    </div>

                    <div className='image-nodejs'>
                        <Image 
                            src='/image/nodejs-original.png'
                            alt="Logo Profile"
                            width={40}
                            height={40}
                        />                    
                    </div>

                    <div className='image-javascript'>
                        <Image 
                            src='/image/javascript.png'
                            alt="Logo Profile"
                            width={40}
                            height={40}
                        />                    
                    </div>
                    
                </div>


            </div>
        </div>
        
    )
}