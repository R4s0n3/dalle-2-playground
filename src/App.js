import * as React from 'react';
import { useHttpClient } from './util/http-hook';
import Input from './components/Input';
import LoadingSpinner from './components/LoadingSpinner';
import {useForm} from './util/form-hook';
import Button from './components/Button';
import { VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH } from './util/validators';
import ratios from './util/ratios';
import './App.css';

export default function App() {

const [ formState, inputHandler ] = useForm({
  prompt:{
    value:"",
    isValid:false
  }
},false)
const defaultRatio = ratios[0];
const [ratio, setRatio] = React.useState(defaultRatio)
const [generatedImage, setGeneratedImage] = React.useState()
const { isLoading, error, clearError, sendRequest} = useHttpClient()

const imageStyle = {
  
  maxHeight:420,
  aspectRatio: ratio.ratio

}

const submitFormHandler = async event => {
  event.preventDefault()
  
  try{

      const responseData = await sendRequest("https://api.openai.com/v1/images/generations",
      'POST',
      JSON.stringify({

        prompt: formState.inputs.prompt.value,
        n:1,
        size: "512x512"

      }),
      {

        'content-type': 'application/json',
        Authorization: "Bearer " + process.env.REACT_APP_API_KEY
        
      })
      
      setGeneratedImage(responseData.data[0].url)
      
    }catch(e){}
}

const switchRatioHandler = (e) => {
  e.preventDefault()
  console.log(e.target.id)
  const ratioTitle = e.target.id;
  const ratioToSet = ratios.filter(a => a.title === ratioTitle)
  setRatio(ratioToSet[0]);
}

if(error) return <div className='dark:bg-slate-900 p-5 flex flex-col  justify-center items-center min-h-screen h-full dark:text-white'>
  <p>{error}</p>
  <Button onClick={clearError}>OK</Button></div>

return (
    <div className="dark:bg-slate-900 p-5 flex flex-col  justify-center items-center min-h-screen h-full dark:text-white">
     
      <h1 className="text-xl lg:text-5xl">✨ Magic AI Image Generator 2</h1>
      <div className="h-10"></div>
        <div className="w-full max-w-lg dark:bg-slate-800 p-4 flex-col  rounded-lg shadow-xl flex justify-start ">
          <div style={{height:420}} className="w-full rounded-md flex items-center justify-center">
           {isLoading && <LoadingSpinner />}
           {!isLoading && <img src={generatedImage || "https://cdn.discordapp.com/attachments/1021587013314551859/1041489478994362368/img.png"} style={imageStyle} className={"rounded block object-cover border-2 border-violet-800"} alt="generated by ai"/>}

          </div>
          <div>
            <div className="h-5"></div>
            <h5 className="text-violet-800">Choose Ratio</h5>
            <div id="settings" className='flex w-full justify-start'>
              {ratios.map((b, i) => <Button key={i} id={b.title} onClick={switchRatioHandler}>{b.title}</Button>)}
            </div>
            <form onSubmit={submitFormHandler}>
              <Input
              id="prompt"
              element="input"
              label="Insert your Prompt"
              placeholder="I wish I had a graphic of..."
              onInput={inputHandler}
              validators={[ VALIDATOR_MAXLENGTH(80), VALIDATOR_MINLENGTH(3)]}
              errorText="Please insert a valid prompt ( min. 3 - max. 80 tokens )"
              />
             
              <div className='flex w-full justify-between mt-2'>
              <Button disabled={isLoading} className={isLoading && "border-violet-300 bg-slate-400"} type="submit">{isLoading ? "Generating..." : "Generate"}</Button>
              </div> 
            </form>
          </div>

        </div>
    </div>
  );
}