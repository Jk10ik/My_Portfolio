import React from './menue.scss'

export default function Menue({ openMenue, setOpenMenue }) {
    return (
        <div className={'menue ' + (openMenue && 'active')}>
            <ul>
                <li><a href="#intro" onClick={() => setOpenMenue(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setOpenMenue(false)}>About </a></li>
                <li><a href="#portfolio" onClick={() => setOpenMenue(false)} >Portfolio</a></li>
                <li><a href="#experience" onClick={() => setOpenMenue(false)}>Experience </a></li>
                <li><a href="#testimonial" onClick={() => setOpenMenue(false)}>Testimonial</a></li>
                <li><a href="#contact" onClick={() => setOpenMenue(false)}>Contact Us</a></li>
                <li><a href="#footer" onClick={() => setOpenMenue(false)}>Footer</a></li>

            </ul>
        </div>
    )
}
