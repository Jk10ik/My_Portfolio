import { useEffect, useState } from 'react';
import Portfoliolist from '../portfoliolist/Portfoliolist'
import './portfolio.scss'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio
} from '../../data';


export default function Portfolio() {

  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  const list = [
    {
      id: "featured",
      title: "Bazar-App",
    },
    {
      id: "web",
      title: "Tempo",
    },
    {
      id: "mobile",
      title: "Hotel-App",
    },
    {
      id: "design",
      title: "Resturant",
    },
    {
      id: "content",
      title: "Mini-Projects",
    },
  ];

  useEffect(() => {
    switch (selected) {

      case "featured":
        setData(featuredPortfolio);

        break;
      case "web":
        setData(webPortfolio);

        break;
      case "mobile":
        setData(mobilePortfolio);

        break;
      case "design":
        setData(designPortfolio);

        break;
      case "content":
        setData(contentPortfolio);

        break;

      default:
        setData(featuredPortfolio);

    }

  }, [selected])

  return (

    <div className='portfolio' id='portfolio'>
      <h5>My Portfolio </h5> 
      <h1>I Love What I Do</h1>
      <ul className='ul'>
        {list.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
      {data.map(d=>(
         <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title} </h3>
        </div>
      ))}
       
      </div>

    </div>









  )




}