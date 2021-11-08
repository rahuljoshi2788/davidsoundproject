import './App.css';
import React, { useState } from 'react'
import { Play, useHowl } from 'rehowl'

const data = [

  {
    animal:'Elephant',
    src:"https://images.news18.com/ibnlive/uploads/2021/08/jumbo.jpg"

  },

  {
    animal:'Cow',
    src:"https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"


  },
  {

    animal:'Pig',
    src: "https://cdn.vox-cdn.com/thumbor/1GPO22ZIacB4labu88Nwz_W3ze4=/0x0:3504x2336/1400x1050/filters:focal(1035x1236:1595x1796):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65752940/GettyImages_131967915.0.jpg"

  },

  {
    animal:'Horse',
    src:"https://www.thesprucepets.com/thmb/KYaXBSM013GnZ2jEZJnX4a9oIsU=/3865x2174/smart/filters:no_upscale()/horse-galloping-in-grass-688899769-587673275f9b584db3a44cdf.jpg"

  }

]



function App() {

  console.log()

  const [play, setPlay]= useState(false)
  const [animalSound,setAnimalSound]=useState(null)
  const { howl } = useHowl({ src: `./${animalSound}.mp3` })

  const handleClick= (e) =>{
    
    console.log(e.target.id)
    const animal=e.target.id
    setAnimalSound(animal)
    setPlay(!play)
   

  }

  return (
    <div className="App">
      <h1 style={{fontSize:'65px'}}>Click on the Animals!!!</h1>
     <Play howl={howl} pause={!play} />
      
      { 
      data.map((animal)=>{

        return (
          <div className="container">
            <br></br>
          {/* <button id={animal.animal} onClick={handleClick}>{animal.animal} { play ? '' : '' }</button> */}
          
          <img className="animalimg" id={animal.animal} src={animal.src} onClick={handleClick}></img>
          { play ? '' : <div class="overlay">
          <div class="text"></div>
        </div> }
        </div>
        )

      })



      }


     


      
    </div>
  );
}

export default App;
