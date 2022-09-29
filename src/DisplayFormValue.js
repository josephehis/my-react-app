
import React from 'react';

const DisplayFormValue= ({Name, StudentClass, Age})=>{

    
    return(
        <div>
            <div>Name:{Name}</div>
            <div>Class:{StudentClass}</div>
            <div>Age:{Age}</div>
        </div>
    )
}

export default DisplayFormValue;
