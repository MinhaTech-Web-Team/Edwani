import ContactSection from "../components/ContactSection";
import TransparentNavbar from "../components/TransparentNavbar";

const ContactUs = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      <div className="relative">
        <div
          className="relative w-full bg-cover bg-center h-[500px] md:min-h-screen flex flex-col"
          style={{
            backgroundImage: `url(/contactusbg2.jpg)`,
          }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#2387C0]/60"></div>
          <div className="w-full">
            <TransparentNavbar />
          </div>

          {/* Content Card with Safe Padding */}
          <div className="flex-1 flex justify-center items-center px-4 sm:px-6">
            <div
              className="flex flex-col justify-center items-center text-center 
                        bg-white/80 backdrop-blur-lg 
                        rounded-lg md:rounded-xl 
                        shadow-lg
                        w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl
                        h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[220px]
                        p-6 sm:p-8 md:p-12
                        mx-2 sm:mx-4"
            >
              <h2 className="text-[#2387C0] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight break-words w-full">
                Contact Us
              </h2>

              <p className="text-stone-900 font-semibold text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-snug mt-2 break-words">
              Edwani Contracting 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section with Proper Container */}

      <ContactSection />
    </div>
  );
};

export default ContactUs;
