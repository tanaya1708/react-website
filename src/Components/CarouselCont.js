import React from "react";
import { Carousel } from "react-bootstrap";
import emp2 from '../Assets/emp2.jpg';
import emp4 from '../Assets/emp4.jpg';
import emp5 from '../Assets/emp5.jpg';
import home1 from '../Assets/home1.jpg';
import home2 from '../Assets/home2.jpg';
import home3 from '../Assets/home3.jpg';

const CarouselCont = ()=>{
  //for image slider
    return ( <div>
        <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <div class="topnav-right">
        <input type="text" placeholder="Search"/>
      
        <a href="#about">About</a>
       </div>
       </div>
        <Carousel variant='dark' fade={true}>
        <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={home1}
              alt="First slide"
              style={{height:'600px'}}
            />
        <Carousel.Caption>
      <h1>FrameUp</h1>
      <h3>Emplyoee Management System</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={home2}
              alt="Second slide"
              style={{height:'600px'}}
            />
        <Carousel.Caption>
        <h1>FrameUp</h1>
            <h3>Emplyoee Management System</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={home3}
            alt="Third slide"
            style={{height:'600px'}}
          />
        <Carousel.Caption>
        <h1>FrameUp</h1>
        <h3>Emplyoee Management System</h3>
        </Carousel.Caption>
        </Carousel.Item>
 
</Carousel>

      <div><br></br>
      <h3 style={{color:'Blue'}}><b>A Day in Life at FrameUp</b></h3><br/>
      <p style={{fontFamily:'monospace'}}><i>FrameUp is a congregation of happy minds working together. It is a platform where young geniuses come together to ideate, innovate and create, not forgetting to loosen up and have fun at the same time! We, at Capgemini, truly believe that a happy workplace breeds a happy workforce. Hence, we aim to create a relaxed environment for our employees to enable them to unwind with their work-friends and encourage them to share their vibrant personalities at work.
      </i></p>
      </div><br/><br/><br/>
     <b> <marquee style={{color:'Red', fontFamily:'monospace',fontSize:'30px'}}>"Alone we can do so little, together we can do so much." --Helen Keller.</marquee></b>
   
   
    {/* cube body  */}
    <div className ="body"> 
    <div class="cube">
        <div class="box box1">
            <img src=
      "https://media.istockphoto.com/photos/young-man-with-laptop-and-coffee-working-indoors-home-office-concept-picture-id1334702614?b=1&k=20&m=1334702614&s=170667a&w=0&h=Ea5KZt7q8D_dm1kHuNG7__R8J--thzE-Yj7Q9nXMg6E="
                alt="image 1"/>
        </div>

        <div class="box box2">
            <img src=
      "https://media.istockphoto.com/photos/happy-business-woman-working-from-home-on-laptop-computer-picture-id1350926540?b=1&k=20&m=1350926540&s=170667a&w=0&h=7vUba9gEL9L0ntjEZWvCQ4EhOXB3cwtUfAfnHH1fUec="
                alt="image 2"/>
        </div>

        <div class="box box3">
            <img src=
      "https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk="
                alt="image 3"/>
        </div>

        <div class="box box4">
            <img src=
      "https://media.istockphoto.com/photos/dedicated-female-student-of-asian-ethnicity-having-online-class-via-picture-id1344252964?b=1&k=20&m=1344252964&s=170667a&w=0&h=aXAOOx8yMDSrapaNgTInvdxOrkwp82pnC-qOprji5So="
                alt="image 4"/>
        </div>

        <div class="box box5">
            <img src=
      "https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?b=1&k=20&m=1321462048&s=170667a&w=0&h=mlDKCuG5oXoX5zeCl6ixK1MiG1Y--ZmE4N6ku0NUKOE="
                alt="image 5"/>
        </div>

        <div class="box box6">
            <img src=
      "https://media.istockphoto.com/photos/african-mid-woman-using-smartphone-at-home-picture-id1319763415?b=1&k=20&m=1319763415&s=170667a&w=0&h=J9vN7w33elL-hY1CogyTB2BzzKpiEbmPqTdsQ6fBbuI="
                alt="image 6"/>
        </div>
</div>
</div><br/><br/>


      {/* card body */}
      <div class="row" style={{marginLeft :"70px"}}>
      <div class="col-sm-4">
      <div class="card bg-secondary text-white">
      <div class="card-body ">
        
        <img src={emp2} className="card-img-top" alt="Image Here" style={{width: "20rem", height:"12rem"}}/>
          <h4 class="card-title">Add New Emplyoee</h4>
          <p class="card-text">An employee information form is a critical human resources (HR) document that every new employee should complete and keep updated. It provides vital personal information on each employee. The form also asks for emergency contact information.</p>
      
          <a href="/form" class="btn btn-warning">Add Data</a>
        </div>
      </div><br></br><br></br>
    </div>
    <div class="col-sm-4">
      <div className ="card bg-secondary text-white">
        <div class="card-body ">
        <img src={emp4} className="card-img-top" alt="Image Here" style={{width: "20rem", height:"12rem"}}/>
        <h4 class="card-title">View All Emplyoees</h4>
        
          <p class="card-text">In this section, an employee provides personal data, such as their full name, address, phone numbers, email address.</p>
          <br></br><br></br>
          <a href="/emp" class="btn btn-warning">View List </a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card bg-secondary text-white">
        <div class="card-body ">
        <img src={emp5} className="card-img-top" alt="Image Here" style={{width: "20rem", height:"12rem"}}/>
          <h4 class="card-title">Health information</h4>
        <p class="card-text">Often, companies may also ask employees health-related questions to determine potential allergies and special health requirements. These details are also helpful if employees are receiving health insurance through the company.</p>
          
          <a href="/list" class="btn btn-warning">Click here</a>
        </div>
      </div>
    </div>
    </div>

    <footer class="w3-center w3-black w3-padding-">
    <div class="w3-xlarge w3-section">
      <i class="fa fa-facebook-official w3-hover-opacity"></i>
      <i class="fa fa-instagram w3-hover-opacity"></i>
      <i class="fa fa-snapchat w3-hover-opacity"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity"></i>
      <i class="fa fa-twitter w3-hover-opacity"></i>
      <i class="fa fa-linkedin w3-hover-opacity"></i>
    </div>
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">tanaya.com</a></p>
   </footer>
  
  </div>

    )
}

export default CarouselCont