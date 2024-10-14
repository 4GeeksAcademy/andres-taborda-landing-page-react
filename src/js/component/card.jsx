import React from 'react';
import ActionButton from './actionButton';
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";


function Card({title, description, image}) {
  return ( 
    <div className="card p-0 text-center" style={{width: '18rem'}}>
      <img src={image} className="card-img-top" alt={rigoImage}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>        
      </div>
      <div className="card-footer">
        <ActionButton text={"Find Out More!"} action={() => console.log("Action from card")}/>
      </div>
    </div>
   );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

Card.defaultProps = {
  title: "Your title here",
  description: "Your description here",
  image: rigoImage
}

export default Card;

