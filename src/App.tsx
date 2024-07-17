import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Marque from './components/Marque';
import Picture from './assets/images/sponsors/binghamton-university.svg';
import OMMU from './assets/images/ommu.png';

function App() {
  return (
    <div className="flex h-full w-dvw flex-col items-center bg-[#F8F4F2]">
      <div className="flex h-full w-full flex-col items-center">
        <Header />

        <div className="mx-auto flex h-[600px] w-[80%] max-w-[1100px] flex-col items-start justify-start">
          <Main />
        </div>
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

        <div className="clipPlatform z-10 mt-[-230px] flex w-full flex-col items-center bg-white pt-[280px]">
          <div className="mx-auto mt-[5rem] flex h-[700px] w-[80%] max-w-[1100px] flex-col items-start justify-start">
            {' '}
            <h1 className="text-start font-zeyada text-2xl font-bold uppercase">
              One platform, multiple touchpoints.
            </h1>
            <div className="mt-[50px] w-full border-l-2">
              <div className="w-[30rem]">
                <h1 className="ml-10 font-recoleta text-4xl">
                  We support students, no matter what they're dealing with.
                </h1>

                <div className="mt-[50px] border-l-2 border-orange-500">
                  <div className="ml-10">
                    <h1 className="font-bold">
                      Personalized, therapist-led support groups
                    </h1>
                    <p className="my-[2rem] text-[#847E7C]">
                      Weekly virtual groups, consisting of 5-10 students and a
                      licensed clinician, custom-tailored to each student’s
                      needs, lived experiences, and personality type.
                    </p>
                    <ul className="ml-[5rem] list-disc text-[#847E7C]">
                      <li>
                        {' '}
                        Our program, rooted in the latest evidence-based
                        practices, helps students build an inclusive community
                        that understands the complexity of their experiences and
                        supports them as they move forward.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="ml-10 mt-[20px]">
                  <h1 className="font-bold">
                    Personalized, therapist-led support groups
                  </h1>
                </div>

                <div className="ml-10 mt-[20px]">
                  <h1 className="font-bold">
                    Personalized, therapist-led support groups
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="my-[5rem] flex h-[400px] w-full items-center justify-center p-4">
            <div className="mx-auto flex w-[80%] max-w-[1100px] flex-row items-start justify-between border-yellow-600">
              <div className="flex h-full flex-col justify-center border-blue-500">
                <span className="block text-xl font-semibold text-[#847E7C]">
                  Up to
                </span>
                <div className="flex items-center justify-center gap-4 text-7xl">
                  <h1 className="font-recoleta font-bold">10</h1>
                  <p className="pt-[1.5rem] font-zeyada font-bold">Students</p>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-[-2rem] block size-24 -rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                />
              </svg>

              <div className="flex h-full flex-col justify-center border-blue-500">
                <span className="block text-xl font-semibold text-[#847E7C]">
                  Meet
                </span>
                <div className="flex items-center justify-center gap-4 text-7xl">
                  <h1 className="font-recoleta font-bold">Once</h1>
                  <p className="pt-[1.5rem] font-zeyada font-bold">/week</p>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-[-2rem] block size-24 -rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                />
              </svg>

              <div className="flex h-full flex-col justify-center border-blue-500">
                <span className="block text-xl font-semibold text-[#847E7C]">
                  Up to
                </span>
                <div className="flex items-center justify-center gap-4 text-7xl">
                  <h1 className="font-recoleta font-bold">60</h1>
                  <p className="pt-[1.5rem] font-zeyada font-bold">Min</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  we’re all going through. tbh really helped me deal with my
                  anxiety and pressure to please other people. Also, the
                  sessions were so real. No BS.
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
              <h1 className="font-zeyada text-3xl font-semibold">
                Who we help?
              </h1>
            </div>

            <div className="flex w-[90%]">
              <div className="mt-[4rem] w-[40%]">
                <div className="rounded-3xl bg-white p-8">
                  <h1 className="my-4 font-recoleta text-3xl font-bold">K12</h1>
                  <p className="text-sm leading-tight text-[#888]">
                    We provide the most comprehensive approach to MTSS — helping
                    schools quickly and proactively identify students in need
                    and offer them personalized, targeted interventions. Through
                    our platform, districts can implement data-driven decision
                    making, progress monitoring, and evidence-based supports.
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
                  A proprietary program, built by expert therapists who
                  understand students.
                </h1>

                <p className="ml-10 mt-[4rem] text-sm leading-tight text-[#888]">
                  All tbh groups are facilitated by licensed,
                  culturally-competent therapists who have experience working
                  with youth, adolescents, and college-aged students. Our
                  proprietary program, rooted in the latest evidence-based
                  therapeutic practices, provides students with a safe space to
                  deal with life’s challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <footer className="clipFooter h-screen bg-[#1E1C1B] pt-[8rem]">
            <div className="mt-[4rem] flex items-center justify-around gap-4 border-white">
              <img className="h-[10rem] w-[20rem]" src={OMMU} alt="" />

              <h1 className="w-[70%] font-recoleta text-8xl font-bold text-white">
                <span className="font-zeyada">Footer</span> when you are gone,
                the pieces of my heart is missing you
              </h1>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
