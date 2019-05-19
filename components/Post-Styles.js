// used external css as it is getting bigger :)

import css from 'styled-jsx/css';

export default css`
  .post {
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
    cursor: pointer;
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
`;
