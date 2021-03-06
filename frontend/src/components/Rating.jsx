import React from 'react'

const Rating = ({value,text}) => {
    return (
        <div className="Rating">
            <span style={{color:"yellow"}}>
            <i class= "fas fa-star"> </i>
            <i class={value >=1 ? "fas fa-star": value >=0.5 ? "fas-fa-star-half-alt":"fas-fa-star"}></i>
             
            
            </span>
            <span style={{color:"yellow"}}>
            <i class={value >=2 ? "fas fa-star": value >=1.5 ? "fas-fa-star-half-alt":"fas-fa-star"}></i>
             
            
            </span>
            <span style={{color:"yellow"}}>
            <i class={value >=3 ? "fas fa-star": value >=2.5 ? "fas-fa-star-half-alt":"fas-fa-star"}></i>
             
            
            </span>
            <span style={{color:"yellow"}}>
            <i class={value >=4 ? "fas fa-star": value >=3.5 ? "fas-fa-star-half-alt":"fas-fa-star"}></i>
             
            
            </span>
            <span style={{color:"yellow"}}>
            <i class={value >=5 ? "fas fa-star": value >=4.5 ? "fas-fa-star-half-alt":"fas-fa-star"}></i>
             
            
            </span>
            <span style={{color:"red",fontSize:"16px"}}>{text && text}</span>
        </div>
    )
}

export default Rating
