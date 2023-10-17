import {useState} from "react";

function ActivityCard({oneActivity}) {
  const { name,image,description,ageRange,outside } = oneActivity;
  const [ showDetails, setShowDetails ] = useState(true)
  
  const baseLocation = outside === true ? 'Outdoor Activity' : 'Indoor Actvity';
  const details = (ageRange,price)
  
  
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
          <div className="card__text">{showDetails ? <p >{description}</p> : <p>{details}</p> }</div>
          <div className="card__detail">
            <p>{name}</p>
            <p>
              {
                baseLocation
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}



export default ActivityCard;