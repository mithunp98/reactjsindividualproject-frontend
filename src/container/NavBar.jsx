import "bootstrap/dist/css/bootstrap.min.css"
import './navbar.css'
import { useNavigate } from "react-router-dom";



function NavBar() {

  const navigate = useNavigate()

  function logoutfn(){
    localStorage.clear();
    navigate("/");

  }

    const logoutstyle= {
        "marginLeft":"1100px"   
    }








  return (
    <nav id="navcolor" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <h2 className="navbar-brand" href="#">Event Planner</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href='/dashboard'>Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='/create'>Add Event</a>
      </li>
      <li className="nav-item">
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button type="submit" style={logoutstyle} className="btn btn-outline-primary my-2 my-sm-0" onClick={logoutfn} >Logout</button>
    </form>
  </div>
</nav>
)
}

export default NavBar;