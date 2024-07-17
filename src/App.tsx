import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Marque from './components/Marque';

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

        <div className="clipPlatform z-10 mt-[-300px] flex w-full flex-col items-center bg-white pt-[280px] sm:mt-[-240px]">
          <div className="mx-auto flex w-[80%] max-w-[1100px] flex-col items-start justify-start">
            {' '}
            <h1 className="text-start font-zeyada text-4xl font-bold uppercase">
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

              {/* svg  */}
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
      </div>
    </div>
  );
}

export default App;
