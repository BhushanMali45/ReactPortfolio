import React, { useState } from 'react'
import "./work.scss"
export default function Work() {
const[currentSlide,setCurrentSlide]=useState(0)

  const data = [

    {
      id: "1",
      icon: "./assets/globe.png",
      title: "C programming",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "./assets/nptl.jpeg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Java with DSA",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "./assets/aplha.jpg",
    },
    {
    

      id: "3",
      icon: "./assets/mobile.png",
      title: "Services Selection Board",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "./assets/ssb.jpg",
    },
   {
      id: "4",
      icon: "./assets/writing.png",
      title: "Web Development",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
      "./assets/tcr.jpeg",
    },

    {
      id: "5",
      icon: "./assets/globe.png",
      title: "Hackthon",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "./assets/Hackthon.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };





  return (
    <div className=' works' id='works'>
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>

     {data.map(d=>(

    <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
             
                <p>{d.desc}</p>
                <span></span>
              </div>
            </div>

            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>

     
)) }

      </div>

      <img src="assets/arrow.png" alt=""  className="arrow left"  srcset=""  onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" alt=""  className="arrow right" srcset="" onClick={()=>handleClick("")} />

    </div>
  )
}
