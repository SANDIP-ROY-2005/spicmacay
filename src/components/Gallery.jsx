import React from 'react'
import GalleryImg from './GalleryImg'

const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <div className="flex flex-col items-center justify-center w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Journey through some auspicious moments captured in lenses</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap md:-m-2 -m-1">
            <div className="flex flex-col sm:flex-row flex-wrap w-1/2">
              <GalleryImg w_ratio='1/2' width="500" height="300" src="24" />
              <GalleryImg w_ratio='1/2' width="501" height="301" src="18" />
              <GalleryImg w_ratio='full' width="600" height="360" src="5" />
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap w-1/2">
              <GalleryImg w_ratio='full' width="600" height="361" src="16" />
              <GalleryImg w_ratio='1/2' width="502" height="302" src="19" />
              <GalleryImg w_ratio='1/2' width="503" height="303" src="28" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
