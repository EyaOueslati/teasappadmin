import React from 'react';
import {MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class AddUser extends React.Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    city: '',
    state: '',
    zip: ''
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += ' was-validated';
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div style={{display:'flex', justifyContent:'center'}}>
        <form
          className='needs-validation'
          onSubmit={this.submitHandler}
          noValidate
        >
          
            <MDBCol md='12'>
              <MDBInput
                icon='user'
                value={this.state.fname}
                name='fname'
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterNameEx'
                label='First name'
                outline
                required
              >
                
              </MDBInput>
            </MDBCol>
            <MDBCol md='12'>
              <MDBInput
                icon='address-card'
                value={this.state.lname}
                name='lname'
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterEmailEx2'
                label='Last name'
                outline
                required
              >
                
              </MDBInput>
            </MDBCol>
            <MDBCol md='12'>
              <MDBInput
                icon='envelope-open'
                value={this.state.email}
                onChange={this.changeHandler}
                type='email'
                id='materialFormRegisterConfirmEx3'
                name='email'
                label='Your Email address'
                outline
              >
                
              </MDBInput>
            </MDBCol>
          
          
            <MDBCol md='12'>
              <MDBInput
                icon='city'
                value={this.state.city}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='City'
                outline
                required
              >
              </MDBInput>
            </MDBCol>
            <MDBCol md='12'>
              <MDBInput
                icon='map-marked-alt'
                value={this.state.state}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='state'
                label='State'
                outline
                required
              >
              </MDBInput>
            </MDBCol>
            <MDBCol md='12'>
              <MDBInput
                icon='location-arrow'
                value={this.state.zip}
                onChange={this.changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='zip'
                label='Zip'
                outline
                required
              >
              </MDBInput>
            </MDBCol>
          
          <MDBCol md='4' className='mb-3'>
            
              
            
          </MDBCol>
          <MDBBtn color='primary' type='submit'>
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default AddUser;