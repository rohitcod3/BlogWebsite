import {formatISO9075} from "date-fns";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt, author}){
    return(
        <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
          </Link>
        
        </div>
        <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        
        <p className="info">
          <a className="author">{author?.username}</a>
          <time>{formatISO9075(new Date(createdAt) )}</time>
        </p>
        <p className='summary'>{summary}</p>
        </div>
      </div>
    );
}


Post.propTypes = {
  _id: PropTypes.string.isRequired, // Added _id validation
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  content: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired
};

// export default function Post(){
//   return(
//       <div className="post">
//       <div className="image">
//       <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*iBm8BrKrEa4rqksP" alt=""/>
//       </div>
//       <div className="texts">
//       <h2>How to create passive income without captial</h2>
//       <p className="info">
//         <a href="" className="author">Rohit </a>
//         <time>2024-04-23 19:54</time>
//       </p>
//       <p className='summary'>I never loved the idea of working 9–5 and receiving money at the end of the month. Well, I used to receive it on the 5th date of every month.
//       Although I know many out there still love their 9–5 job — no problem with that. My cousin enjoys 9–5 more than his YouTube channel.
//       It’s always our choice. No pressure. Nothing.
//       But in this article, I explore various ways you can create an online passive income stream (with your day job or without it).</p>
//       </div>
//     </div>
//   );
// }