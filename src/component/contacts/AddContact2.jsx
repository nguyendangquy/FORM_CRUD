import React, { Component } from 'react'

export default class AddContact2 extends Component {
   
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    
   onSubmit = (e) => {
       e.prevenDefault();
       console.log(this.state);
       //khai bao object get value user
       const contacts = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
       }
       console.log('contact', contacts);
   } 
   static defaultProps = {
       name : 'quy depzai',
       email :'dangquy2k@gmail.com',
       phone : '09898555'
   }

   render() {
        const { name,email,phone} = this.props;
        return (
            <div className="card mb-3">
               <div className="card-header">Add Contact</div>
               <div className="card-body">
                   <form onSubmit= {this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter name" defaultValue={name} ref={this.nameInput} >
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" className="form-control form-control-lg" placeholder="Enter email" defaultValue={email} ref={this.emailInput}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter phone" defaultValue={phone} ref={this.phoneInput}>
                            </input>
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-dark btn-block"></input>
                   </form>
               </div>
            </div>
        )
    }
}
