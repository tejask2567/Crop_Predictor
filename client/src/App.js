import React ,{useState ,useEffect} from 'react' 
import './App.css';

function MyForm() {
  const [Temperature, setTemperature] = useState("");
  const [humidity, sethumidity] = useState("");
  const [rainfall, setrainfall] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The temperature you entered was: ${Temperature} \nThe humidity you entered was: ${humidity}\nThe rainfall you entered was: ${rainfall}`)
    /* alert(`The humidity you entered was: ${humidity}`)
    alert(`The rainfall you entered was: ${rainfall}`) */
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter the Temperature:
        <input 
          type="text" 
          value={Temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
      </label>
      {/* <input type="submit" /> */}
      <br></br>
      <label>Enter the humidity:
        <input 
          type="text" 
          value={humidity}
          onChange={(e) => sethumidity(e.target.value)}
        />
      </label>
      {/* <input type="submit" /> */}
      <br></br>
      <label>Enter the rainfall:
        <input 
          type="text" 
          value={rainfall}
          onChange={(e) => setrainfall(e.target.value)}
        />
      </label>
      <br></br>
      <input type="submit" />
    </form>
  )
}

export default MyForm