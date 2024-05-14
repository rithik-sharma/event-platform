import * as React from "react"

const FeatureSection = () => {
  return (
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <div className="flex items-center gap-2"> {/* Flex container to align icon and heading */}
    <img src="/assets/icons/feature-icon.svg" alt="Feature Icon" className="w-10 h-10" /> {/* Small icon */}
    <h2 className="h2-bold">Features</h2> {/* Heading */}
  </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon="discover.svg"
          title="Discover Events"
          description="Explore and find exciting events tailored to your interests, location, and preferences."
        />
        <FeatureCard
          icon="creates.svg"
          title="Create Events"
          description="Easily create and manage your own events with our intuitive event creation tools."
        />
        <FeatureCard
          icon="ticket.svg"
          title="Get Ticket"
          description="Securely purchase tickets for your favorite events with hassle-free booking and management."
        />
        <FeatureCard
          icon="payment.svg"
          title="Secure payment"
          description="Enjoy peace of mind with our secure payment processing for all your ticket purchases."
        />

</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Additional cards */}
    <FeatureCard
      icon="update.svg"
      title="Update Events"
      description="Effortlessly modify event details and manage attendee information with our user-friendly event management tools."
    />
    <FeatureCard
      icon="login.svg"
      title="Secure Login"
      description="Safely access your account using Clerk authentication, ensuring the confidentiality of your personal information and providing peace of mind."
    />
  </div>
    </section>
  );
};

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
  }
  
  const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
      <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-transform duration-500 transform hover:-translate-y-2">
        <img src={`/assets/icons/${icon}`} alt={title} className="w-14 h-14 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };

export default FeatureSection;
