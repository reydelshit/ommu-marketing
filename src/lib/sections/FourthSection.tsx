import Picture from '@/assets/images/sponsors/binghamton-university.svg';

const FourthSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto my-[2rem] flex w-[80%] max-w-[1100px] flex-col items-end justify-center py-[2rem]">
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

      <div className="clipHelp mx-auto my-[2rem] flex w-[90%] max-w-[1100px] flex-col items-center justify-start bg-[#FD7E40] py-[2rem]">
        <div className="mt-[5rem] w-[90%] border-b-2 border-black pb-[3rem]">
          <h1 className="font-zeyada text-3xl font-semibold">Who we help?</h1>
        </div>

        <div className="flex w-[90%]">
          <div className="mt-[4rem] w-[40%]">
            <div className="rounded-3xl bg-white p-8">
              <h1 className="my-4 font-recoleta text-3xl font-bold">K12</h1>
              <p className="text-sm leading-tight text-[#888]">
                We provide the most comprehensive approach to MTSS — helping
                schools quickly and proactively identify students in need and
                offer them personalized, targeted interventions. Through our
                platform, districts can implement data-driven decision making,
                progress monitoring, and evidence-based supports.
              </p>

              <a
                className="mt-[4rem] block font-semibold text-orange-500"
                href="#"
              >
                Learn more <span>{'>'}</span>
              </a>
            </div>
            <div className="mt-[1.5rem] rounded-3xl border-2 border-black p-6">
              <h1 className="font-recoleta text-4xl">Higher Ed</h1>
            </div>

            <div className="mt-[1.5rem] rounded-3xl border-2 border-black p-6">
              <h1 className="font-recoleta text-4xl">Higher Ed</h1>
            </div>

            <div className="mt-[1.5rem] rounded-3xl border-2 border-black p-6">
              <h1 className="font-recoleta text-4xl">Higher Ed</h1>
            </div>
          </div>

          <div>image here</div>
        </div>
      </div>

      <div className="mx-auto my-[4rem] mt-[8rem] flex h-[650px] w-[80%] max-w-[1100px] flex-col items-start justify-start">
        {' '}
        <h1 className="text-start font-zeyada text-2xl font-bold uppercase">
          Meet our world-class care experts
        </h1>
        <div className="mt-[50px] w-full border-l-2">
          <div className="w-[25rem] border-l-2">
            <h1 className="ml-10 font-recoleta text-4xl">
              A proprietary program, built by expert therapists who understand
              students.
            </h1>

            <p className="ml-10 mt-[4rem] text-sm leading-tight text-[#888]">
              All tbh groups are facilitated by licensed, culturally-competent
              therapists who have experience working with youth, adolescents,
              and college-aged students. Our proprietary program, rooted in the
              latest evidence-based therapeutic practices, provides students
              with a safe space to deal with life’s challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
