// function PosterMsg() {
//   const productListRedirect = () => {
//     console.log("Running");
//   };
//   return (
//     <>
//       <section className="container pro d-flex justify-content-evenly m-5">
//         <div className="section-msg">
//           <p className="text-danger">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
//             harum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Dicta, ullam!
//           </p>
//           <button onClick={productListRedirect}> Learn More</button>
//         </div>
//         <div className="section-img">
//           <img src="/images/img1.jpeg" width="400px" height="350px" />
//         </div>
//       </section>
//     </>
//   );
// }

// export default PosterMsg;
function PosterMsg() {
  const productListRedirect = () => {
    console.log("Running");
  };

  return (
    <>
      <section className="container pro d-flex justify-content-evenly align-items-center m-5">
        <div className="section-msg text-center">
          <h2
            className="fw-bold text-danger"
            style={{ fontSize: "28px", fontFamily: "serif" }}
          >
            Orah Blog
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#333",
              maxWidth: "400px",
              lineHeight: "1.6",
            }}
          >
            Discover home fragrance tips, repurposing ideas, ingredient
            spotlights, and more.
          </p>
          <button className="btn-blog" onClick={productListRedirect}>
            LEARN MORE
          </button>
        </div>
        <div className="section-img">
          <img
            src="/images/img1.jpeg"
            width="400px"
            height="350px"
            alt="Blog Image"
          />
        </div>
      </section>
    </>
  );
}

export default PosterMsg;
