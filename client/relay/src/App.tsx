import './App.css'
import React from 'react'
import User from "./User";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<p>Loading...</p>}>
        <User />
      </React.Suspense>
    </div>
  )
}

export default App
