import React from 'react';
import ActionButton from './actionButton';


function Jumbotron() {
  return ( 
    <div className="p-5 mb-4 jumbotron rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-1  fw-normal">A Warm Welcome!</h1>
        <p className="fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo vel id nulla, obcaecati aperiam ipsam a excepturi fuga officiis optio dolores ipsa libero repellendus porro dolorum pariatur consectetur illum ducimus.</p>
        <ActionButton text={"Call to action!"} action={() => console.log("Action from JumbComponent")}/>
      </div>
    </div>
   );
}

export default Jumbotron;