import React from 'react';
import {adminImages, albanzImages, jovenesImages, danzaImages, danceImages, evangImages, intercImages, ujiereImages} from "./leadData";

export default function Leaders() {
    return(
        <section id="about-staff-container">
        <h1 id="main-header">Lidereres de Septima Trompeta</h1>
        <h3>Administracion</h3>
        <div className="leaders-picture-div">
            {adminImages.map(leaders =>
                <div className="leaders-card">
                    <img className="leaders-picture" src={leaders.image} alt={leaders.fullName}/>
                    <p className="leaders-name">{leaders.fullName}</p>
                    <p className="leaders-title">{leaders.Title}</p>
                </div>
                )}
        </div>
        <h3>Alabaza y Adoracion</h3>
        <div className="leaders-picture-div">
            {albanzImages.map(leaders =>
                <div className="leaders-card">
                    <img className="leaders-picture" src={leaders.image} alt={leaders.fullName}/>
                    <p className="leaders-name">{leaders.fullName}</p>
                    <p className="leaders-title">{leaders.Title}</p>
                </div>
                )}
        </div>
        <h3>Ministerio de Jovenes</h3>
        <div className="leaders-picture-div">
            {jovenesImages.map(leaders =>
                <div className="leaders-card">
                    <img className="leaders-picture" src={leaders.image} alt={leaders.fullName}/>
                    <p className="leaders-name">{leaders.fullName}</p>
                    <p className="leaders-title">{leaders.Title}</p>
                </div>
                )}
        </div>
        <h3>Ministerio de Danza Juvenil</h3>
        <div className="leaders-picture-div">
            {danzaImages.map(leaders =>
                <div className="leaders-card">
                    <img className="leaders-picture" src={leaders.image} alt={leaders.fullName}/>
                    <p className="leaders-name">{leaders.fullName}</p>
                    <p className="leaders-title">{leaders.Title}</p>
                </div>
                )}
        </div>
        <h3>Ministerio de Danza Infantil</h3>
        <div className="leaders-picture-div">
            {danceImages.map(leaders =>
                <div className="leaders-card">
                    <img className="leaders-picture" src={leaders.image} alt={leaders.fullName}/>
                    <p className="leaders-name">{leaders.fullName}</p>
                    <p className="leaders-title">{leaders.Title}</p>
                </div>
                )}
        </div>
        <h3>Evangelismo</h3>
        <div className="leaders-picture-div">
            {evangImages.map(leaders =>
                <div className="leaders-card">
                    <img className="leaders-picture" src={leaders.image} alt={leaders.fullName}/>
                    <p className="leaders-name">{leaders.fullName}</p>
                    <p className="leaders-title">{leaders.Title}</p>
                </div>
                )}
        </div>
        <h3>Ministerio de Intercesion</h3>
        <div className="leaders-picture-div">
            {intercImages.map(leaders =>
                <div className="leaders-card">
                    <img className="leaders-picture" src={leaders.image} alt={leaders.fullName}/>
                    <p className="leaders-name">{leaders.fullName}</p>
                    <p className="leaders-title">{leaders.Title}</p>
                </div>
                )}
        </div>
        <h3>Ujieres</h3>
        <div className="leaders-picture-div">
            {ujiereImages.map(leaders =>
                <div className="leaders-card">
                    <img className="leaders-picture" src={leaders.image} alt={leaders.fullName}/>
                    <p className="leaders-name">{leaders.fullName}</p>
                    <p className="leaders-title">{leaders.Title}</p>
                </div>
                )}
        </div>
        </section>
    )
}