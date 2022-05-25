
// src/components/bootstrap-carousel.component.js
import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class MainCarousel extends React.Component {
render() {
return (
<div>
<div className='container-fluid' >
<div className="row">
<div className="col-sm-12">

</div>
</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item>
<img 
className="d-block w-100"
src="https://media.istockphoto.com/photos/indoor-plants-in-pot-isolated-on-white-background-picture-id1330360581?b=1&k=20&m=1330360581&s=170667a&w=0&h=u1yBHWw2hMm-zeENhO7cIaQnti4GZ0gh89kwMu0LyK4="
alt="First slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj054s3__h-A427T07vy6hGeLt8P6lha_z4w&usqp=CAU"
alt="Second slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="data:image/jpeg;base64,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"
alt="Third slide"
/>
</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}

export default MainCarousel