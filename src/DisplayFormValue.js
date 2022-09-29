
import React from 'react';

const DisplayFormValue= ({Name, StudentClass, Age})=>{

    // const {Name, StudentClass, Age}= props
    return(
        <div>
            <div>Name:{Name}</div>
            <div>Class:{StudentClass}</div>
            <div>Age:{Age}</div>
        </div>
    )
}

export default DisplayFormValue;