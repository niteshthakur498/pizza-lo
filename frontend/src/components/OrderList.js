import React, { Component } from 'react';
import OrderView from './OrderView';


class OrderList extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
        this.list = [];
        this.handleFetch = this.handleFetch.bind(this)
    }

    componentDidMount(){
        this.handleFetch(); 
    }
    handleFetch(){
        fetch('http://127.0.0.1:5000/orders')
            .then(res => res.json())
            .then(response => {
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
        console.log("All")
    }
    handleCompleted(){
        this.setState({
            data: this.list.filter(elem => {
                return elem.completed;
           })
        })
        console.log("Completed")
    }
    handleProgress(){
        this.setState({
            data: this.list.filter(elem => {
                    return !elem.completed;
                })
        })
        console.log("Progress")
    }
    handleDelete(completedID){
        let data = {
            id: completedID
        }
        fetch('http://127.0.0.1:5000/orders/delete',{
                method : 'DELETE',
                body: JSON.stringify(data),
                headers:{
                'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then(res => {
                if(res.status >= 400){
                    console.log('Failure')
                }
                res.json();
            })
            .then(response => {
                console.log(response)
                this.handleFetch();
            })
            .catch(err=>{
                console.log(err)
            })
    }
    handleStatus(){
        
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
                                <OrderView order = {order}  key = {key} index = {key} handleDelete = {this.handleDelete.bind(this)} handleStatus = {this.handleStatus.bind(this)}/>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

}




export default OrderList;