import React ,{useState,useEffect } from 'react' 
import './App.css';
import axios from 'axios';
import Tejas from './assets/Tejas.png';
import amrita from './assets/Vanusha.png';
import vanusha from './assets/Amrita.png';



function MyForm() {

  const[input1,setinput1]=useState('');
  const[input2,setinput2]=useState('');
  const[input3,setinput3]=useState('');
  const [concatenatedText, setConcatenatedText] = useState('');

  useEffect(() => {
    if(concatenatedText) {
      setinput1("");
      setinput2("");
      setinput3("");
    }
}, [concatenatedText])
  const handleChange1 = e => {
    setinput1(e.target.value);
  };

  const handleChange2 = e => {
    setinput2(e.target.value);
  };

  const handleChange3 = e => {
    setinput3(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/', {
        input1: input1,
        input2: input2,
        input3: input3
      });
      setConcatenatedText(res.data.display_text);
    } catch (err) {
      console.error(err);
    }
  };
  return(
    <div>
          <nav class="navbar">
        <div id="trapezoid">
        <a href="#Home" >Home</a>
        <a href="#Predict">Predict</a>
        <a href="#Contact">Contact</a> 
        <a href="#About">About</a>
        </div>
      </nav>
      <div className='box1'>
        <section id='Home' className='title'>
          
            <h1 >Welcome to Crop predictor</h1>
            <h3 >An AI website that Predicts type of crops based on environmental conditions.</h3>
          
      </section>
      </div>
      
      <div className='box2'>
        <section id='Predict'>
          <div className='drop-zone'>
          <div className='forms'>
          <form onSubmit={handleSubmit}>
            <label>
              Temperature:
              <span className='input'>
              <input type='text' value={input1} onChange={handleChange1}></input>
              </span>
              <span></span>
            </label>
            <br/>

            <label>
             Humidity:
              <span className='input'>
              <input type='text' value={input2} onChange={handleChange2}></input>
              </span>
              <span></span>
            </label>
            <br/>

            <label >
             Rainfall: 
              <span className='input'>
              <input type='text' value={input3} onChange={handleChange3}></input>
              </span>
              <span></span>
            </label>
            <br/>

            <button type='submit' className='btn'>Submit</button>
          </form>
            
          </div>
          <div className='text1'>
          <div className='new'>{concatenatedText}</div>
          </div>
          </div>
        </section>
      </div>
      <div className='box3'>
        <section id='Contact'>
          <div className='pf-grid'>
            <div className='pf1'>
            <div className='Etext'>E-mail: tek21aiml@cmrit.ac.in</div>
              <img className='img' src={Tejas } alt='Tejas'></img>
            </div>
            <div className='pf2'>
            <div className='Etext'>E-mail: tek21aiml@cmrit.ac.in</div>
            <img className='img' src={amrita} alt='amrita'></img>
            </div>
            <div className='pf3'>
            <div className='Etext'>E-mail: tek21aiml@cmrit.ac.in</div>
            <img className='img' src={vanusha} alt='vanusha'></img>
            </div>
          </div>
        </section>
      </div>
      
      <div className='box4'>
        <section id='About'>
          
        </section>
      </div>

    </div>
    
  )
}



export default MyForm
