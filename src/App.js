
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Transaction from './components/Transaction.js'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1> Home </h1>} />
        <Route path='/transaction' element={<Transaction />} />
      </Routes>
    </BrowserRouter>

  );

}

export { App };