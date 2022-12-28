import React from "react";

export const Navbar = () => {
    
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Blogs</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="/formpage">New Blog Post</a>
                    <a className="nav-link" href="/delpage">Delete Blog Post(s)</a>
                    <a className="nav-link" href="/updpage">Update Blog Post Content</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;