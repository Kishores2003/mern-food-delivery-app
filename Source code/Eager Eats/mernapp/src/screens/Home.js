import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const [search, setSearch] = useState("");

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/foodData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            
            setFoodItems(response.food_items);
            setFoodCategory(response.foodCategory);
            console.log(response);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div style={{ margin:"10px" ,border: "2px solid black" , boxShadow:"0 5px 10px black" }}>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value) }}
                                />
                                <button 
                                    className="btn btn-outline-success" 
                                    type="button" 
                                    onClick={loadData}
                                    style={{ backgroundColor: 'green', color: 'white', border: 'none' }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = 'lightgreen'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'green'}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" className="d-block w-100" style={{ objectFit: "cover", height: "500px" }} alt="First Slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixid=M3w2MzE3Njd8MHwxfHNlYXJjaHwxfHxtb21vc3xlbnwwfHx8fDE3MjA2MjkwNzJ8MA&ixlib=rb-4.0.3" className="d-block w-100" style={{ objectFit: "cover", height: "500px" }} alt="Second Slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=M3w2MzE3Njd8MHwxfHNlYXJjaHwxfHxidXJnZXJ8ZW58MHx8fHwxNzIwNjI4MDYwfDA&ixlib=rb-4.0.3" className="d-block w-100" style={{ objectFit: "cover", height: "500px" }} alt="Third Slide" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container'>
                {foodCategory.length > 0 ? foodCategory.map((data) => (
                    <div className='row mb-3' key={data.id}>
                        <div className='fs-3 m-3'>
                            {data.CategoryName}
                        </div>
                        <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))", padding: "10px" }} />
                        {foodItems.length > 0 ? foodItems.filter(
                            (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                            .map(filterItems => (
                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                    <Card
                                        foodItem={filterItems}
                                        options={filterItems.options[0]}
                                    />
                                </div>
                            )) : <div> No Such Data Found </div>}
                    </div>
                )) : ""}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
