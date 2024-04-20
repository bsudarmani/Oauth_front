import Cards from "./Cards"
import {posts} from "../data"
import "../App.css";
const Home = () => {
    return (
        <div className="home">
            {posts.map(post=>(
                <Cards key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Home