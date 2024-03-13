import './navbar.css'

export default function Navbar(){
    return (
        <div className="container-navbar">
            
            <div className="navbar" id='top'>
                <h1>Port<span>fólio</span></h1>
                
                <div className="menu">
                    <a href='#about'>About</a>
                    <a href='#skill'>Skills</a>
                    <a href='#project'>Projects</a>
                </div>           
                
            </div>
        </div>
        
    )
}