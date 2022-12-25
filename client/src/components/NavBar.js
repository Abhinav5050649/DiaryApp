import React from "react";

export const NavBar = () => {
    <>
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="/formpage">New Blog Post</a>
                    <a class="nav-link" href="/delpage">Delete Blog Posts</a>
                </div>
            </div>
        </nav>
    </>
}

export default NavBar;