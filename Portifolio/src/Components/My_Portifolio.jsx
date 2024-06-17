import React, { useEffect } from 'react';
import '../Css/My_portifolio.css' // Assuming you create a MyPortfolio.css file for styles
import Image1 from '../assets/Images/Image35.jpg';
import Image2 from '../assets/Images/Image18.jpg';
import Resume from '../assets/Images/Jagadeesh Resume.pdf';
import Projectimg from '../assets/Images/projectimage.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';

const My_Portfolio = () => {
  useEffect(() => {
    const menu = document.querySelector('#menu-bars');
    const header = document.querySelector('header');

    menu.onclick = () => {
      menu.classList.toggle('fa-times');
      header.classList.toggle('active');
    };

    window.onscroll = () => {
      menu.classList.remove('fa-times');
      header.classList.remove('active');
    };

    const cursor1 = document.querySelector('.cursor-1');
    const cursor2 = document.querySelector('.cursor-2');

    window.onmousemove = (e) => {
      cursor1.style.top = `${e.pageY}px`;
      cursor1.style.left = `${e.pageX}px`;
      cursor2.style.top = `${e.pageY}px`;
      cursor2.style.left = `${e.pageX}px`;
    };

    document.querySelectorAll('a').forEach((link) => {
      link.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
      };

      link.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
      };
    });
  }, []);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5ds46sm', 'template_d7i8y6b', form.current, {
        publicKey: 'PrPQzivdS_dmZo5H_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email sent Succesfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to sent Email..! Try again")
        },
      );
      e.target.reset();
  };

 return (
    <div>
      <div className="cursor-1"></div>
      <div className="cursor-2"></div>
      <div id="menu-bars" className="fas fa-bars"></div>
      {/* Header section start */}
      <header>
        <a href="#" className="logo">Kotni<span> Jagadeesh</span></a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#services">services</a>
          <a href="#education">Education</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="follow">
          <a href="https://www.facebook.com/jagadeesh.kotni.9?mibextid=ZbWKwL" className="fab fa-facebook-f"> </a>
          <a href="https://twitter.com/jagadeesh_kotni" className="fab fa-twitter"> </a>
          <a href="https://www.instagram.com/jagadeesh_kotni?igsh=NXF5ZGt5OXljaGYw" className="fab fa-instagram"> </a>
          <a href="https://www.linkedin.com/in/jagadeesh-kotni-194a6b260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="fab fa-linkedin"> </a>
        </div>
      </header>
      {/* Header section Ends */}
      {/* Home section starts */}
      <section className="home" id="home">
        <div className="content">
          <span className="hi">Hi there</span>
          <h3>I am <span>Kotni Jagadeesh</span></h3>
          <p className="info">I am a FullStack Developer</p>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <a href="#about" className="btn">about me</a>
        </div>
        <div className="image">
          <img src={Image1} alt="Jagadeesh image" />
        </div>
      </section>
      {/* Home sections Ends */}
      {/* About section starts */}
      <section className="about" id="about">
        <h1 className="heading">about<span>me</span></h1>
        <div className="row-1">
          <div className="image">
            <img src={Image2} alt="Jagadeesh image" />
          </div>
          <div className="content">
            <h3>My name is Kotni Jagadeesh & I am a FullStack Developer</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <div className="box-container">
              <div className="box">
                <p><span> Age :</span> 21</p>
                <p><span> Gender :</span> Male</p>
                <p><span> Language :</span> English, Hindi</p>
                <p><span> Work :</span> FullStack Developer</p>
              </div>
              <div className="box">
                <p><span> Phone :</span> +91 6303094325</p>
                <p><span> Email :</span> jagadeeshkotni20@gmail.com</p>
                <p><span> Country :</span> India</p>
              </div>
            </div>
            <a href={Resume} className="btn" download>Download CV</a>
            <a href="#" className="btn">Hire me</a>
          </div>
        </div>

        <h1 className="heading"><span> My</span>Skills</h1>
        <div className="row-2">
          <div className="skills">
            <div className="progress">
              <h3>Java<span>90%</span></h3>
              <div className="bar"><span style={{ width: '90%' }}></span></div>
            </div>
            <div className="progress">
              <h3>JavaScript<span>80%</span></h3>
              <div className="bar"><span style={{ width: '80%' }}></span></div>
            </div>
            <div className="progress">
              <h3>MySQL<span>90%</span></h3>
              <div className="bar"><span style={{ width: '90%' }}></span></div>
            </div>
            <div className="progress">
              <h3>Cloud<span>75%</span></h3>
              <div className="bar"><span style={{ width: '75%' }}></span></div>
            </div>
          </div>

          <div className="box-container">
            <div className="box">
              <h3>Fresher</h3>
              <p>Years of experience</p>
            </div>
            <div className="box">
              <h3>3+</h3>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </section>
      {/* About section Ends */}
      {/* Service section starts */}
      <section className="services" id="services">
        <h1 className="heading"><span> My</span>services</h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-code"></i>
            <h3>Web Design</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          </div>
          <div className="box">
            <i className="fas fa-code"></i>
            <h3>Web Design</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          </div>
          <div className="box">
            <i className="fas fa-code"></i>
            <h3>Web Design</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          </div>
          <div className="box">
            <i className="fas fa-code"></i>
            <h3>Web Design</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          </div>
          <div className="box">
            <i className="fas fa-code"></i>
            <h3>Web Design</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          </div>
          <div className="box">
            <i className="fas fa-code"></i>
            <h3>Web Design</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          </div>
          {/* Repeat similar service boxes as needed */}
        </div>
      </section>
      {/* Service section Ends */}
      {/* Education section starts */}
      <section className="education" id="education">
        <h1 className="heading"><span>My</span> Education</h1>
        <div className="box-container">
          <div className="box">
            <div className="content">
              <span>2016-2017</span>
              <h3>Holy-cross English medium school</h3>
              <h3>CGPA : 9.5</h3>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <span>2018-2019</span>
              <h3>Gayatri Junior college</h3>
              <h3>CGPA : 9.88</h3>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <span>2019-2023</span>
              <h3>University college of Engineering Narasaraopet</h3>
              <h3>CGPA : 6.75</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Education section Ends */}
      {/* Portfolio section starts */}
      <section class="portifolio" id="portifolio">

        <h1 class="heading"><span>My</span>Portifolio</h1>
        <div class="box-container">
            <div class="box">
                <img src={Projectimg} alt=""/>
                <h3>Project 1</h3>
                <div class="icons">
                    <a href="#" class="fas fa-link"></a>
                    <a href="#" class="fas fa-share"></a>
                    <a href="#" class="fas fa-search"></a>
                </div>
            </div>
            <div class="box">
                <img src={Projectimg}  alt=""/>
                <h3>Project 2</h3>
                <div class="icons">
                    <a href="#" class="fas fa-link"></a>
                    <a href="#" class="fas fa-share"></a>
                    <a href="#" class="fas fa-search"></a>
                </div>
            </div>
            <div class="box">
                <img src={Projectimg}  alt=""/>
                <h3>Project 3</h3>
                <div class="icons">
                    <a href="#" class="fas fa-link"></a>
                    <a href="#" class="fas fa-share"></a>
                    <a href="#" class="fas fa-search"></a>
                </div>
            </div>
        </div>

     </section>
  
      {/* Portfolio section Ends */}
      {/* Contact section starts */}
      <section className="contact" id="contact">
      <h1 className="heading"><span>contact</span> me</h1>
      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>My email</h3>
          <p>jagadeeshkotni20@gmail.com</p>
          <p>jagadeeshkotni04@gmail.com</p>
        </div>
        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>My Phone</h3>
          <p>+91 6303094325</p>
          <p>+91 9347759066</p>
        </div>
        <div className="icons">
          <i className="fas fa-map-marker-alt"></i>
          <h3>My address</h3>
          <p>5-66, Deevanguls street, Parapuram-532455</p>
          <p>India</p>
        </div>
      </div>

      <div className="row">
        <form onSubmit={sendEmail} autoComplete='off'>
        <input type="text" placeholder="Subject" name="Subject"  className="box" />
          <input type="text" placeholder="Name" name="Name"   className="box" />
          <input type="email" placeholder="E-mail" name="Email"  className="box"  />
          <input type="number" placeholder="Number" name="Number"  className="box" />
          <textarea placeholder="message" name="Message" cols="30" rows="30"  ></textarea>
          <input type="submit" className="btn" value="send Email" />
        </form>
        <iframe 
          className="map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241693.00014757004!2d83.64648666446728!3d18.822509666845626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c8eddc104255f%3A0xddf2ee22b802872c!2sKotturu%2C%20Andhra%20Pradesh%20532455!5e0!3m2!1sen!2sin!4v1707908527918!5m2!1sen!2sin" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
      {/* Contact section Ends */}
    </div>
  ); 
};

export default My_Portfolio;



