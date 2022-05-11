import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css';
import { addToFav } from '../../redux/Action/Action';
import {   useDispatch } from 'react-redux';

export default function Home() {

    const [searchkey, setkey] = useState('')
    const [data, setdata] = useState([])
    const [favdata, setfavdata] = useState([])
    const [searchdata, setsearcheddata] = useState([])
    const [page, setpage] = useState(2)
    const dispatch = useDispatch();

    useEffect(() => {
        Axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=30')
            .then((res) => {
                res.data.map(ele => ele.star = false)
                setdata([...res.data])
            })

    }, []);

    let searchedData = [];
    const searchHandler = (searchkey) => {
        setkey(searchkey);
        if (searchkey) {
            searchedData = data.filter((ele) => (ele.name.toLowerCase().startsWith(searchkey.toLowerCase())))
        }
        setsearcheddata(searchedData)
    };

    const sendToFav = (e) => {
        let newarr = data.map(ele => {
            if (ele.name === e.name) {
                ele.star = !ele.star
                console.log("start", ele)
            }
            return ele
        })
        setdata(newarr)
        localStorage.setItem('DATA', newarr)
        let Fav = favdata.find(ele => ele.name === e.name)
        if (Fav) {
            setfavdata(favdata.filter(ele => ele.name !== e.name))
            dispatch(addToFav(favdata))
        }
        else {
            favdata.push(e)
            setfavdata([...favdata])
            dispatch(addToFav(favdata))
        }
    }

    window.onscroll = function (ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // alert("you're at the bottom of the page");
            Axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
                .then((res) => {
                    // data.push(res.data)
                    // console.log(res.data)
                    res.data.forEach(ele => data.push(ele))
                    setdata(data)
                })
            console.log(data)
            setpage(page + 1)
        }
    };

    return (
        <div className='home-container'>
            <div className="input-group rounded" style={{ marginBottom: "30px" }}>
                <input type='text'
                    id='search-bar'
                    placeholder="Search for beer..."
                    value={searchkey}
                    onChange={e => searchHandler(e.target.value)}
                    required />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </div>
            <div className='card-container'>
                {
                    searchkey.length > 0 ?
                        searchdata.length ?
                            searchdata.map((ele, index) => <Card key={index} checked={ele.star} ele={ele} image={ele.image_url} name={ele.name} desc={ele.description} sendToFav={sendToFav} />)
                            :
                            <div style={{ marginLeft: '50%' }}>No result found</div>

                        :
                        data.map((ele, index) => <Card key={index} checked={ele.star} ele={ele} image={ele.image_url} name={ele.name} desc={ele.description} sendToFav={sendToFav} />)
                }
            </div>

        </div>
    );
}
// connect()(Home);
