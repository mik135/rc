import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import CardContainer from './CardContainer';


function App() {

  return (
    <>
      <div className = "App">
        <Header />
          <h1 style={{padding: "10px 20px"}}>Experience Love</h1>
          <div className="cardFlexParent">
            <CardContainer src="pexels-andrea-piacquadio-3775141.jpg"
            title="Barcelona Hotties" description="I'm just a girl, standing(swimming) in front of a paella, asking it to love me. BRB, going off to play in the Barcelona sun."/>
            <CardContainer src="pexels-cottonbro-studio-4045548.jpg" title="Wake Up To Love" description="Ever had to sleep at a place that wasn't HOME? Stop Doing that and always Wake Up To Home wherever you are."/>
            <CardContainer src="pexels-pixabay-210106.jpg" title="I Need A Prince" description="I'm burning under the Sun. I need a prince in shining armour to whisk me off to the perfect castle.and who can make me feel good."/>
          </div>
      </div>
    </>
  )
}

export default App
