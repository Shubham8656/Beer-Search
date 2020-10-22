import React from 'react';
import  './Card.css';
import { connect } from 'react-redux';

export default function Card(props){
    function check(){
    //    let checkBox = document.getElementsByClassName("star");
    //    console.log(checkBox.checked)
       console.log(props.name)
       props.sendToFav(props.name)
    //    store.dispatch(addToFav({}))
    }
    return(
        <div className='card'>
           
            <div className='img-content'>
                <img id='image' src={props.image} alt=''/>
                <div className='description'>
                    <input className="star" type="checkbox" onClick={check} />
                    <div className='header'>{props.name}</div>
                    <div className='info'>{props.desc}</div>
                </div>
            </div>
        
        </div>
    );
}
// const mapDispatchToProps=(dispatch)=>{

// }
connect()(Card);