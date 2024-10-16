import React from 'react';
import ActionButton from './actionButton';
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";


function Card({firsName ="Your name here" , email = "Your email here", image = rigoImage}) {
  return ( 
    <div className="card p-0 text-center" style={{width: '18rem'}}>
      <img src={image} className="card-img-top" alt={rigoImage}/>
      <div className="card-body">
        <h5 className="card-title">{firsName}</h5>
        <p className="card-text">{email}</p>        
      </div>
      <div className="card-footer">
        <ActionButton text={"Find Out More!"} action={() => console.log("Action from card")}/>
      </div>
    </div>
   );
}

Card.propTypes = {
  firsName: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string
}



export default Card;

