import HomePage from "./pages/home.page"
import { Route, Routes } from "react-router"
import React from "react"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
