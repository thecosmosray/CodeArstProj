import React from 'react';
import Nav from '../components/nav';
import Button from '../components/button';
import Footer from '../components/footer';


const Home: React.FC = () => {


  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <Nav />


      {/* Hero Section */}
      <section id="hero" className="overflow-hidden">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-8 space-y-reverse md:space-y-0 md:space-x-12">
          <div className="flex flex-col mb-8 md:mb-32 space-y-6 md:space-y-12 w-full md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left mx-auto md:mx-0">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-gray-600 md:text-left mx-auto md:mx-0">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
             <Button text='Get Started' style={"p-3 px-6 pt-2 text-white bg-red-500 hover:bg-red-400 "}/>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="img/illustration-intro.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container flex flex-col px-4 mx-auto space-y-12 md:space-y-0 md:flex-row md:space-x-12">
          <div className="w-full md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left mx-auto md:mx-0">
              What's Different about Manage
            </h2>
            <p className="max-w-sm text-center text-gray-600 md:text-left mt-4 mx-auto md:mx-0">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product teams.
            </p>
          </div>

          <div className="flex flex-col space-y-8 w-full md:w-1/2">
            {/* Feature 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-red-50 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500 flex-shrink-0">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div className="md:flex-1">
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-gray-600">
                  See how your day-to-day tasks fit into the wider vision. Go from
                  tracking progress at the milestone level all the way down to the
                  smallest of details. Never lose sight of the bigger picture again.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-red-50 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500 flex-shrink-0">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>
              <div className="md:flex-1">
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-gray-600">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-red-50 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-red-500 flex-shrink-0">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div className="md:flex-1">
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-gray-600">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="max-w-6xl px-5 mx-auto text-center">
          <h2 className="text-4xl font-bold text-center mb-16">
            What They've Said
          </h2>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-50 w-full md:w-1/3">
              <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-gray-600">
                "Manage has supercharged our team's workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-50 w-full md:w-1/3">
              <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-gray-600">
                "We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-50 w-full md:w-1/3">
              <img src="img/avatar-richard.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-gray-600">
                "Manage has supercharged our team's workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated."
              </p>
            </div>
          </div>

          <div className="my-16 flex justify-center">
           <Button text='Get Started' style={"p-3 px-6 pt-2 text-white bg-red-500 hover:bg-red-400 "}/>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-red-500">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>
          <div>
            <Button text='Get Started' style={"p-3 px-6 pt-2 text-red-500 shadow-2xl bg-white hover:bg-gray-400 "}/>
           
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

      
    </div>
  );
};

export default Home;