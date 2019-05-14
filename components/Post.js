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
          <span>Love and Happy</span>
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
      <strong>AAA</strong> SSSS
    </div>

    <style jsx>{`
      .responsive {
        width: 100%;
        height: auto;
      }
    `}</style>
  </article>
);

export default Post;
