import React from 'react'

function GalleryImg(props) {
    return (
        <>
            <div class={`md:p-2 p-1 w-${props.w_ratio}`}>
                <img alt="gallery" class="w-full object-cover h-full object-center block" src={`https://picsum.photos/${props.width}/${props.height}`} />
            </div>
        </>
    )
}

export default GalleryImg