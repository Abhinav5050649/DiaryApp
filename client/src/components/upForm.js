import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import { useLocation } from 'react-router-dom';

export const UpForm = () => {
    //  const { search } = useLocation();
    //  const searchParams = new URLSearchParams(search)
    //  console.log(searchParams)
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const location = useLocation();
    const halfpath = "updpage/upform/:"
    const lenOfhalfPath = halfpath.length + 1

    const itemId = location.pathname.substring(lenOfhalfPath)
    
    console.log(itemId)
    const [val, setVal] = useState([])
    // var item = {
    //     blogNumber: "",
    //     blogContent: "",
    //     blogDate: "", 
    // };

    var postBlogNumber, postBlogDate;

    React.useEffect(() => {
        const getData = async() => {
            const response = await axios.get(`/api/blogs/gt`)
                setData(response.data)
            }
            getData()
    }, [])

    for (var i = 0; i < data.length; i++)
    {
        if (data[i]._id === itemId)
        {
            postBlogDate = data[i].blogDate
            postBlogNumber = data[i].blogNumber
            break;
        }
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        //item.blogContent = val
        //console.log(item)

        //Jst post this
        const item =  {
            blogNumber: postBlogNumber,
            blogContent: val,
            blogDate: postBlogDate,
        }
        console.log(postBlogDate + "\n" + postBlogNumber)
        console.log(item)

        axios
            .post(`/api/blogs/pst`, item)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        
        axios
            .delete(`/api/blogs/del/:` + itemId)
            .then((res) => {
                if (res.data)
                {
                    console.log(res);
                }
            })
            .catch((err) => console.log(err));

        navigate("/");
    }

    return(
        <>
            <Navbar/>
            <br/>
            <div>
                <form onSubmit={handleSubmit} method="put"> 
                    <div className="form-group">
                        <label>Enter new blog content: </label>
                        <input type="text" className="form-control" onChange={(e) => setVal(e.target.value)} id="textFormControlInput1" placeholder="Enter content" required={true}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    );

}

export default UpForm;