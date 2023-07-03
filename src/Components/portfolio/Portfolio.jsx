import React, { useState ,useEffect} from 'react'
import "./Portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList';

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected ,setSelected]=useState("featured")
  const [data, setData] = useState([]);
  const list= [
    {
      id: "All",
      title: "All",
      link:"h"
    },
    {
      id: "web",
      title: "Frontened",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "mern",
      title: "Mern",
    },
    {
      id: "star",
      title: "star",
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "All":
        setData(featuredPortfolio);
        break;
      case "frontend":
        setData(webPortfolio);
        break;
      case "react":
        setData(mobilePortfolio);
        break;
      case "mern":
        setData(designPortfolio);
        break;
      case "star":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
 

  return (
    <div className='portfolio' id='project'>
      <h1>Project</h1>
      <ul>
      {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      {/* <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt="" 
            />
            <h3 >{d.title} </h3>
           {/* <a href="{d.link}">{d.title} </a> */}
          {/* </div> */}




<div className="container">
{data.map((d) => (
  <div className="item">
    <a href={d.link} target='_blank' rel="noreferrer" > <img src={d.img} alt="" srcset="" /></a>
     <a href={d.link}><h3 >{d.title} </h3></a>
  </div>
        ))}
      </div>
      
      


      



     
    </div>
  )
}





// import React from 'react';
// import './Portfolio.scss';
// import PortfolioList from '../portfolioList/PortfolioList';

// export default function Portfolio() {
//   const list = [
//     {
//       id: 'featured',
//       title: 'Featured',
//     },
//     {
//       id: 'web',
//       title: 'Web App',
//     },
//     {
//       id: 'mobile',
//       title: 'Mobile App',
//     },
//     {
//       id: 'design',
//       title: 'Design',
//     },
//     {
//       id: 'content',
//       title: 'Content',
//     },
//   ];

//   const portfolioItems = [
//     {
//       id: 1,
//       imageSrc:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU',
//       title: 'Banking App',
//     },
//     // Add more items here
//   ];

//   return (
//     <div className="portfolio" id="portfolio">
//       <h1>Portfolio</h1>
//       <ul>
//         {list.map((event) => (
//           <PortfolioList key={event.id} title={event.title} />
//         ))}
//       </ul>

//       <div className="container">
//         {portfolioItems.map((item) => (
//           <div key={item.id} className="item">
//             <img src={item.imageSrc} alt="" />
//             <h3>{item.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
