import React, { useState, useEffect } from "react";
// import './App.css';
import './home.css'
import { Link, useRouteMatch, useHistory, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import PizzaForm from "./Form";
import styled from 'styled-components'




const Home = () => {

  // const { url } = useRouteMatch();

  return (

   <Router>

     

    <div className="container">
    
      

      <nav>

        <h1>Lambda Eats</h1>
        <ul>
        
        

            <li></li>

         

        </ul>
        
      </nav>

      <main>

        
        <img className="pizza" src="https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="pizza sign"/>
        
        

          

        
        <h2>Grab a slice of state!</h2>

        <form>

    <Switch>
        <Link to="/shop">

            <button>Pizza Maker</button>

        </Link>
    </Switch>

        </form>

      </main>

      

      <section>

        <div>
          <img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
          <h3>McDonald's</h3>
          <p>$ American / Fastfood / Burgers</p>
          <ul>
            <li>30-40 minute wait</li>
            <li>Free Delivery</li>
          </ul>
        </div>

        <div>
        <img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
        <h3>Taco Bell</h3>
          <p>$ Mexican-American / Fastfood / Tacos & Burritos</p>
          <ul>
            <li>10-25 minute wait</li>
            <li>Jus pull up bro</li>
          </ul>
        </div>

        <div>
        <img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
        <h3>Dog Haus</h3>
          <p>$$$$ American / Diner / Hotdogs</p>
          <ul>
            <li>40-60 minute wait</li>
            <li>$3.35 Delivery</li>
          </ul>
        </div>

        <div>
        <img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
        <h3>Golden Spoon</h3>
          <p>$$$ Froyo / Dessert / Ice Cream</p>
          <ul>
            <li>5-20 minute wait</li>
            <li>Free Delivery</li>
          </ul>
        </div>

        <div>
        <img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
        <h3>Wendy's</h3>
          <p>$ American / Fastfood / Burgers</p>
          <ul>
            <li>20-55 minute wait</li>
            <li>$2.50 Delivery Fee</li>
          </ul>
        </div>

        <div>
        <img src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
        <h3>Subway</h3>
          <p> -$ American / Fastfood / Sandwiches</p>
          <ul>
            <li>10-30 minute wait</li>
            <li>$1.85 Delivery Fee</li>
          </ul>
        </div>

      </section>
      

    </div> //This is the container div being ended 


    

   </Router>

  );
};
export default Home;
