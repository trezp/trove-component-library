
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";

import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="badge-container">
        <Badge color="blue" type="pill">Badge</Badge>
        <Badge color="red" type="pill">Badge</Badge>
        <Badge color="green" type="pill">Badge</Badge>
        <Badge color="pink" type="pill">Badge</Badge>
        <Badge color="yellow">Badge</Badge>
        <Badge color="indigo">Badge</Badge>
        <Badge color="purple" >Badge</Badge>
      </div>
      <Banner status="warning">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris non odio condimentum lacinia
      </Banner>
      <Banner status="success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris non odio condimentum lacinia
      </Banner>
      <Banner status="neutral">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris non odio condimentum lacinia
      </Banner>
      <Banner status="error"></Banner>
    </div>
  )
}

export default App
