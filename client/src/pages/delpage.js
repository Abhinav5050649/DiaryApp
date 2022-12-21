//Draft this page after a while
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const delpage = (id) => {
    const navigate = useNavigate();

    const handleDelete = async(id) => {
        e.preventDefault();
        axios.delete('http://localhost:5000/api/blogs/del', {
            id: id,
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });

        navigate("/");
    }
}

export default delpage;