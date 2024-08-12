import Picture from '@/assets/images/sponsors/binghamton-university.svg';

const FourthSection = () => {
  return (
    <div id='whatwedo' className="w-full bg-white">
      <div className="mx-auto my-[2rem] flex min-h-[1000px] w-[80%] max-w-[1100px] flex-col items-end justify-center">
        {' '}
        <div className="w-[53%] text-start">
          <h1 className="font-zeyada text-2xl font-bold uppercase">
            One platform, multiple touchpoints.
          </h1>
        </div>
        <div className="mt-[50px] flex w-full flex-col items-end justify-end">
          <div className="w-[580px] border-l-2">
            <h1 className="ml-10 font-recoleta text-4xl">
              It was so nice to get to know my teammates and talk about what
              we’re all going through. tbh really helped me deal with my anxiety
              and pressure to please other people. Also, the sessions were so
              real. No BS.
            </h1>
          </div>
          <div className="mt-[5rem] flex w-[580px] justify-between">
            <img className="w-[9rem]" src={Picture} alt="" />
            <div className="border-l-2 pl-4">
              <h1 className="font-bold text-orange-500">Jeanne K.</h1>
              <p className="font-bold">Student at Stanford</p>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default FourthSection;
