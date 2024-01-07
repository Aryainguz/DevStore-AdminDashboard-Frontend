import Sidebar from '../components/Sidebar'
import ProductTable from '../components/ProductTable'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <Sidebar>
      <ProductTable/>
      <div className="fixed bg-green-600 w-10 h-10 items-center text-center z-10 text-white rounded-full flex justify-center right-10 bottom-12 lg:right-24">
        <Link to={'/devstore/admin/addproduct'}><FaPlus/></Link>
      </div>
    </Sidebar>
  )
}

export default Product