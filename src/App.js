import './App.css';
import {useState} from 'react';
function App() {
  const movie=[
    {
      name:"Friendship",
      img:"https://cinespot.net/gallery/d/3532581-2/Friendship+tamil+movie+photos.jpg",
     rating:9,
     starCast:": Harbhajan Singh, Arjun, Losliya ,Sathish, M. S. Bhaskar ,Pala Karuppiah, Badava Gopi",
     summary:"When their classmate is sexually assaulted, a group of college students rallies to raise awareness and fights to bring the perpetrators to justice."
    },
     {
      name:"Aranmanai 3",
      img:"https://cinespot.net/gallery/d/3532353-4/Aranmanai+3+tamil+movie+photos.jpg",
      starCast : "Arya, Raashi Khanna, Sakshi Agarwal, Andrea Jeremiah",
      rating:7.5,
      summary:"Jyothi, the daughter of a landlord, gets haunted by an unknown entity in her childhood. However, when the spirit begins to trouble another member of her family, she decides to uncover its identity."
    },
     {
      name:"Nadukkaveri",
      img:"https://cinespot.net/gallery/d/3521546-4/Kamali+From+Nadukkaveri+Tamil+Movie+Photos.jpg",
      starCast : "Anandhi, Rohit Seraph",
      rating:10,
      summary:"Kamali, a young woman, strives hard to land a seat in a prestigious educational institute. Her journey soon inspires others from her small village to follow in her footsteps." 
    },
     {
      name:"Sulthan",
      img:"https://cinespot.net/gallery/d/3529130-2/Sulthan+tamil+movie+images+_9_.jpg",
      starCast : "Karthik, Raashi Khanna",
      rating:8.5,
      summary:"Sulthan, a motherless child, is raised by a group of criminals working for his father. However, when his father dies, he decides to reform the group into better people."
     }
  ]
           const name1 = "movie app";
    return (
      <div className="App">
    
              <h1>Hello {name1}</h1>
              <Counter />
                  {movie.map(nm=><Data name={nm.name} img={nm.img} starCast={nm.starCast} rating={nm.rating} summary={nm.summary} />)}
           <h5>Start see all favourite movie</h5>
            
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
  function Data({ name, img,rating,starCast,summary }) {
    return (
      <div className="data">
       
        <img src={img} alt="image" className="img1" />
        <h3>{name} </h3>
        <h4>{rating} </h4>
        <p>{starCast} </p>
        <p>{summary} </p>
      </div>
    );
  }
  

export default App;
