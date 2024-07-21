import React from 'react';

const Carousal = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption' style={{ zIndex: "10" }}>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixid=M3w2MzE3Njd8MHwxfHNlYXJjaHwxfHxzYW1vc2F8ZW58MHx8fHwxNzIwNjYyNjE4fDA&ixlib=rb-4.0.3"  className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixid=M3w2MzE3Njd8MHwxfHNlYXJjaHwxfHxtb21vc3xlbnwwfHx8fDE3MjA2MjkwNzJ8MA&ixlib=rb-4.0.3"  className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=M3w2MzE3Njd8MHwxfHNlYXJjaHwxfHxidXJnZXJ8ZW58MHx8fHwxNzIwNjI4MDYwfDA&ixlib=rb-4.0.3" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..." />
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
  )
}

export default Carousal
