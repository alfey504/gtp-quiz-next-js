import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full mt-52 flex flex-col items-center">
      <div className="text-center text-green font-bold text-3xl align-middle">DISCLAIMER</div>
      <div className="text-center text-white w-3/4 mt-5">
        Welcome to the quiz game powered by ChatGPT! We hope you have an enjoyable and engaging experience. 
        However, it's important to note that while we strive to provide accurate and reliable information, 
        there may be instances where the questions and answers generated by the AI could be incorrect or misleading. 
        This could be due to various reasons, such as the model's knowledge cutoff, limitations in understanding context, 
        or errors in processing the input. We recommend using the information provided as a starting point and cross-referencing 
        it with other reliable sources to ensure accuracy. Your understanding and participation in the game are highly appreciated, 
        and we encourage you to use your critical thinking skills throughout the quiz. If you come across any questionable content, 
        please exercise caution and verify the information independently. Let the quiz fun begin!
      </div>
      <a href='/game' className="bg-green p-2 pr-3 m-10 text-white rounded-2xl">GO TO GAME</a>
    </main>
  )
}
