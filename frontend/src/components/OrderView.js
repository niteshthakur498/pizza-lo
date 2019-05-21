import React from 'react';



let OrderView = (props) => {
    return(
        <div className="orderContainer" key ={props.key}>
            <div className="orderNo">Order #{props.key + 1}</div>
            <div className ="orderValues">
                <div className="orderValue"><span className = "valueTitle">Order ID:  </span><span>{props.order._id}</span></div>
                <div className="orderValue"><span className = "valueTitle">Name:  </span><span>{props.order.name}</span></div>
                <div className="orderValue"><span className = "valueTitle">Email:  </span><span>{props.order.email}</span></div>
                <div className="orderValue"><span className = "valueTitle">Address:  </span><span>{props.order.address}</span></div>
                <div className="orderValue"><span className = "valueTitle">City:  </span><span>{props.order.city}</span></div>
                <div className="orderValue"><span className = "valueTitle">Phone Number:  </span><span>{props.order.phone}</span></div>
                <div className="orderValue"><span className = "valueTitle">Type:  </span><span>{props.order.pizzaType}</span></div>
                <div className="orderValue"><span className = "valueTitle">Size:  </span><span>{props.order.pizzaSize}</span></div>
                <div className="orderValue"><span className = "valueTitle">Dough:  </span><span>{props.order.pizzaDough}</span></div>
                <div className="status">

                </div>
            </div>
        </div>
    )
}




export default OrderView;





