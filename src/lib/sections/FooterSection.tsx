import OMMU from '@/assets/images/ommu.png';

const FooterSection = () => {
  return (
    <div className="w-full bg-white">
      <footer className="clipFooter h-screen bg-[#1E1C1B] pt-[8rem]">
        <div className="mt-[4rem] flex items-center justify-around gap-4 border-white">
          <img className="h-[10rem] w-[20rem]" src={OMMU} alt="" />

          <h1 className="w-[70%] font-recoleta text-8xl font-bold text-white">
            <span className="font-zeyada">Footer</span> when you are gone, the
            pieces of my heart is missing you
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
