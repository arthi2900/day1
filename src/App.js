import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Movie } from './Movie';
import { Tic } from './Tic';
import { AddColor } from './AddColor';
import{Switch,Route,Link} from 'react-router-dom';
function App() {
  const initial_MovieList=[
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
  const [movielist,setMovieList]=useState(initial_MovieList);
           const name1 = "movie app";
           const [name,setName]=useState(" ");
           const [poster,setPoster]=useState("");
           const [rating,setRating]=useState("");
           const [summary,setSummary]=useState("");
           const [starCast,setStarCast]=useState("");
    return (
      <div className="App">
                <h1>Hello {name1}</h1>
                
                 <ul>
                 <li><Link to="/movie">MOVIElist</Link></li>
                   <li><Link to="/addcolor">ADD COLOR list</Link></li>
                 <li><Link to="/">HOME</Link></li>
                 <li><Link to="/tic">Tic</Link></li>
                 </ul>
                 
                 <Switch>
          <Route exact path="/movie">
          <div className="add-movie-form">
              <TextField label="Movie Name" placeholder="name" type="text" onChange={(event)=>setName(event.target
          .value)}/>
                  <TextField  label="Movie poster" placeholder=" poster"  onChange={(event)=>setPoster(event.target
          .value)}/>
                   <TextField  label="Movie rating" placeholder=" rating" onChange={(event)=>setRating(event.target
          .value)}/>
               <TextField  label="Movie starCast" placeholder="starCast" onChange={(event)=>setStarCast(event.target
          .value)}/>
                  <TextField  label="Movie summary" placeholder=" summary" onChange={(event)=>setSummary(event.target
          .value)} />
                         <Button variant="contained" onClick={()=>{
                  const newMovie={name:name,
                    poster:poster,
                    summary:summary,
                    starCast:starCast,
                    rating:rating
                  };
                  setMovieList([...movielist,newMovie]);
                }
                }>Add movie</Button>  
                    </div>
              <div className="movie-list">
                  {movielist.map(({name,poster,starCast,rating,summary},index)=>( 
                    <Movie key={index} name={name} poster={poster} starCast={starCast}
                   rating={rating} summary={summary}  />
                  ))}
                   </div>

          </Route>
          <Route path="/addcolor">
            <AddColor />
          </Route>
          <Route path="/tic">
            <Tic />
          </Route>
          <Route path="/">ftuhjgykyhfhgdfgs</Route>
         
        </Switch>

                   
                                  
                
                 
                                    </div>
    );
     }
    export default App;
