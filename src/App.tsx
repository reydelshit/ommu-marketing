import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Marque from './components/Marque';

function App() {
  return (
    <div className="flex h-full w-dvw flex-col items-center bg-[#F8F4F2]">
      <div className="flex h-full w-full flex-col items-center">
        <Header />

        <div className="flex h-screen w-full flex-col items-start justify-start border-2 border-yellow-600">
          <Main />
          <div className="mt-[2rem] flex h-[400px] w-full flex-col items-center justify-start border-2 border-red-600">
            <div className="flex w-[80%] border-2 border-yellow-600 p-6">
              <h1 className="font-zeyada text-start text-4xl font-bold uppercase">
                supported by these amazing brands
              </h1>
            </div>

            <Marque />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
