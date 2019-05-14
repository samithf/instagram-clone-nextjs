const Wrapper = props => (
  <div className="wrapper">
    {props.children}
    <style jsx>{`
      .wrapper {
        width: 100%;
        max-width: 1000px;
        height: 100%;
        background-color: green;
      }
      @media (min-width: 800px) {
        .wrapper {
          margin: 50px auto 0;
        }
      }
    `}</style>
  </div>
);

export default Wrapper;
