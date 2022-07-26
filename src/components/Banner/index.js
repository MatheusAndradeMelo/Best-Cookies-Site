import React from 'react'
import { Banner } from './styles'

const BannerSecondary = () => {
  return (
    <Banner>
         <img width={800} src={require("../../assets/Banner.jpeg")} alt="" />
    </Banner>
  )
}

export default BannerSecondary