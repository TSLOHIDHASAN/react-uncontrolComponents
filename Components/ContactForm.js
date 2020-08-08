import React, { Component } from "react";

class ContactForm extends Component {
  addSaveData=(event)=>{
      event.preventDefault();
      console.log('save data')
      const name=this.refs.name.value;
      const email=this.refs.email.value;
      const mobile=this.refs.mobileno.value;
      const picture=this.refs.picture.value;
      const p1={name,email,mobile,picture};
      console.log(p1);
      this.refs.name.value='';
      this.refs.email.value='';
      this.refs.mobileno.value='';
      this.refs.picture.value='';
     
    }
  render() {
    
    return (
      <div>
        <h3>Add a contact form</h3>
        <form className="form" onSubmit={this.addSaveData}>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-2">
              Name
            </label>
            <div className="col-md-4">
              <input  ref="name"
              type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-2">E-mail</label>
            <div className="col-md-4">
            <input ref="email" 
            type="text" className="form-control"/>
            </div>
            </div>
          <div className="form-group row">
          <label htmlFor="" className="control-label col-md-2">Mobile No</label>
          <div className="col-md-4">
          <input 
          ref="mobileno"
          type="text" className="form-control"/>
          </div>
          </div>
          <div className="form-group row">
          <label htmlFor="" className="control-label col-md-2">
          Picture</label>
           <div className="col-md-4">
           <input ref="picture"
            type="text" className="form-control"/>
           </div>
          </div>
          <button className="btn btn-primary">Save data</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
