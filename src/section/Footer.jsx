import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">© {new Date().getFullYear()} Voz | All Right Reserved</a>
        </div>
      </div>
      <div className="socials">
        {socialImgs.map((img, idx) => (
          <a href={img.url} className="icon " target="_blank" key={idx}>
            <img src={img.imgPath} alt={img.name} />
          </a>
        ))}
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-center md:text-end hidden">
          © {new Date().getFullYear()} Voz | All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer