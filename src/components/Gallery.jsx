import React from 'react'
import GalleryImg from './GalleryImg'

const Gallery = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <GalleryImg w_ratio = '1/2' width = "500" height = "300" />
              <GalleryImg w_ratio = '1/2' width = "501" height = "301" />
              <GalleryImg w_ratio = 'full' width = "600" height = "360" />
              <GalleryImg w_ratio = '1/2' width = "600" height = "361" />
              <GalleryImg w_ratio = '1/2' width = "502" height = "302" />
              <GalleryImg w_ratio = 'full' width = "503" height = "303" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
