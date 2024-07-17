import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Marque from './components/Marque';

function App() {
  return (
    <div className="flex h-full w-dvw flex-col items-center bg-[#F8F4F2]">
      <div className="flex h-full w-full flex-col items-center">
        <Header />

        <div className="flex h-[600px] w-full flex-col items-start justify-start border-yellow-600">
          <Main />
        </div>
        <div className="z-20 mt-[2rem] flex h-[400px] w-full flex-col items-center justify-start border-red-600">
          <div className="flex w-[80%] border-yellow-600 p-6">
            <h1 className="text-start font-zeyada text-4xl font-bold uppercase">
              supported by these amazing brands
            </h1>
          </div>

          <div className="w-[80%] p-4">
            <Marque />
          </div>
        </div>

        <div className="clipPlatform z-10 mt-[-300px] flex w-full flex-col items-center bg-white pt-[280px] sm:mt-[-240px]">
          <div className="w-[80%] p-4">
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

          <div className="my-[5rem] h-[20rem] w-full border-2 p-4">
            <h1 className="text-start font-zeyada text-4xl font-bold uppercase">
              One platform, multiple touchpoints.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
