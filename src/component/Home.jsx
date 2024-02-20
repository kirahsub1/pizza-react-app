import React from 'react'
import "../css/home.css"
import img1 from "../image/focaccia.jpg"
import img2 from "../image/spinaci.jpg"
import img3  from "../image/salamino.jpg"
import img4 from "../image/margherita.jpg"
import img5 from "../image/funghi.jpg"
import img6 from "../image/prosciutto.jpg"

const Home = () => {
  return (
    <>
    <div className="header">
    <h1>FAST REACT PIZZA CO.</h1>
    </div>
    <div>
    <h2 className='menu'>OUR MENU</h2>
    <p menu p>Authetic Italian cuisine. 6 creative dishes to choose from. All from <br /> our stone oven. all organic, all delicious.</p>
    </div>

    <div className='pizza'>
    <div>
      <img src={img1} alt="focaccia" />
      <h1>Focaccia</h1>
      <p>Bread with italian alive <br /> oil and rosemary</p>
      <p>6</p>
    </div>

    <div className='pizza'>
<img src= {img2} alt="spinaci" />
<h1>Pizza Spinaci</h1>
<p>Tomato mozarells, spinach, <br /> and ricotte cheese </p>
<p>12</p>
    </div>

<div>
<img src={img3} alt="salamino" />
<h1>Pizza Salamino</h1>
<p>Tomato mozarella, and <br /> pepperoni </p>
<p>SOLD OUT</p>
</div>

<div>
<img src= {img4} alt="margherita" />
<h1>Pizza Margherita</h1>
<p>Tomato and mozarella</p>
<p>18</p>
</div>

<div>
<img src= {img5} alt="funghi" />
<h1>Pizza Funghi</h1>
<p>Tomato mozarella, <br /> rushrocco, and onion </p>
<p>12</p>
</div>

<div>
<img src= {img6} alt="prosciutto" />
<h1>Pizza Prosciutto</h1>
<p>Tomato, mozarella, has, <br /> aragula, and burrata cheese</p>
<p>18</p>
</div>
    </div>

    <div>
    <footer>
      <p>We're open from 12:00 to 22:00. Come visit us or order online.</p>
      <button>Order</button>
    </footer>
</div>
    </>
  );
};

export default Home;
