import React from "react";
import {useState} from "react";

function ActivityCard({oneActivity}) {
  const { name,image,description,ageRange,outdoor, free } = oneActivity;
  const [ showDetails, setShowDetails ] = useState(true)
  
  const baseLocation = outdoor === true ? 'Outdoor Activity' : 'Indoor Actvity';
  const Fee = free === true ? 'Free Activity' : 'Actvity price will vary'
//   const details = (ageRange,baseLocation)
  
  
  const toggleDetails = ()=>{
    setShowDetails(!showDetails)
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img onClick={toggleDetails}
          src={image}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <div className="card__text">{showDetails ? <p >{description}</p> : <p>{ageRange}<p>{Fee}</p>{baseLocation}</p> }</div>
          <div className="card__detail">
            {/* <p>{baseLocation}</p> */}
          </div>
        </div>
      </div>
    </li>
  );
}



export default ActivityCard;