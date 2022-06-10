import './contact.scss'
import { Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com'
// import { useState } from 'react';


export default function Contact() {

  // const [message, setMessage] = useState(false)

  // const handleSubmit = ((e => {

  //   e.preventDefault();
  //   setMessage(true)
  //   e.target.reset();

  // }))



  function sendEmail(e){

    e.preventDefault();

    emailjs.sendForm(
      "service_mjqueb3",
      "template_m96sz7d",
       e.target,
       "vJBDrDPDxdWmiuCgw").then(res=>{
        console.log(res);
       }).catch(err=> console.log(err));
       alert("Your message has been sent succefully");
       e.target.reset();


  }

  
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h4>Have Question?</h4>
        <h2 className='mb-5 h1'>Contact Me Now</h2>

        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3 form1" controlId="formBasicEmail">
            <Form.Label >Name</Form.Label>
            <Form.Control type="text" name='name' className='name form-control' placeholder="Enter Name" />

            <Form.Label className='mt-3'>Email address</Form.Label>
            <Form.Control type="email"  name='email' className='email form-control' placeholder="Enter email" />
            <Form.Text className="text-muted subtitle">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3   " controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ask me anything</Form.Label>
            <Form.Control as="textarea"  name='message' className='textarea form-control' placeholder='Type your Message...' rows={1} />
          </Form.Group>

          <Button className='btn' type="submit">
            Submit
          </Button>
          {/* {message && <span></span>} */}

        </Form>


      </div>
    </div>
  )
}
