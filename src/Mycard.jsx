import React from 'react';


const Mycard=(props)=> {
    return (
                    
                    <div className="col-md-4 m-5 shadow mx-auto mx-2">        
                        <div class="card" >
                         <img src={props.imgsrc} className="img-fluid"alt="not found"/>
                        <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}.</p>
                        <a href="#" class="btn btn-primary">{props.btname}</a>
                    </div>
                    </div>
                   </div> 
                    
            
        
    )
}

export default Mycard;
