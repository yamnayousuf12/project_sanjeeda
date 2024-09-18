const Head = () => {
  return (
    <>
      <section className="bg-gray text-white py-6"  style={{
          backgroundImage: "url('ap.img.png')",
          backgroundPosition: "right center",
          backgroundSize: "contain w-full sm:w-auto px-2 py-1",
        }}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo text-2xl font-bold">
            <h1 className="flex items-baseline">
              Sanjeed<span className="text-red-600">a!</span>
            </h1>
          </div>
          <div className="social flex space-x-4 ">
            
              <i className="fab fa-facebook-f text-lg text-black hover:text-white"></i>
            
           
              <i className="fab fa-instagram text-lg text-black hover:text-white"></i>
            
            
              <i className="fab fa-twitter text-lg text-black hover:text-white"></i>
            
            
              <i className="fab fa-youtube text-lg text-black hover:text-white"></i>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
