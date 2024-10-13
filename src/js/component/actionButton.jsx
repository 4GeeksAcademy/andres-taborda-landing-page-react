import React from 'react';


function ActionButton({ text, action}) {
  return ( 
    <button className="btn btn-primary btn-lg" type="button" onClick={() => action()}>{text}</button>
   );
}

export default ActionButton;