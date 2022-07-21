
import React from "react";

export default function About() {
    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sadok.
            <br className="hidden lg:inline-block" />I am a (free)lancer software engineer.
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome, this is a simple website where I share my skills and previous projects that I have worked on. If find any of these projects interesting, want to work with me or simply contact me please don't hesitate.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Previous Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="profile picture"
            src="https://media-exp2.licdn.com/dms/image/C4E03AQGqGY5WUDM8Gg/profile-displayphoto-shrink_200_200/0/1658133802671?e=1663804800&v=beta&t=jXyxrzJWXlE55mChCq5bMnGg1etWNs8yOTX8ETAx5us"
          />
        </div>
      </div>
    </section>
    )
}