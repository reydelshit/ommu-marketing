const HeroSection = () => {
  return (
    <div className="mx-auto flex h-[600px] w-[80%] max-w-[1100px] flex-col items-start justify-start">
      <div className="flex h-[800px] items-center border-green-600">
        <div>
          <h1 className="mt-8 font-zeyada text-5xl font-bold uppercase">
            Small actions,{' '}
            <span className="block font-recoleta text-7xl font-extrabold tracking-wide">
              BIG IMPACT.
            </span>
          </h1>

          <p className="mt-8 w-[20rem] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            cupiditate molestiae tenetur dolorem eum fuga? Eum adipisci quia ad
            beatae.
          </p>

          <button className="mt-14 h-12 w-32 rounded-md bg-[#FF7E3E] font-semibold">
            Join now
          </button>
        </div>

        {/* <img src={OMMU} alt="" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
