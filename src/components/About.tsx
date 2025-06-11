const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2018, Brewscape began as a dream to create the perfect neighborhood coffee shop. 
              We believe that great coffee brings people together, creates connections, and makes every day a little brighter.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our expert baristas are passionate about their craft, sourcing the finest beans from sustainable farms 
              and roasting them to perfection. Every cup tells a story of dedication, quality, and community.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                <div className="text-gray-600">Coffee Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Brewscape cafe interior" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-amber-600">★★★★★</div>
              <div className="text-gray-600">5-Star Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;