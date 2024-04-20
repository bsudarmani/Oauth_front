import { Link } from "react-router-dom";
import '../App'
const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    // <>
    // <div className="navbar p-5 mb-">
    //   <span className="logo">
    //     <Link className="link" to="/">
    //       Lama App
    //     </Link>
    //   </span>
    //   {user ? (
    //     <ul className="list">
    //       <li className="listItem">
    //         <img
    //           src={user.photos[0].value}
    //           alt=""
    //           className="avatar nav-img"
    //         />
    //       </li>
    //       <li className="listItem">{user.displayName}</li>
    //       <li className="listItem" onClick={logout}>
    //         Logout
    //       </li>
    //     </ul>
    //   ) : (
    //     <Link className="link" to="login">
    //       Login
    //     </Link>
    //   )}
    // </div>
    // </>
    <>
      <nav class="navbar navbar-expand-sm p-5">
        <div class="container-fluid">
        <Link className="link h3" to="/">
           Oauth App
         </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {user ?
              (
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a className="nav-link">
                      <img
                      src={user.photos[0].value}
                      alt=""
                      className="avatar nav-img"
                    /></a>
                  </li>
                  <li className="nav-item ">
                    <a class="nav-link text-light nl">{user.displayName}</a>
                  </li>
                  <li className="nav-item ">
                    <a class="nav-link text-light nl" onClick={logout}>Logout</a>
                  </li>
                </ul>
              ) : (
                <Link className="link text-light logout n1" to="login">
                  Login
                </Link>
              )}
          </div>
        </div>
      </nav>
    </>

  );
};

export default Navbar;