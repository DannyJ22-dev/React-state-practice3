import { useState } from 'react'
import DisplayCities from './components/CityList'
import CityForecast from './components/CityForecast'
import './App.css'

function App() {
  const [selectedCity, selectCity] = useState("")
  return (
    <>
      <DisplayCities selectCity={selectCity}/>
      <CityForecast selectedCity={selectedCity}/>
    </>
  )
}
export default App
