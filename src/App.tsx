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
        <Route path="/" element={<Admin/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/customers" element={<Customer/>} />
        <Route path="/coupans" element={<Coupan/>} />
        <Route path="/product/:params" element={<ProductManage/>} />
        <Route path="/transaction/:params" element={<TransactionDetails/>} />
        <Route path="/transactions" element={<Transaction/>} />
        <Route path="/charts/bar" element={<BarChart/>} />
        <Route path="/charts/pie" element={<PieChart/>} />
        <Route path="/charts/line" element={<LineChart/>} />

      </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default App
