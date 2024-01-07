import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from 'react'
import Loading from './pages/Loading'

const Admin = lazy(() => import('./pages/Admin'))
const Customer = lazy(() => import('./pages/Customer'))
const Product  = lazy(() => import('./pages/Product'))
const Transaction = lazy(() => import('./pages/Transaction'))
const AddProduct = lazy(() => import('./pages/AddProduct'))
const ProductManage = lazy(() => import('./pages/ProductManage'))
const TransactionDetails = lazy(() => import('./pages/TransactionDetails'))
const BarChart = lazy(() => import('./pages/BarChart'))
const PieChart = lazy(() => import('./pages/PieChart'))
const LineChart = lazy(() => import('./pages/LineChart'))
const Coupan = lazy(() => import('./pages/Coupan'))
function App() {

  return (
    <>
    <Router>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/devstore/admin" element={<Admin/>} />
        <Route path="/devstore/admin/products" element={<Product/>} />
        <Route path="/devstore/admin/addproduct" element={<AddProduct/>} />
        <Route path="/devstore/admin/customers" element={<Customer/>} />
        <Route path="/devstore/admin/coupans" element={<Coupan/>} />
        <Route path="/devstore/admin/product/:params" element={<ProductManage/>} />
        <Route path="/devstore/admin/transaction/:params" element={<TransactionDetails/>} />
        <Route path="/devstore/admin/transactions" element={<Transaction/>} />
        <Route path="/devstore/admin/charts/bar" element={<BarChart/>} />
        <Route path="/devstore/admin/charts/pie" element={<PieChart/>} />
        <Route path="/devstore/admin/charts/line" element={<LineChart/>} />

      </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default App
