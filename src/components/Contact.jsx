import React from "react";

function Contact() {
  return (
    <div className="flex flex-1 justify-center items-start md:items-start bg-transparent pt-12 text-white h-[90vh] mt-16">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">Why u need me ?</h1>
        <p className="text-xl">want to hire, email me.</p>
        <a
          href="https://mail.google.com/"
          class="text-blue-400  hover:text-blue-500 text-md animate animate-pulse"
        >
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-white to-pink-400 text-transparent relative">
            ratna.amulya98@gmail.com
          </span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
