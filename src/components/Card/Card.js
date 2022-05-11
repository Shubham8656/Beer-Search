import React from 'react';
import  './Card.css';
import { connect } from 'react-redux';
import { addToFav } from '../../redux/Action/Action';

export default function Card(props){
    function check(){
       props.sendToFav(props.ele)
    }
    return(
        <div className='card'>
           
            <div className='img-content'>
                <img id='image' src={props.image} alt=''/>
                <div className='description'>
                    <input className="star" type="checkbox" checked ={props.checked} onClick={check} />
                    <div className='header'>{props.name}</div>
                    <div className='info'>{props.desc}</div>
                </div>
            </div>
        
        </div>
    );
}
const mapDispatchToProps=(dispatch)=>({
    addToFav:(ele)=>{dispatch(addToFav(ele))}
})
connect(mapDispatchToProps)(Card);