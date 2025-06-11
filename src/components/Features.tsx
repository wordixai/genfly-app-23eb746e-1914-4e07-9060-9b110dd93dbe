import { Clock, MapPin, Heart, Coffee } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description: "Sourced from the finest coffee beans around the world, roasted to perfection daily."
    },
    {
      icon: Heart,
      title: "Cozy Atmosphere",
      description: "A warm, welcoming space perfect for work, relaxation, or catching up with friends."
    },
    {
      icon: Clock,
      title: "Always Fresh",
      description: "Everything made fresh daily, from our pastries to our signature coffee blends."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Located in the heart of downtown, easily accessible and surrounded by local attractions."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Brewscape?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're more than just a coffee shop - we're your neighborhood gathering place where quality meets comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;