import React from 'react';
import ActionButton from './actionButton';
import rigoImage from "../../img/rigo-baby.jpg";


function Card() {
  return ( 
    <div className="card p-0 text-center" style={{width: '18rem'}}>
      <img src={rigoImage} className="card-img-top" alt={rigoImage}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>        
      </div>
      <div className="card-footer">
        <ActionButton text={"Find Out More!"} action={() => console.log("Action from card")}/>
      </div>
    </div>
   );
}

export default Card;