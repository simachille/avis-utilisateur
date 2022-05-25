import React, {useRef, useState} from 'react';

function App() {
  const positiveWords = "Vous avez apprecié ? Nous allons le garder tel quel";
  const negativeWords = "vous n'avez pas apprecié nous allons nous amméliorer";
  const neutralWords = "vous n'avez pas d'avis ... nous allons nous amméliorer";
  const inputRef = useRef();
  const [positive, setPositive] = useState();
  const [userSentiment, setUserSentiment] = useState();

  const getSentiment = (sentence) => {
    if (!sentence.trim()) {
        return 0
    }

    return sentence.indexOf('super') < 0 ? -1 : 1
}
  const handleSentiment = () => {
      const {current: {value}} = inputRef;
      
      const result = getSentiment(value);
      if (result === -1) {setPositive(-1);setUserSentiment(negativeWords) }
      if (result === 0) {setPositive(0);setUserSentiment(neutralWords) }
      if (result === 1) {setPositive(1);setUserSentiment(positiveWords) }
  }
  return (
    <div className='flex flex-col  min-h-screen justify-center items-center bg-cyan-600 text-white'>
      <div className='w-96 mx-auto text-2xl'>
        <input type="text" ref={inputRef} className="form-input px-4 py-3 w-full text-center text-slate-700 text-2xl" placeholder='Merci de donner votre avis' />
        <button type='click' className='block bg-blue-600 text-white w-full p-2 mt-2 font-extralight' onClick={handleSentiment}>Enregistrer</button>
        {userSentiment ? <p className={` text-white font-extralight text-md p-2 text-center ${positive === 1 && 'bg-green-600'} ${positive === 0 && 'bg-orange-400'}  ${positive === -1 && 'bg-red-600'}`}>{userSentiment}</p> : null}
      </div>
    </div>
  );
}

export default App;
