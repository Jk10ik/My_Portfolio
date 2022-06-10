import './testimonial.scss'

export default function Testimonial() {

  const data = [
    {
      id: 1,
      name: "Faizan",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolore.",
        // featured: true,

    },
    {
      id: 2,
      name: "Junaid",
      title: "CEO of DELKA",
      img:
        "assets/ceo.jpg",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolore.",
      featured: true,
    },
    {
      id: 3,
      name: "Shahid",
      title: " Co-Founder",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolore.",
        // featured: true,
    },
  ];
  return (
    <div className='testimonial mt-5' id='testimonial'>
      <h5>Testimonials</h5>
      <h1>What They Say</h1>
      <div className="container">
        {data.map(d => (

          <div className={d.featured ? " card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className='left' alt="" />
              <img src={d.img} className='user' alt="" />
              <img src={d.icon} className='right' alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>

        ))}

      </div>

    </div>
  )
}
