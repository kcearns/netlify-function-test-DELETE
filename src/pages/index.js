import React from 'react'
import axios from 'axios'

const IndexPage = () => {

    axios.get('https://lucky-granita-b04374.netlify.app/.netlify/functions/hello')
    .then(response => {
        console.log(response.data)
    })


  

    return (
        <div>
        <h1>Hello world!</h1>
        </div>
    )
}   

    export default IndexPage