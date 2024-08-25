import Layout from "./layout";
import Image from "next/image";
import Navbar from "../../src/app/components/Navbar" 
import "../app/globals.css";
import Marquee from "./components/marquee";

const HomePage = () => {
  return (
    <Layout>
      {/* Navigation */}
      <Navbar />

      {/* Header Section */}
      <header className="text-white py-20" style={{ backgroundColor: "#080C0A" }}>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          
          <div className="mb-6 lg:mb-0 lg:flex-1 lg:flex lg:justify-center">
            <Image src="/images/group.svg" alt="Kpop Group" width={1500} height={300} />
          </div>
          
          <div className="text-center lg:text-left lg:flex-1">
            <h1 className="text-4xl font-bold">SBS MTV The Kpop Show Ticket Package</h1>
            <p className="mt-4 text-xl">
              Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording!
            </p>
            <div className="mt-6">
              <button className="px-6 py-3 bg-pink-500 rounded text-white">Get Ticket</button>
              <button className="ml-4 px-6 py-3 border border-white rounded text-white">Learn More</button>
            </div>
          </div>
          
        </div>
      </header>

      {/* Upcoming Events Section */}
      <section className="container mx-auto mt-10 p-4" style={{backgroundColor:"#18251F"}}>
        <h2 className="text-2xl font-bold mb-4 ">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
          <div className=" shadow rounded m-5 p-5" style={{backgroundColor:"#080C0A"}}>
            <Image src="/images/event-img1.svg" alt="Event" width={1200} height={200} />
            <h3 className="text-2xl font-bold mt-4">Wonder Girls 2010 Tour</h3>
            <p>San Francisco - April 14</p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>

          <div className=" shadow rounded m-5 p-5" style={{backgroundColor:"#080C0A"}}>
            <Image src="/images/event-img.svg" alt="Event" width={1200} height={200} />
            <h3 className="text-2xl font-bold mt-4">Wonder Girls 2010 Tour</h3>
            <p>San Francisco - April 14</p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>

          <div className=" shadow rounded m-5 p-5" style={{backgroundColor:"#080C0A"}}>
            <Image src="/images/event-img2.svg" alt="Event" width={1200} height={200} />
            <h3 className="text-2xl font-bold mt-4">Wonder Girls 2010 Tour</h3>
            <p>San Francisco - April 14</p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>
          </div>
          <div>
          <div className=" shadow rounded m-5 p-5" style={{backgroundColor:"#080C0A"}}>
            <Image src="/images/event-img2.svg" alt="Event" width={1200} height={200} />
            <h3 className="text-2xl font-bold mt-4">Wonder Girls 2010 Tour</h3>
            <p>San Francisco - April 14</p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>

          <div className=" shadow rounded m-5 p-5" style={{backgroundColor:"#080C0A"}}>
            <Image src="/images/event-img1.svg" alt="Event" width={1200} height={200} />
            <h3 className="text-2xl font-bold mt-4">Wonder Girls 2010 Tour</h3>
            <p>San Francisco - April 14</p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>

          <div className=" shadow rounded m-5 p-5" style={{backgroundColor:"#080C0A"}}>
            <Image src="/images/event-img.svg" alt="Event" width={1200} height={200} />
            <h3 className="text-2xl font-bold mt-4">Wonder Girls 2010 Tour</h3>
            <p>San Francisco - April 14</p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>
          </div>
        <div>
        <div className=" shadow rounded m-5 p-5" style={{backgroundColor:"#080C0A"}}>
            <Image src="/images/event-img.svg" alt="Event" width={1200} height={200} />
            <h3 className="text-2xl font-bold mt-4">Wonder Girls 2010 Tour</h3>
            <p>San Francisco - April 14</p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>

          <div className=" shadow rounded m-5 p-5" style={{backgroundColor:"#080C0A"}}>
            <Image src="/images/event-img2.svg" alt="Event" width={1200} height={200} />
            <h3 className="text-2xl font-bold mt-4">Wonder Girls 2010 Tour</h3>
            <p>San Francisco - April 14</p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>

          <div className=" shadow rounded m-5 p-5" style={{backgroundColor:"#080C0A"}}>
            <Image src="/images/event-img1.svg" alt="Event" width={1200} height={200} />
            <h3 className="text-2xl font-bold mt-4">Wonder Girls 2010 Tour</h3>
            <p>San Francisco - April 14</p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>
        </div>
        </div>
        <div className="flex justify-center items-center">
  <button className="border p-2 shadow rounded">Load More</button>
</div>

        
      </section>
      <section className="container mx-auto mt-10 p-5 mb-8 lg:flex lg:items-center">
  <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
    <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
      <Image src="/images/ill.svg" alt="illustration" width={300} height={300} />
    </div>
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h3 className="text-2xl lg:text-3xl font-bold mb-4">Make your own Event</h3>
      <p className="mb-6">Lorem ipsum dolor sit amet eligendi totam qui porro, ea sunt eum.</p>
      <button className="border bg-pink-500 p-3 rounded">Create Events</button>
    </div>
  </div>
</section>


      <section className="brands text-center "style={{ backgroundColor: "#080C0A" }}>
        <h2 className="text-3xl">Join these brands</h2>
        <p>We`ve had the pleasure of working with industry-defining brands. These are just some of them.</p>
        <div>
          <Marquee />
        </div>
      </section>

      {/* Additional Sections like Blog, Join Brands, Footer, etc. */}
    </Layout>
  );
};

export default HomePage;
