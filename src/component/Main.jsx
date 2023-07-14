import React from "react";
import LocationLogo from "../images/location.png"

export default function Main(props){
    return(
          <section className="main-section">
              <div className="card">
                <img src={props.imageUrl} className="card-image"/>
                <div className="card-details">
                    <img src={LocationLogo} className="location-img"/>
                    <span className="country-name-span">{props.location}</span>
                    <span className="url-map"><a href={props.googleMapsUrl}>View on google maps</a></span>
                    <h1 className="area-name">{props.title}</h1>
                    <h5 className="date-visit-leave">{props.startDate} - {props.endDate}</h5>
                    <p className="about-travel">{props.description}</p>
                </div>
              </div>
          </section>
           );
}

