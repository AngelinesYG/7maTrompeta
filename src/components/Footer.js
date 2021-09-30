import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <h4>Que la Paz y Bendicion de Dios todo Poderoso Este Con Usted</h4>
                <p>Gracias por visitarnos!</p>
                <ul>
                    <li>
                        <p>Escribanos/Llamanos</p>
                        <a href="mailto:iglesiaseptimatrompeta@gmail.com" target="mailto:iglesiaseptimatrompeta@gmail.com" >
                            <i className="far fa-envelope-open"></i>
                        </a>
                        <br/>
                        <br/>
                        <a href="tel:+1-347-824-4863" target="tel:347-824-4863">
                            <i className="fas fa-phone"></i>
                        </a>
                    </li>
                    <li>
                        <p>Visite Nuestra Pagina</p>
                        <a href="https://www.facebook.com/SeptimaTrompeta/" target="https://www.facebook.com/SeptimaTrompeta/">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <p>Subscribete - Pastora Radaiza Oficial</p>
                        <a href="https://www.youtube.com/c/RadaizaAlmonteOficial" target="https://www.youtube.com/c/RadaizaAlmonteOficial">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <p>Subscribete - Pastor Keilan Almonte</p>
                        <a href="https://www.youtube.com/user/keilanalmonte" target="https://www.youtube.com/user/keilanalmonte">
                            <i className="fab fa-youtube-square"></i>
                        </a>
                    </li>
                    <li>
                        <p>Visitanos:</p>
                        <p>1441 Ogden Ave. Bronx, N.Y. 10452</p>
                        <p></p>    
                    </li>
                </ul>
            </div>
        );
    }
}
export default Footer