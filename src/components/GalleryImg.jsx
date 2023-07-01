import React from 'react'

function GalleryImg(props) {
    const img = require(`./images/${props.src}.jpg`)
    return (
        <>
            <div className={`md:p-2 p-1 w-${props.w_ratio}`}>
                <img alt="gallery" width={props.width} height={props.height} className="w-full h-full object-cover object-top block" src={img} />
            </div>
        </>
    )
}

export default GalleryImg