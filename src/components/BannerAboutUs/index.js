import React from 'react'
import { Banner } from './styles'

const BannerAboutUs = () => {
  return (
    <Banner>
         <img width={1350} src={require("../../assets/AboutUs.jpeg")} alt="" />
    </Banner>
  )
}

export default BannerAboutUs