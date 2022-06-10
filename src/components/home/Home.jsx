import './home.scss';
import { Button } from 'react-bootstrap'
import { BsFacebook } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


export default function Intro() {



  return (
    <div className='home' id='intro'>
      <div className="left">
        <div className="socials">
          <a href="https://www.linkedin.com/in/junaid-khan-600b97225"><BsLinkedin /></a>
          <a href="https://github.com/Jk10ik"><BsGithub /></a>
          <a href="https://facebook.com"><BsFacebook /></a>
          <a href="https://instagram.com/junaidk10ik"><FiInstagram /></a>

        </div>
        <div className="img-bg">

        </div>
        <img src="assets/jkf1.png" className='img' alt="" />

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There , I'm</h2>

          <h1>Junaid Khan</h1>
          <div className="title">
            <div className="t-wrapper">
              <div className="t-item">Web-Developer</div>
              <div className="t-item">UI/UX Designer</div>
              <div className="t-item">Freelancer</div>
              <div className="t-item">Content-Creator</div>
              <div className="t-item">Motivational Speaker</div>
            </div>
          </div>
          <p className="desc  mt-5">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores by using all latest tools, frameworks and liabraries like
            JavaScript, SASS, React-js,  Bootstrap,
            Material UI <br /> and many more.
            {/* <a href="">Scroll Down</a> */}
          </p>
          {/* <div className='scroll'><a href="#">Scroll Down</a></div> */}
          <Button className='btn' href='#contact'>Let's Talk</Button>
          <Button className='btn1' href='assets/Resume.png' download> Save Resume</Button>
        </div>

        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>



      </div>

    </div>
  )
}
