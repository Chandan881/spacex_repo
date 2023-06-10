import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BestView, Capsules, Crew, Dragons, Error, Homepage, LandPads, Launches, Roadster, SingleCrew, SingleDragon, SingleLandPads, SingleLaunch } from './pages'
import { Header } from './components'


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="crew" element={<Crew />} />
        <Route path="/crew/:id" element={<SingleCrew />} />
        <Route path="/dragon" element={<Dragons />} />
        <Route path="/dragon/:id" element={<SingleDragon />} />
        <Route path="/landpads" element={<LandPads />} />
        <Route path="/landpads/:id" element={<SingleLandPads  />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:id" element={<SingleLaunch />} />
        <Route path="/roadster" element={<Roadster />} />
        <Route path="/best_views" element={<BestView />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App