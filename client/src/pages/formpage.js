import React, { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Form from "../components/Form";

export const formpage = () => {
    return(
        <>
            <NavBar/>
            <br/>
            <Form/>
        </>
    )

    //define rest of formpage after creating a form component
}

export default formpage;