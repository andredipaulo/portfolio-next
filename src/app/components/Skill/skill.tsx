import "./skill.css"
import Image from "next/image"

export default function Skill(){
    return (        
        <div className="container">
            <div className="skill" id="skill">                
                <h1>skills<span>()</span></h1>

                <div className="skills">                
                    <div className='skill-item'>
                        <Image 
                            src='/image/html5.png'
                            alt="Html5"
                            width={60}
                            height={60}
                        />                    
                    </div> 

                    <div className='skill-item'>
                        <Image 
                            src='/image/css3.png'
                            alt="CSS3"
                            width={60}
                            height={60}
                        />                    
                    </div> 

                    <div className='skill-item'>
                        <Image 
                            src='/image/javascript.png'
                            alt="JavaScript"
                            width={60}
                            height={60}
                        />                    
                    </div>               
                    
                    <div className='skill-item'>
                        <Image 
                            src='/image/nodejs-original.png'
                            alt="Node"
                            width={60}
                            height={60}
                        />                    
                    </div>

                    <div className='skill-item'>
                        <Image 
                            src='/image/react.png'
                            alt="React"
                            width={60}
                            height={60}
                        />
                    </div>
                    
                    <div className='skill-item'>
                        <Image 
                            src='/image/typescript.png'
                            alt="Typescript"
                            width={60}
                            height={60}
                        />
                    </div>                    

                    <div className='skill-item'>
                        <Image 
                            src='/image/nextjs.png'
                            alt="Nextjs"
                            width={60}
                            height={60}
                        />
                    </div>  

                    <div className='skill-item'>
                        <Image 
                            src='/image/php.png'
                            alt="PHP"
                            width={70}
                            height={60}
                        />
                    </div>  

                    <div className='skill-item'>
                        <Image 
                            src='/image/laravel.png'
                            alt="Laravel"
                            width={60}
                            height={60}
                        />
                    </div>  

                    <div className='skill-item'>
                        <Image 
                            src='/image/yii.png'
                            alt="Yii2"
                            width={60}
                            height={60}
                        />
                    </div> 

                    <div className='skill-item'>
                        <Image 
                            src='/image/docker.png'
                            alt="Docker"
                            width={70}
                            height={60}
                            
                        />
                    </div>  

                    <div className='skill-item'>
                        <Image 
                            src='/image/docker-compose.png'
                            alt="Docker Composer"
                            width={60}
                            height={70}
                        />
                    </div> 

                    <div className='skill-item'>
                        <Image 
                            src='/image/firebase.png'
                            alt="Firebase"
                            width={60}
                            height={60}                            
                        />
                    </div>  

                    <div className='skill-item'>
                        <Image 
                            src='/image/mysql.png'
                            alt="MySql"
                            width={60}
                            height={60}                            
                        />
                    </div>  

                    <div className='skill-item'>
                        <Image 
                            src='/image/dbeaver.png'
                            alt="DBeaver"
                            width={60}
                            height={60}
                            style={{ backgroundColor: "white", borderRadius: "50%"}}
                        />
                    </div>  

                    <div className='skill-item'>
                        <Image 
                            src='/image/git.png'
                            alt="Git"
                            width={60}
                            height={60}
                        />
                    </div>  

                    <div className='skill-item'>
                        <Image 
                            src='/image/github.png'
                            alt="Github"
                            width={60}
                            height={60}
                            style={{ backgroundColor: "white", borderRadius: "50%"}}
                        />
                    </div>                      
                    
                </div>                
            </div>            
        </div>           
    )
}