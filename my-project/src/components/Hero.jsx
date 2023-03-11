import hero from '../assets/Hero.png'

export default function Hero() {
    return (
      <div className='md:my-9 my-4 md:grid grid-cols-2 px-3 md:px-9'>

        <div className='mb-3'>
            <div>
                <h1 className='md:text-5xl text-3xl py-9 px-3 font-semibold text-green-700'>The latest articles and Past questions to help you in your course.</h1>
            </div>
            <div className='px-3 text-lg'>
                <span >
                Master Web Development with amazing resources that are available for free! Join our Newsletter and get alerted when new articles, topics or courses are published.
                </span>
            </div>

            <div className='mt-7  px-3 text-lg'>
                <button className='px-6 py-3 bg-green-700 text-white rounded-lg'>Get Started </button>
            </div>

        </div>
        <div>
            <img src={hero} alt="" />
        </div>
        
      </div>
    )
  }