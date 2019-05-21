import React, { Component } from 'react';
import OrderView from './OrderView';


class OrderList extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
        this.list = [];
    }

    componentDidMount(){
        fetch('http://127.0.0.1:5000/orders')
            .then(res => res.json())
            .then(response => {
                console.log(response);
                // this.setState({
                //     data: response
                // })
                console.log(response)
                this.list = response;
                this.setState({
                    data: this.list
                })

            })
            .catch(err => {
                console.log(err);
            });
    }

    handleAll(){
        this.setState({
            data: this.list
        })
    }
    handleCompleted(){
        this.setState({
            data: this.list.filter(elem => {
                return elem.completed;
           })
        })
        console.log(this.list)
    }
    handleProgress(){
        this.setState({
            data: this.list.filter(elem => {
                    return !elem.completed;
                })
        })
    }
    render(){
        return(
            <div className = "orderContent">
                <div className ="container">
                    <div className ="ordersContainer">
                        <div className="orderTitle">Orders</div>
                        <div className = "sort">
                            <div onClick = {this.handleAll.bind(this)}>ALL</div>
                            <div className="filter">
                                <div onClick = {this.handleCompleted.bind(this)}>Completed</div>
                                <div onClick = {this.handleProgress.bind(this)}>In Progress</div>
                            </div>
                        </div>
                        {
                            this.state.data.map((order,key) => 
                                <OrderView order = {order} key = {key}/>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

}




export default OrderList;