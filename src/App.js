import * as React from 'react';
import { useHttpClient } from './util/http-hook';
import Input from './components/Input';
import Button from './components/Button';
import './App.css';

function App() {
const [data, setData] = React.useState()
const [ratioMode, setRatioMode] = React.useState()
const [generatedImage, setGeneratedImage] = React.useState("https://picsum.photos/700/700")
const { isLoading, error, clearError, sendRequest} = useHttpClient()


const submitFormHandler = async event => {
    
}
const switchRatioHandler = () => {
  setRatioMode(prev => !prev);
}
if(isLoading) return <div className="dark:bg-slate-900 flex justify-center items-center min-h-screen h-full dark:text-white">Loading...</div>
  return (
    <div className="dark:bg-slate-900 p-5 flex flex-col  justify-center items-center min-h-screen h-full dark:text-white">
      
        <div className="w-full max-w-lg bg-slate-800 p-4 flex-col rounded-lg shadow-xl flex justify-start ">
          <div className="border-2 w-50 h-70 border-violet-900 rounded-md">
           
            <img src={generatedImage} className="rounded block h-full w-full object-cover" alt="generated by ai"/>

          
          </div>
          <div>
            <div className="h-5"></div>
            <form>
              <Input label="Insert your Prompt" placeholder="I wish i had..." />
              <Button>Submit</Button>
            </form>
          </div>

        </div>
    </div>
  );
}

export default App;
