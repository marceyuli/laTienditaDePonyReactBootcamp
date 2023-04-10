export default function Slider({elements}) {
    return (
        <div id="testimonial-carousel" className="carousel slide body" data-bs-ride="carousel">
            <div className="carousel-inner">
                {   
                    elements.map((element, index) => {
                        return(
                            <img
                            key={index}
                            src={element.url}
                            alt= "polera"
                            className={element.className}
                            width="3%"
                            />
                        );
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}