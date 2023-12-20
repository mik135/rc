import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import CardContainer from './CardContainer';


function App() {

  return (
    <>
      <div className = "App">
        <Header />
          <h1 style={{padding: "10px 20px"}}>My Cards</h1>
          <div className="cardFlexParent">
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
          </div>
      </div>
    </>
  )
}

export default App
