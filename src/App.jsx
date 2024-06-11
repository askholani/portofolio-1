import './App.css'

import { Home } from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './component/Layout/Layout'
import { Experiment } from './pages/Experiment/Experiment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/exp'
          element={
            <Layout>
              <Experiment />
            </Layout>
          }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
