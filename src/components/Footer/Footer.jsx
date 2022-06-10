import './footer.scss'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsFacebook} from 'react-icons/bs'



export default function Footer() {
    return (
        <footer className='footer' id='footer'>
            <a href="#intro" className='logoo'>genius.</a>


            <ul className='links'>
                <li><a href="#intro" >Home</a></li>
                <li><a href="#about"  >About </a></li>
                <li><a href="#portfolio"   >Portfolio</a></li>
                <li><a href="#experience"  >Experience </a></li>
                <li><a href="#testimonial"  >Testimonial</a></li>
                <li><a href="#contact"  >Contact Us</a></li>
                <li><a href="#footer" >Footer</a></li>

            </ul>

            <div className="socials">
                <a href="https://facebook.com"><BsFacebook/></a>
                <a href="https://instagram.com/junaidk10ik"><FiInstagram/></a>
                <a href="https://www.linkedin.com/in/junaid-khan-600b97225"><BsLinkedin/></a>
                <a href="https://github.com/Jk10ik"><BsGithub/></a>
            </div>
            <div className="copyright">
                <small>
                    &copy; Junaid Khan , genius.tutorial, All rights reserved
                </small>
            </div>
        </footer>
    )
}
