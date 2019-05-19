import React, { Component } from 'react';




class Order extends Component{
    render(){
        return(
            <div className = "order">
                <div className = "orderNumber">Order #{this.props.key}</div>
                <ul>
                    <li>Pizza Type : {this.props.pizzaType}</li>
                    <li>Pizza Size : {this.props.pizzaSize}</li>
                    <li>Pizza Dough : {this.props.pizzaDough}</li>
                    <li>Name : {this.props.name}</li>
                    <li>Address : {this.props.address}</li>
                    <li>City : {this.props.city}</li>
                    <li>Phone Number : {this.props.phone}</li>
                    <li>Email : {this.props.email}</li>
                </ul>
            </div>
        )
    }

}




export default Order;