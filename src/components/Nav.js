import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <nav>
                    <h1 onClick={() => window.location.replace("/#nav-container")}>Septima Trompeta</h1>
                    <ul>
                        <a onClick={() => window.location.replace("/#about-container")}><li>Nuestra Mision</li></a>
                        <a onClick={() => window.location.replace("/#staff-container")}><li>Quienes Somos</li></a>
                        <a onClick={() => window.location.replace("/#events-container")}><li>Eventos</li></a>
                    </ul>
                </nav>
            </div>
        )
     }
}

export default Nav