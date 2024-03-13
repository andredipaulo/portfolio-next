import './about.css'

export default function About(){
    return (
        <div className="container">      

            <div className='about' id='about'>                
                <div className='about-me'>
                    <h1>about<span>()</span></h1>
                    <p> 
                        Meu primeiro contato com a Tecnologia da Informação ocorreu através da manutenção de computadores, 
                        um ponto inicial que despertou meu interesse pela área. 
                        Logo em seguida, mergulhei nos estudos de lógica de programação e na linguagem Delphi. 
                    </p>                        
                    <p>
                        Em 2001, recebi uma oportunidade como desenvolvedor, onde durante 4 anos acumulei conhecimento e experiência significativos.
                        Em 2005, assumi a gestão de Tecnologia da Informação, aplicando meus conhecimentos em infraestrutura, 
                        redes e servidores Windows/Linux, além de fornecer suporte especializado a usuários.
                        Minha jornada acadêmica iniciou em 2011, quando ingressei no curso de Tecnologia da Informação. 
                    </p>                            
                    <p>
                        Em 2014, graduei-me, complementando minha experiência prática com uma base teórica sólida.
                        Em 2020, decidi consolidar minha trajetória no mercado de desenvolvimento de sistemas voltados para a internet. 
                        Investi em cursos específicos para essa área, aprimorando-me como desenvolvedor PHP e utilizando frameworks como Laravel e Yii. 
                    </p>                            
                    <p>
                        Meu domínio se estende aos bancos de dados MySQL, MariaDB, Firebird, entre outros. 
                        Além disso, tenho experiência sólida em tecnologias front-end como HTML/CSS/JAVASCRIPT/TYPESCRIPT, 
                        com familiaridade em frameworks como REACT/NEXT.
                        Meu conhecimento em versionamento e metodologias ágeis, como Git/Github/Bitbucket e práticas como Scrum/Kanban, 
                        complementam meu perfil, permitindo uma abordagem colaborativa e eficiente nos projetos em que estou envolvido.                      
                    </p>
                </div>                                                
            </div>

            <div className="card">
                <div className="textBox">
                    <div className="textContent">
                        <p className="h1">Fullstack Developer</p>                                                        
                    </div>                    
                    <div className='textProject'>
                        <p className="h2">Projetos</p>                   
                    </div>
                    <p className="p">&lt; / &gt;</p>                    
                </div>
            </div>

            <div className="card">
                <div className="textBox">
                    <div className="textContent">
                        <p className="h1">Back-end Developer</p>                                                        
                    </div>                    
                    <div className='textProject'>
                        <p className="h2">Projetos</p>                   
                    </div>
                    <p className="p">&#123; &#125;</p>                                       
                </div>
            </div>

            <div className="card">
                <div className="textBox">
                    <div className="textContent">
                        <p className="h1">Front-end Developer</p>                                                        
                    </div>                    
                    <div className='textProject'>
                        <p className="h2">Projetos</p>                   
                    </div>
                    <p className="p"> export &#123; &#125;</p>                                       
                </div>
            </div>
        </div>
    )
}