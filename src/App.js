import './App.css';
import {useState} from 'react';
function App() {
  const movielist=[
    {
      name:"Friendship",
      poster:"https://www.newsbricks.com/root_upld/general-news/2021/09/06281/org_00861202109171235.jpg",
     rating:9,
     starCast:" Harbhajan Singh, Arjun, Losliya ,Sathish, M. S. Bhaskar ,Pala Karuppiah, Badava Gopi",
     summary:"When their classmate is sexually assaulted, a group of college students rallies to raise awareness and fights to bring the perpetrators to justice."
    },
     {
      name:"Aranmanai 3",
      poster:"https://cinespot.net/gallery/d/3532353-4/Aranmanai+3+tamil+movie+photos.jpg",
      starCast : "Arya, Raashi Khanna, Sakshi Agarwal, Andrea Jeremiah",
      rating:7.5,
      summary:"Jyothi, the daughter of a landlord, gets haunted by an unknown entity in her childhood. However, when the spirit begins to trouble another member of her family, she decides to uncover its identity."
    },
     {
      name:"Nadukkaveri",
      poster:"https://cinespot.net/gallery/d/3521546-4/Kamali+From+Nadukkaveri+Tamil+Movie+Photos.jpg",
      starCast : "Anandhi, Rohit Seraph",
      rating:10,
      summary:"Kamali, a young woman, strives hard to land a seat in a prestigious educational institute. Her journey soon inspires others from her small village to follow in her footsteps." 
    },
     {
      name:"Sulthan",
      poster:"https://cinespot.net/gallery/d/3529130-2/Sulthan+tamil+movie+images+_9_.jpg",
      starCast : "Karthik, Raashi Khanna",
      rating:8.5,
      summary:"Sulthan, a motherless child, is raised by a group of criminals working for his father. However, when his father dies, he decides to reform the group into better people."
     }
  ]
           const name1 = "movie app";
    return (
      <div className="App">
    
              <h1>Hello {name1}</h1>
             <div className="movie-list">
                  {movielist.map(nm=><Movie name={nm.name} poster={nm.poster} starCast={nm.starCast} rating={nm.rating} summary={nm.summary}  />)}
                  
                    </div> 
                   
           <h5>Start see all favourite movie</h5>
            
          </div>
    );
  }
  function Counter(){
    //let like=4;
    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(0);
    return(
    <div className='counter'>
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
  function Movie({ name,poster,rating,starCast,summary }) {
    return (
      <div className="movie-container">
       
        <img src={poster} alt="image" className="movie-poster" />
        <div className='head'>
        <h3 className="movie-name">{name} </h3>
        <h4 className="movie-rating">⭐ {rating} </h4>
        </div>
        <p className="movie-starcast">{starCast} </p>
        <p className="movie-summary">{summary} </p>
        <Counter /> 
      </div>
    );
  }
  

export default App;
