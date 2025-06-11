import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to see you! Come experience the perfect cup of coffee in our welcoming atmosphere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-300">123 Coffee Street<br />Downtown District<br />City, ST 12345</p>
          </div>
          
          <div className="text-center">
            <Phone className="h-8 w-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">(555) 123-BREW<br />(555) 123-2739</p>
          </div>
          
          <div className="text-center">
            <Clock className="h-8 w-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Hours</h3>
            <p className="text-gray-300">Mon-Fri: 6:30am - 8:00pm<br />Sat-Sun: 7:00am - 9:00pm</p>
          </div>
          
          <div className="text-center">
            <Mail className="h-8 w-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300">hello@brewscape.com<br />info@brewscape.com</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;