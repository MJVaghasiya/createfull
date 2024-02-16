import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../App';





const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/About"}>About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/Contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/Logout"}>  <button class="btn btn-outline-success" type="submit">Logout</button></Link>
          </li>

        </>
      )
    } else {
      return (
        <>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/About"}>About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/Contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/Signup"}>  <button class="btn btn-outline-success" type="submit">Signup</button></Link>
          </li>
        </>
      )
    }
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <RenderMenu />
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
