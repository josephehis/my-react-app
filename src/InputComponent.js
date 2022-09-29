
import React from 'react';

import DisplayValues from './DisplayValues';


class InputComponent extends React.Component{

    state={
        firstName:'',
        lastName:'',
        studentClass:'',
    }

    handleFirstNameChange=(event)=>this.setState({firstName:event.target.value});
    
    handleLastNameChange=(event)=>this.setState({lastName:event.target.value});

    handleClassChange=(event)=>this.setState({studentClass:event.target.value});

    /// setState

    render(){ 

        const {firstName, lastName, studentClass}= this.state;

        return(
            <div style={{display:'flex', justifyContent:'center', paddingTop:'50px'}}>
                <form style={{width:'50%'}} >
                    <fieldset  style={{display:'flex', flexDirection:'column',alignItems:'center', padding:'20px 0'}}>
                         
                        <legend style={{fontWeight:'bold', fontSize:'20px', background:'grey', padding:'10px', color:'white', border:'solid 1px black'}}>Student's Form::</legend>

                        <div style={{width:'80%'}}>
                            <label style={{fontWeight:'bold'}} >
                                <span style={{width:'20%',display:'inline-block'}}>First Name:</span>
                                <input style={{marginLeft:'10px',height:'30px', width:'55%', paddingLeft:'10px'}} onChange={this.handleFirstNameChange} type='text' placeholder='John' name='firstName' />
                            </label>

                            <DisplayValues studentFirstName={firstName}/>
                        </div><br/><br/>

                        <div style={{width:'80%'}}>
                            <label style={{fontWeight:'bold'}}>
                                <span style={{width:'20%',display:'inline-block'}}>Last Name:</span>
                                <input style={{marginLeft:'10px',height:'30px', width:'55%',paddingLeft:'10px'}} onChange={this.handleLastNameChange} type='text'placeholder='Sharon' name='lastName' />
                            </label>
                            <DisplayValues studentLastName={lastName}/>
                        </div><br/><br/>

                        <div style={{width:'80%'}}>
                            <label style={{fontWeight:'bold'}}>
                                <span style={{width:'20%',display:'inline-block'}}>Class:</span>
                                <input style={{marginLeft:'10px',height:'30px', width:'55%', paddingLeft:'10px'}} onChange={this.handleClassChange} type='text'placeholder='SS2' name='class' />
                            </label>

                            <DisplayValues studentClassName={studentClass}/>
                        </div>
                    
                        <button style={{padding:'10px 15px'}}>Submit</button>

                    </fieldset>
                    
                </form>
            </div>
        )
    }
}

export default InputComponent;