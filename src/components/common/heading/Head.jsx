const Head = () => {
  return (
    <>
      <section className="bg-gray text-white py-6"  style={{
          backgroundImage: "url('ap.img.png')",
          backgroundPosition: "right center",
          backgroundSize: "contain w-full sm:w-auto px-2 py-1",
        }}>
        <div className="container mx-auto flex justify-between items-center  px-4">
          <div className="logo text-2xl font-bold">
            <h1 className="flex items-baseline ">
            <span className="text-white">Sanjeed</span><span className="text-red-500">a!</span>
            </h1>
          </div>
          <div className="social flex space-x-4 ">
            
          <ul className="flex justify-center space-x-4 my-4">
            <li>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f text-white hover:text-blue-500"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-white hover:text-pink-500"></i>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube text-white hover:text-red-500"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-white hover:text-blue-400"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in text-white hover:text-blue-700"></i>
        </a>
      </li>
      </ul>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
