import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <div>
      <Carousel className="m-1">
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src="shoe1.jpg" alt=" " />
          <Carousel.Caption>
            {/* <h3>first slide</h3>
            <p>
              Look deep into nature, and then you will understand everything
              better
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="shoe2.jpg" alt=" " />
          <Carousel.Caption>
            {/* <h3>second slide</h3> */}
            {/* <p>I AM GROOT</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="shoe3.jpg" alt=" " />
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3> */}
            {/* <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;