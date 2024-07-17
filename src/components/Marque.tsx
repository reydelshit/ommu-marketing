import SPONSOR1 from '@/assets/images/sponsors/binghamton-university.svg';
import SPONSOR2 from '@/assets/images/sponsors/boston-college.svg';
import SPONSOR3 from '@/assets/images/sponsors/george-washington-university.svg';
import SPONSOR4 from '@/assets/images/sponsors/new-york-university.svg';
import Marquee from 'react-fast-marquee';

const Marque = () => {
  return (
    <Marquee
      autoFill
      className="my-4 flex h-[15rem] gap-4 rounded-xl bg-white p-8 shadow-2xl"
    >
      {/* {[...Array(10)].map((_, i) => (
        <div key={i} className="ml-8 text-2xl font-semibold text-[#74512D]">
          OMMU COMMUNITY
        </div>
      ))} */}

      <div className="flex items-center gap-[4rem]">
        <img className="block h-full w-[8rem]" src={SPONSOR1} alt="" />
        <img className="block h-full w-[8rem]" src={SPONSOR2} alt="" />
        <img className="block h-full w-[8rem]" src={SPONSOR3} alt="" />
        <img className="block h-full w-[8rem]" src={SPONSOR4} alt="" />
      </div>
    </Marquee>
  );
};

export default Marque;
