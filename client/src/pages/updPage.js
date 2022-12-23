import React from "react";
import NavBar from "../components/NavBar";
import upForm from '../components/upForm';

export const updPage = ({blogNumber, blogDate, blogContent, id}) => {

    return(
        <>
            <NavBar/>
            <br/>
            <upForm 
                blogNumber= {this.blogNumber}
                blogContent = {this.blogContent}
                blogDate = {this.blogDate}
                id = {this.id}
            />
        </>
    )
}