import React,{ useEffect } from 'react'
import SlideItem from 'pages/Home/component/SlideItem/SlideItem'
import SlideList from 'constant/Slide';

export default function Slide(props) {
  const slide = SlideList.map((item,index) => (
                <SlideItem key={index} marker={item.id} active={index === 0?"active":""}  title={item.title} description={item.description} image={item.image} />
                ))
  const marker = SlideList.map((item,index) => (
                  <li key={index} data-marker={item.id} className={index === 0?"active":""}>
                    <img src={item.image} alt="Background" />
                  </li>
                ))

  
  useEffect(() => {
    const carousel = document.getElementById("carousel"); //carousel

    const markersLi = document.querySelectorAll(".markers li"); //dot

    markersLi.forEach((item,index) => {
      item.addEventListener("click", () => {
        // Set variables
        const dataCurrent = carousel.getAttribute("data-current");
        const dataMarker  = item.getAttribute("data-marker");

        // Move
        carousel.querySelector('.items .item[data-marker="'+dataCurrent+'"]').classList.remove("active");
        carousel.querySelector('.items .item[data-marker="'+dataMarker+'"]').classList.add("active");

        // Set carousel data-current
        carousel.setAttribute("data-current", dataMarker);

        // Set marker
        document.querySelector('.markers li.active').classList.remove("active");
        document.querySelector('.markers li[data-marker="'+ dataMarker+'"]').classList.add("active");
      })
    })
    
  })
  
  return (
      <div id="carousel" className="carousel" data-count={SlideList.length} data-current={1}>
        {/* <button class="btn btn-control"></button> */}
        <div className="items">
          {slide}
        </div>
        <ul className="markers">
          {marker}
        </ul>
      </div>
  )
}
