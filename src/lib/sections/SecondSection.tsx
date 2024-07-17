import Marque from '@/components/Marque';

const SecondSection = () => {
  return (
    <div className="z-20 mt-[2rem] flex h-[400px] w-full flex-col items-center justify-start border-red-600">
      <div className="mx-auto flex h-[600px] w-[80%] max-w-[1100px] flex-col items-start justify-center">
        <h1 className="text-start font-zeyada text-4xl font-bold uppercase">
          supported by these amazing brands
        </h1>
      </div>

      <div className="mx-auto flex w-[80%] max-w-[1100px]">
        <Marque />
      </div>
    </div>
  );
};

export default SecondSection;
