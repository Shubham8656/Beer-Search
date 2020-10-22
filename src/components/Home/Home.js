import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import  './Home.css';
import store from '../../redux/Store/Store';
import {addToFav,RemoveFromFav} from '../../redux/Action/Action';
import { connect } from 'react-redux';

export default function Home(){
    
    const[searchkey,setkey] = useState('')
    const[data,setdata]=useState([])
    const[favdata,setfavdata]=useState([])
    const[searchdata,setsearcheddata]=useState([])
    // console.log(searchkey)
    const[page,setpage]=useState(2)
    useEffect(()=>{
        // console.log('hello')
        Axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=30')
        .then((res)=>{
            // console.log(res.data)
            setdata([...res.data])
        })
    },[]);
    let searchedData = [];
        // console.log(data)
    const searchHandler=()=>{
        // console.log(data.length,data[0].name,searchkey)
        if(searchkey)
        {   
            //  console.log(searchkey.length)
            searchedData = data.filter((ele)=>(ele.name.toLowerCase().startsWith(searchkey.toLowerCase())))
            // console.log(searchedData)
        }
        setsearcheddata(searchedData)
        // console.log(searchdata)
    };

    const sendToFav=(name)=>{
        data.forEach((ele)=>{
            if(ele.name===name)
            {
                favdata.push(ele)
                setfavdata([...favdata])
                store.dispatch(addToFav(favdata))
                // console.log(favdata)
            }
        })
    }
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // alert("you're at the bottom of the page");
            Axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
            .then((res)=>{
                // data.push(res.data)
                // console.log(res.data)
                res.data.forEach(ele=>data.push(ele))
                setdata(data)
            })
            console.log(data)
            setpage(page+1)
        }
    };

    return(
        // console.log(data)
        <div className='home-container'>
            
            <div className='search-container'>
                <input type='text' 
                id='search-bar'  
                placeholder="Search for beer..."
                value={searchkey}
                onChange={e=>setkey(e.target.value)}
                required/>
                <button id='search-button' onClick={searchHandler}>Search</button>
            </div>

            <div className='card-container'>
                {   
                    searchdata.length?
                    searchdata.map((ele,index)=><Card key={index} image={ele.image_url} name={ele.name} desc={ele.description} sendToFav={sendToFav}/>)
                    :
                    data.map((ele,index)=><Card key={index} image={ele.image_url} name={ele.name} desc={ele.description} sendToFav={sendToFav}/>)
                }
            </div>

        </div>
    );
}
connect()(Home);