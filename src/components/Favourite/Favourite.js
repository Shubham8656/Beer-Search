import React, { } from 'react';
import  './Favourite.css';
// import Card from '../Card/Card'
import { connect } from 'react-redux';

export default function Favourite(props){
    // const [data,setdata] = useState([])
    // useEffect(()=>{
    //     setdata([props.cart])
    //     console.log(data)
    // },[])
    // console.log(props.cart)
    return(
        <div className='favourite-container'>
            
            <div className='card-container'>
                
                {   
                    // data.map((ele,index)=><Card key={index} image={ele.image_url} name={ele.name} desc={ele.description} />)
                }
            </div>

        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        cart:state.cart
    }
}
connect(mapStateToProps)(Favourite);
