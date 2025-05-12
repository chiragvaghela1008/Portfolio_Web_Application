
import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt'
import ProfileImage from '../../assets/myimg.JPG';

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >

      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/*left side*/}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/*greetings */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/*name*/}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4  leading-tight'>
            Chirag Vaghela
          </h2>
          {/*skill heading with typing effect*/}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a Full Stack Developer,Java Developer
            </span>
            {/*
           <ReactTypingEffect
            text={[
              'Full Stack Developer',
              'Web Developer',
              'Java Developer',
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderee={(cursor) => {
              <span className='text-[#8245ec]'>{cursor}</span>
            }}
          ></ReactTypingEffect>
          */}
          </h3>
          {/*about me paragraph*/}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaced'>
            I am a Master of Computer Applications graduate with experience in full stack development.
            I completed training at Apponix Technologies in Bangalore,
            focusing on the MERN stack and Java-based technologies.
            During my internship at Hatkesh Infotech Pvt Ltd, I worked on an Accounting System using C# and ASP.NET.
            I have good knowledge of Front-end Development,Backend Development as well as Database.

            I enjoy building user-friendly web applications and solving technical problems.
          </p>

          {/*resume button*/}
          <a href='https://drive.google.com/file/d/161khOVLflZpCkTNpt8xZaYqz9oFDlC-p/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scaler'
            style={{
              background: 'linear-gradient(90dcg,#8245ec,#a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',

            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
        {/*right side image*/}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <div className='w-64 h-65'>
            <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 borde-purple-700 rounded-full'
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img src={ProfileImage} alt='chirag'
                className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
              ></img>
            </Tilt>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About; 