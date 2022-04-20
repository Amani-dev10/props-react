import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import Photo from './Photo';
import img from '../src/ameni.JPG'

function App() {
  const profil = {
    fullName : "Mansour Ameni",
    bioProfil : "Bio Ameni",
    profession :"Devloppeuse"
  }
  const test  = "test"
  const handleName = (fullName) => alert(`${fullName}`)
  return (
    <div className="App">
   <Profile user={test} >
   <img src={img} />   </Profile>
  
    </div>
  );
}

export default App;
