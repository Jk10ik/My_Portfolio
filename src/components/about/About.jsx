import './about.scss'
import { Button } from 'react-bootstrap'




export default function About() {
    return (

        <div className='about' id='about'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="assets/jkblack2.jpg"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <h1 className="b-title">Wellcome To My Site</h1>
                {/* <p className="a-sub">
                    INSTITUTE OF EMERGING CAREERS .
                </p> */}
                <p className="a-desc">
                    I am a website developer from Lahore, with a strong focus in UI/UX design. I love to get new experiences
                    and always learn from my surroundings.Now excited for an internship
                    to use , reproduce and grow my skills. Curently working on my own websites , and have created three
                    very innovative  smoothly working and with attractive UI.

                    {/* Just completed Full-stack Web-Development
                    Bootcamp 2022 course from IEC , one for a ful-stack web developer . Now excited for an internship
                    to use , reproduce and grow my skills. Curently working on my own websites , and have created three
                     very innovative  smoothly working and with attractive UI. */}
                </p>
                <div className="a-award">
                    <img src="assets/iec1.png " alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Full-stack Web
                            Development Bootcamp </h4>
                        <p className="a-award-desc">
                            Graduating from a student-centered , passionate and non-profit
                            institute, The Institute Of Emerging Careers,
                            decorated with flexible timetable and highly experienced staff.
                        </p>
                        <Button className='btn1' href='https://iec.org.pk/' download> Explore IE <span className="redd">C</span></Button>

                    </div>
                </div>
            </div>
        </div>

    )
}
