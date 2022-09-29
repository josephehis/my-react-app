
import React from 'react';


class DisplayValues extends React.Component{

// conditional rendering
    render(){

        const {studentFirstName, studentLastName, studentClassName}= this.props;
        
        if (studentFirstName !== undefined)        
            return <div style={{marginTop:'10px'}}><span style={{width:'20%',marginRight:'10px', display:'inline-block'}}>First Name:</span> <span style={{fontWeight:'bold'}}>{studentFirstName}</span></div>;
        else if(studentLastName !== undefined) return <div style={{marginTop:'10px'}}><span style={{width:'20%',marginRight:'10px', display:'inline-block'}}>Last Name:</span> <span style={{fontWeight:'bold'}}>{studentLastName}</span></div>;
        else if(studentClassName !== undefined) return <div style={{marginTop:'10px'}}><span style={{width:'20%',marginRight:'10px', display:'inline-block'}}>Class:</span> <span style={{fontWeight:'bold'}}>{studentClassName} </span></div>;
    }
}



export default DisplayValues;