import React, { useState } from 'React';
import {NavBar} from '../components/NavBar';
import axios from 'axios';
import {Display} from '../components/Display';

export const Home = () => {
    const [data, setData] = useState([])

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get('blogs/gt')
                setData(response.data)
            }
            getData()
    }, [])

    //add Display component
    const actiData = data.map(entry => {
        console.log(entry);
        return <Display
            blogNumber = {entry.blogNumber}
            blogContent = {entry.blogContent}
            blogDate = {entry.blogDate}
            />
            
    })

    return(
        <>
            <NavBar/>
            <br/>
            <div>
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true"><h4>Blog</h4></li>
                    {actiData}
                </ul>
            </div>
        </>
    )
}

export default Home;