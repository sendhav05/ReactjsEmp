
import React from 'react';
import '../css/LoginFormStyle.css'


class loginForm extends React.Component {
    
    constructor(props) {
      super(props)
      this.state = {
          firstName: '',
          lastname: '',
          email: '',
          dob: '',
          company: '',
          experience: '',
          gender: '',
      };
      this.updateState = this.updateState.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }
   
    updateState(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
     });
    }

    submitForm() {
      alert('Successfully Submitted Form');
    }

   render() {
      return (
         <div className='container'>
          <div className='body'>
            <div>
              <h1 className='headerText'>Employee Form</h1>
              <p className='subTitle'>Please fill the employee details:</p>
            </div>  
            <div className='empForm'>
              <input 
               className='inputFirstname'
               name='firstName'
               type = "text"
               placeholder = {'First Name'}
               onChange={this.updateState}
               value = {this.state.firstName} 
              />
              <input 
               className='inputFirstname'
               name='lastname'
               type = "text"
               value = {this.state.lastname} 
               onChange = {this.updateState}
               placeholder = {'Last Name'}
              />
              <input 
               className='inputFirstname'
               type = "text"
               value = {this.state.email} 
               onChange = {this.updateState}
               placeholder = {'Email-Address'}
              />
              <input 
               className='inputFirstname'
               type = "text"
               value = {this.state.dob} 
               onChange = {this.updateState}
               placeholder = {'DOB'}
              />
              <input 
               className='inputFirstname'
               type = "text"
               value = {this.state.company} 
               onChange = {this.updateState}
               placeholder = {'Company'}
              />
              <input 
               className='inputFirstname'
               type = "text"
               value = {this.state.experience} 
               onChange = {this.updateState}
               placeholder = {'Experience'}
              />
              <input 
               className='inputFirstname'
               type = "text"
               value = {this.state.gender} 
               onChange = {this.updateState}
               placeholder = {'Gender'}
              />
              <button
               className='buttonSubmit'
               onClick = {() => this.submitForm()}
              >Submit</button>
            </div>
          </div>
         </div>
      );
   }
}

export default loginForm;