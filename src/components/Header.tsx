import Logo from '@/assets/images/ommu.png';
const Header = () => {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="mx-auto flex w-full max-w-[1255px] items-center justify-between p-4">
        <div className="flex items-center gap-10">
          <img className="w-20" src={Logo} alt="logo" />

          <div className="flex gap-4">
            <a
              className="font-semibold text-[#847E7C] hover:text-black uppercase"
              href="#sponsorship"
            >
              SPONSORSHIPS & PARTNERSHIPS
            </a>
     
            <a
              className="font-semibold text-[#847E7C] hover:text-black uppercase"
              href="#offer"
            >
             Offer
            </a>

            <a
              className="font-semibold text-[#847E7C] hover:text-black uppercase"
              href="#whatwedo"
            >
             What we do
            </a>

            <a
              className="font-semibold text-[#847E7C] hover:text-black uppercase"
              href="#help"
            >
             Who we help
            </a>
            <a
              className="font-semibold text-[#847E7C] hover:text-black uppercase"
              href="#teams"
            >
              teams
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="h-12 w-32 rounded-md bg-white font-semibold text-black uppercase">
            Login
          </button>
          <button className="h-12 w-32 rounded-md bg-[#FF7E3E] font-semibold">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
