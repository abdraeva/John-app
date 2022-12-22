
import { BlogList } from "../../../utils/BlogList";
import "./blog.css";

const Blog = () => {
  return (
    <div className="container">
      <div className="blog">
        <h1>Blog</h1>
        {
          BlogList.map(item => (
            <div className="blog_list">
              <h3>{item.title}</h3>
              <div className="two_items">
                <span>          
                  {item.show.date}
                </span>
                <p className="name_blog">{item.show.name}</p>

              </div>
              <p className="text_blog">{item.text}</p>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Blog;