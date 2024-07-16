const Main = () => {
  return (
    <div className="container flex h-[800px] w-[80%] border-2 border-green-600">
      <div>
        <h1 className="font-zeyada mt-8 text-5xl font-bold uppercase">
          Small actions,{' '}
          <span className="font-recoleta block text-7xl font-extrabold tracking-wide">
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
  );
};

export default Main;
