const ConsultationSection = () => {
  return (
    <section className="relative w-full h-[900px] overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F9368547c86574032adfc723736c103f0?format=webp&width=800"
          alt="Modern architectural building"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center px-4 py-8 md:px-8 lg:px-16 xl:px-24 h-full" />
    </section>
  );
};

export default ConsultationSection;
