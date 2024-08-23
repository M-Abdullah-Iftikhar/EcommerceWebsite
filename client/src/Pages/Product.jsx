import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplayCart from '../Components/ProductDisplayCart/ProductDisplayCart'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {

  const {allproduct} = useContext(ShopContext)
  const {productId}  = useParams()
  const product = allproduct.find((e) => e.id === Number(productId))
  return (
    <div>
      {/* hello */}
      <BreadCrums product = {product}/>
      <ProductDisplayCart product = {product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product