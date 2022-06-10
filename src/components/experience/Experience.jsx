import './experience.scss'
import { BsPatchCheckFill } from 'react-icons/bs'

export default function Experience() {
    return (
        <div className='experience mt-5' id='experience'>
            <h5>My Experience </h5>
            <h1> What Skills I Have</h1>
            <div className="container  ">
                <div className="frontend-dev">
                    <h3>Frontend Development</h3>
                    <div className="content">
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div className='right'>
                            <h4>HTML</h4>
                            <small className='text'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div  className='right'>
                            <h4>SASS</h4>
                            <small className='text'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div  className='right'>
                            <h4>JavaScript</h4>
                            <small className='text'>Intermediate</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div  className='right'>
                            <h4>Bootstrap</h4>
                            <small className='text'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div  className='right'>
                            <h4>React JS</h4>
                            <small className='text'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="backend-dev">
                    <h3>Backend Development</h3>
                    <div className="content">
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div  className='right'>
                            <h4>Node JS</h4>
                            <small className='text'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div  className='right'>
                            <h4>Mongo DB</h4>
                            <small className='text'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div  className='right'>
                            <h4>My SQL</h4>
                            <small className='text'>Intermediate</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div  className='right'>
                            <h4>PHP</h4>
                            <small className='text'>Experienced</small>
                            </div>
                        </article>
                        <article className='details'>
                            <BsPatchCheckFill className='icon' />
                            <div  className='right'>
                            <h4>Python</h4>
                            <small className='text'>Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </div>
    )
}
