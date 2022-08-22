
import React,{ useState, useEffect} from 'react';
import './App.css';
import Content from './components/Content/content';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
// import Travel from './components/Travel/Travel';


function App() {
 
  const Person={
    name:"Parvez",
    work:"Web Developer"
  }

  const Frnd =[

   {name:"Himel"},
    {name:"Jitu"},
    {name:"Tonim"}

    ] 


    const FrndName= Frnd.map(Frnds => Frnds);

    console.log(FrndName);
    const nayoks =['Salman','Sharukh','Yash','Rocky'];

    
    const NayoksNames = nayoks.map(nayok => nayok);

    console.log(NayoksNames);


    // console.log(NayoksNames);
        function Counter(){

          const [Count, SetCount] = useState(23);

      const handleIncrease=() =>{
        const newCount =Count +1;
        SetCount(newCount);
      };

      const handleDecrease=()=> SetCount(Count -1);


      return(
        <div>
          
        <h1>Count : {Count}</h1>

        <button style={{fontSize:"23px", padding:"10px"}} onClick={handleIncrease}>Increase Number</button>
        <button style={{fontSize:"23px", padding:"10px"}} onClick={handleDecrease}>Decrease Number</button>
        </div>
      )
    }
  
  return (
    
    
    
    
    <div>
    
    
    <Navbar></Navbar>

    <br></br>
    <br></br>

    {/* <Travel></Travel> */}
    <Counter></Counter>
    <Users></Users>
    <h2>This is Heros Category</h2>
    {

      nayoks.map(nayoks=> <h1>{nayoks}</h1>)
    }


    <br />
    <br />
    <Content></Content>
    
    <h1>Welcome to flparvez react app</h1>
    <h1>The person name is {Person.name} and he is a {Person.work} .</h1>
    <h1>The result is {45*4}</h1>

    <h1 className="frndhead">My best friend list {Frnd.name} {Frnd.name} {Frnd.name} {Frnd.name} </h1>
    <h3>This is react-dom</h3>
    <p>This is paragraph in react</p>

    
    

        
    <Footer name="Freelancer Parvez" job="Web Developer"></Footer>
   </div>
   
   
  );
}


function Users() {

const [Users,SetUsers]=useState([]);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> SetUsers(data));
    
  },[]);
  

  return(
    <div>
    <h2>Dynamic Users {Users.length}</h2>
    <ul>
    {
      console.log(Users)
    }
      {
        Users.map(user=> <li>{user.name}</li>)
      }{
        Users.map(user=> <h2>{user.email}</h2>)
        
      }
      
    </ul>

    
    </div>

  );
}


export default App;