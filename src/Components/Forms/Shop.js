import React from 'react'
import * as yup from 'yup'
import axios from 'axios'
import './shop.css'
import styled from 'styled-components'

export default function ShopForm(){



    return (

    
        <div className="container">

            <NewHead>Pizza Bell</NewHead>

            <h3>Build Your Own Pizza</h3>

            <h4>Select A Size</h4>

            <form>

                <select>
                    <option>Pick A Size</option>
                    <option>Personal</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>

            </form>


            <h4>Select A Topping</h4>
            
            <form>

                <lable>Pepperoni
                    <input type="checkbox" />
                </lable>

                <lable>Sausage
                    <input type="checkbox" />
                </lable>

                <lable>Green Pepper
                    <input type="checkbox" />
                </lable>

                <lable>Red Onion
                    <input type="checkbox" />
                </lable>

                <lable>Jalapeno
                    <input type="checkbox" />
                </lable>

                <lable>Ham
                    <input type="checkbox" />
                </lable>

                <lable>Pineapple
                    <input type="checkbox" />
                </lable>

                <lable>Black Olive
                    <input type="checkbox" />
                </lable>
            </form>

            <h4>Select A Sauce</h4>

            <form>

                <label>BBQ
                <input type="radio"></input>
                </label>

                <label>Marinara
                <input type="radio"></input>
                </label>

                <label>Alfredo
                <input type="radio"></input>
                </label>

                <label>Ranch
                <input type="radio"></input>
                </label>

            </form>


            <h4>Any Special Instructions For The Crew?</h4>

            <form>

                <input  type="text" placeholder="Enter Special Instructions" />

            </form>

            <form>

                <button>Submit Order!</button>

            </form>

        </div>
    
        

    )
}

const NewHead = styled.h1`

text-align: left;

`


// const BYOPizza = styled.h3`

// text-align: center;


// `

