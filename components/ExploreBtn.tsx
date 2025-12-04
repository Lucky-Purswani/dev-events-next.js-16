'use client'
import Image from "next/image"

const ExploreBtn = () => {
  return (
    <button id="explore-btn" className='mt-7 mx-auto' onClick={() => console.log("Hi")}>
        <a href="#events">
            Explore Events
            <Image 
                src="/icons/arrow-down.svg" 
                alt="down arrow icon" 
                width={24} 
                height={24} 
                className="inline-block ml-2"
            />
        </a>
    </button>
  )
}

export default ExploreBtn