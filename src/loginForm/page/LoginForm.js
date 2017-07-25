
import React from 'react';
import '../css/LoginFormStyle.css'

class loginForm extends React.Component {
   render() {
      return (
         <div className='container'>
          <div className='body'>
            <div>
              <h1 className='headerText'>Employee Form</h1>
              <p className='subTitle'>Please fill the employee details:</p>
            </div>  
            <div className='empForm'>
              <h1 className='headerText'>Employee Form</h1>
              <p className='subTitle'>Please fill the employee details:</p>
            </div>
          </div>
         </div>
      );
   }
}

export default loginForm;