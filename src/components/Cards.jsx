import { Link } from "react-router-dom";
import "../App.css";

const Cards = ({ post }) => {
  return (
     <>
     <div className="card m-2" >
      <Link className="link"  to={`/post/${post.id}`}>
      <img src={post.img} className="card-img-top img" alt="..."/>
    <div className="card-body">
    <h5 className="card-title title">{post.title}</h5>
    <p className="card-text desc">{post.desc}</p>
    <button className="cardButton">Read More</button>
  </div>
  </Link>
</div> 
</>
  );
};

export default Cards;