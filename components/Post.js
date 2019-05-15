import Link from 'next/link';

const Post = ({ data }) => (
  <article className="post">
    <header>
      <div className="post-user">
        <div className="post-user-avatar">
          <img src={data.profileImage} alt="image" />
        </div>
        <div className="post-user-nickname">
          <span>{data.user}</span>
        </div>
      </div>
    </header>
    <div className="post-image">
      <div className="post-image-bg">
        <img className="responsive" alt="no" src={data.image} />
      </div>
      <div className="post-meta">
        <div className="meta-info">
          <span>Leaf iPhone case hard plastic</span>
          <span className="cur">AED 230</span>
        </div>
        <div className="favourite">
          <span>
            <i className="fas fa-heart" />
          </span>
        </div>
      </div>
    </div>
    <div className="post-caption">
      <span className="post-likes">
        <i className="fas fa-heart" />
        {data.likes} likes
      </span>
      <p className="post-description">{data.description}</p>
      <Link href="/">
        <span className="post-comments">View {data.comments} comments</span>
      </Link>
    </div>

    <style jsx>{`
      .post {
        // padding: 1rem;
        border-bottom: 1px solid #e0e0e0;
      }
      .post-user {
        display: flex;
        align-items: center;
        align-content: center;
        padding: 1rem;
      }
      .post-caption {
        padding: 0.8rem 1rem;
      }
      .post-user-avatar > img {
        border-radius: 50%;
        height: 40px;
      }
      .post-user-nickname > span {
        color: #7a33fb;
        padding-left: 0.5rem;
        font-weight: 500;
      }
      .responsive {
        width: 100%;
        height: auto;
      }
      .post-caption > .post-likes {
        color: #7a33fb;
        font-size: 1rem;
        font-weight: 500;
      }
      .post-caption > .post-likes > i {
        padding-right: 0.5rem;
      }
      .post-caption > .post-description {
        font-size: 0.8rem;
        padding: 0.5rem 0;
      }
      .post-caption > .post-comments {
        font-size: 0.7rem;
        color: #676767;
        cursor: pointer;
      }
      .post-image {
        position: relative;
      }
      .post-meta > .meta-info > span {
        display: block;
      }
      .post-meta > .meta-info > span:nth-child(1) {
        font-size: 0.9rem;
      }
      .post-meta > .meta-info > span:nth-child(2) {
        font-weight: 500;
        font-size: 1rem;
      }
      .post-meta > .favourite > span {
        display: block;
      }
      .post-meta {
        padding: 1rem;
        width: 100%;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
      }
    `}</style>
  </article>
);

export default Post;
