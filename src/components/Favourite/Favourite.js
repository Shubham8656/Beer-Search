import React, { } from 'react';
import  './Favourite.css';
import Card from '../Card/Card'
import { connect, useSelector } from 'react-redux';

export default function Favourite(props){
    const state = useSelector(state=>state)
    console.log("fav",state.fav)
    return(
        <div className='favourite-container'>
            
            <div className='card-container'>
                {/* Hello */}
                {   
                    state.fav.map((ele,index)=><Card key={index} image={ele.image_url} name={ele.name} desc={ele.description} />)
                }
            </div>

        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        state:state
    }
}
connect(mapStateToProps)(Favourite);
