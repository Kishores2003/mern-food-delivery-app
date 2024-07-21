import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

const Card = (props) => {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('');
    const finalPrice = qty * parseInt(options[size]);

    const handleAddToCart = async () => {
        let existingFood = data.find((item) => item.id === props.foodItem._id && item.size === size);

        if (existingFood) {
            await dispatch({ type: 'UPDATE', id: props.foodItem._id, price: finalPrice, qty: qty, size: size });
        } else {
            await dispatch({
                type: 'ADD',
                id: props.foodItem._id,
                name: props.foodItem.name,
                price: finalPrice,
                qty: qty,
                size: size,
                img: props.foodItem.img,
            });
        }
    };

    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px', borderRadius: '10px', boxShadow: '0 6px 10px black' }}>
                    <img
                        src={props.foodItem.img}
                        className="card-img-top"
                        alt="..."
                        style={{ height: '120px', objectFit: 'fill' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>

                        <div className="container w-100">
                            <select className="m-2 h-100" style={{ backgroundColor: 'whitesmoke', color: 'black', borderRadius: '5px', padding:"5px" }} onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return <option key={i + 1} value={i + 1}>{i + 1}</option>;
                                })}
                            </select>
                            <select
                                className="m-2 h-100"
                                style={{backgroundColor: 'whitesmoke', color: 'black', borderRadius: '5px', padding:"5px"}}
                                ref={priceRef}
                                onChange={(e) => setSize(e.target.value)}
                            >
                                {priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>;
                                })}
                            </select>
                            <div className="d-inline h-100 fs-5">${finalPrice}/-</div>
                        </div>
                        <hr />
                        <button 
    className="btn" 
    style={{ backgroundColor: 'green', color: 'white', padding:"5px", width:"250px", transition: 'background-color 0.3s'}}
    onClick={handleAddToCart}
    onMouseEnter={(e) => { e.target.style.backgroundColor = 'Lightgreen'; e.target.style.color = 'black'; }}
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'green'; e.target.style.color = 'white'; }}
>
    Add to Cart
</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
