const Post = () => (
  <article className="post">
    <header>
      <div className="post-user">
        <div className="post-user-avatar">
          <img
            src="http://www.gravatar.com/avatar/77a87ca05717403d2813164fd079c4ba?s=200&r=pg"
            alt="image"
          />
        </div>
        <div className="post-user-nickname">
          <span>samith556</span>
        </div>
      </div>
    </header>
    <div className="post-image">
      <div className="post-image-bg">
        <img
          className="responsive"
          alt="no"
          src="https://img5.goodfon.com/original/800x480/1/33/kotionok-malysh-zabor-boke.jpg"
        />
      </div>
    </div>
    <div className="post-caption">
      <strong>
        The design should be mobile-first, and on the desktop version the bottom
        menu should instead be on top; with the labels
      </strong>{' '}
      SSSS
    </div>

    <style jsx>{`
      .post {
        // padding: 1rem;
      }
      .post-user {
        display: flex;
        align-items: center;
        align-content: center;
        padding: 1rem;
      }
      .post-caption {
        padding: 1rem;
      }
      .post-user-avatar > img {
        border-radius: 50%;
        height: 40px;
      }
      .post-user-nickname > span {
        color: #f17367;
        padding-left: 0.5rem;
        font-weight: 500;
      }
      .responsive {
        width: 100%;
        height: auto;
      }
    `}</style>
  </article>
);

export default Post;
