import React from 'react';
import Nav from '../components/nav';
import Button from '../components/button';
import Footer from '../components/footer';

const Aboutus: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <Nav />

      {/* About Hero Section */}
      <section id="about-hero" className="overflow-hidden bg-red-50 py-16">
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto space-y-10 md:space-y-0 md:space-x-12">
          <div className="flex flex-col space-y-6 w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-center md:text-left">
              About Us
            </h1>
            <p className="text-gray-700 text-center md:text-left">
              At Manage, we're passionate about building tools that help teams work more efficiently.
              Our mission is to simplify project management and improve productivity across organizations of all sizes.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button text="Learn More" style="p-3 px-6 pt-2 text-white bg-red-500 hover:bg-red-400" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src="img/illustration-intro.svg" alt="Team Collaboration Illustration" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Founded in 2020, Manage began with a simple idea: help teams focus on what matters most by removing the complexity from team collaboration.
            Over the years, we've grown from a small startup to a trusted solution for thousands of teams around the world.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">
                We believe in open communication and building trust through honesty.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
              <p className="text-gray-600">
                Simplicity is key in everything we do — from design to process.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Customer-First</h3>
              <p className="text-gray-600">
                We are dedicated to helping our customers succeed and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="bg-red-500 py-20">
        <div className="container flex flex-col md:flex-row items-center justify-between px-6 mx-auto space-y-8 md:space-y-0">
          <h2 className="text-4xl font-bold text-white text-center md:text-left">
            Meet the people behind Manage
          </h2>
          <Button text="Join Our Team" style="p-3 px-6 pt-2 text-red-500 bg-white hover:bg-gray-200" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutus;
