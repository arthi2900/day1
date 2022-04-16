import './App.css';
import {useState} from 'react';
function App() {
  const movie=[
    {
      name:"Friendship",
      img:"https://cinespot.net/gallery/d/3532581-2/Friendship+tamil+movie+photos.jpg"
     },
     {
      name:"Aranmanai",
      img:"https://cinespot.net/gallery/d/3532353-4/Aranmanai+3+tamil+movie+photos.jpg"
     },
     {
      name:"Nadukkaveri",
      img:"https://cinespot.net/gallery/d/3521546-4/Kamali+From+Nadukkaveri+Tamil+Movie+Photos.jpg"
     },
     {
      name:"Sulthan",
      img:"https://cinespot.net/gallery/d/3529130-2/Sulthan+tamil+movie+images+_9_.jpg"
     }
  ]
           const name1 = "movie app";
    return (
      <div className="App">
         <header className="App-header">
              <h1>Hello {name1}</h1>
              <Counter />
     {movie.map(nm=><Data name={nm.name} img={nm.img}/>)}
           <h5>Start see all favourite movie</h5>
    
        </header>
    
      </div>
    );
  }
  function Counter(){
    //let like=4;
    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(0);
    return(
    <div>
      <button onClick={()=>{
        // like++;       console.log(like);
     setLike(like+1);
     }}>👍{like}</button>
         <button onClick={()=>{
           setDislike(dislike+1);
     }}>👎{dislike}</button>
    </div>
    );
  }
  function Data({ name, img }) {
    return (
      <div className="data">
        <h3>oii {name} </h3>
        <img src={img} alt="image" className="img1" />
      </div>
    );
  }
  

export default App;
