import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        console.log('User Email:', userEmail);

        try {
            const response = await fetch("http://localhost:5000/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userEmail })
            });

            const data = await response.json();
            console.log('Fetched Order Data:', data);

            if (data.orderData && data.orderData.order_data) {
                setOrderData(data.orderData.order_data.flat()); // Flattening the nested arrays
            }
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    }

    useEffect(() => {
        fetchMyOrder();
    }, []);

    const latestOrderDate = orderData.length > 0 ? new Date(orderData[0].Order_date).toDateString() : '';

    // Removing duplicate items based on the 'name' property
    const uniqueOrderData = orderData.reduce((acc, current) => {
        const x = acc.find(item => item.name === current.name);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h2 className="mb-4">My Orders</h2>
                {latestOrderDate && <h4>Order Date: {latestOrderDate}</h4>}
                <div className="row">
                    {uniqueOrderData.length > 0 ? 
                        uniqueOrderData.reverse().map((item, index) => (
                            item.name && item.img && item.price && item.qty && item.size && (
                                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                                    <div className="card shadow-sm" style={{ maxHeight: "400px" }}>
                                        <img 
                                            src={item.img} 
                                            className="card-img-top" 
                                            alt={item.name} 
                                            style={{ height: "200px", objectFit: "cover" }} 
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <div className="d-flex justify-content-between">
                                                <span className="badge bg-secondary">{item.qty}</span>
                                                <span className="badge bg-secondary">{item.size}</span>
                                            </div>
                                            <div className="mt-3 d-flex justify-content-between align-items-center">
                                                <h6 className="mb-0">${item.price}/-</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )) : 
                        <div className="col-12">
                            <p className="text-center">No data</p>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}