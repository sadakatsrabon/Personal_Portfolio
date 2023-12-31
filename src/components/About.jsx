const About = () => {
  return (
    <div
      name="about"
      className="w-full text-center h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sadakat-Description
          </p>
          <p className="mt-2 font-semibold text-teal-100">
            Read about -Developer Sadakat Hossain.
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a experienced web application developer, working in both- Front-End and Back-End
          programming. Excited for improving my skills and learning new
          technologies. I amm open to learn and work with any web technology and
          currently doing freelance gigs.
        </p>
        <p className="text-xl">
          I like to code matters from scratch and love the idea of bringing
          thoughts to life. Connect with me to get your project done. <br />{" "}
          I value minimalistic designs, thoughtful branding of the content, and
          customer relatable experience. Let’s discover together how we can make
          your project convert better! I enjoy creating or redesigning a distinct identity for a
          product or service, get more traffic from search engine and social
          platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
