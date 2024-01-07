import { useParams } from 'react-router-dom'

const ProductParams = () => {
    const {params} = useParams()
  return (
    <div>{params}</div>
  )
}

export default ProductParams