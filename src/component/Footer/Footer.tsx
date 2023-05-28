import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container flex flex-col p-4 mx-auto divide-gray-400 md:p-8 lg:flex-row">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <p>@2023. All Right Reserved</p>
          </ul>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <Link href="https://www.instagram.com/">
                <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-green-400 dark:text-gray-900 hover:bg-green-400">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </Link>

              <Link href="https://www.linkedin.com/in/bhuvaneshwaran05">
                <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-green-400 dark:text-gray-900 hover:bg-green-400">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </Link>

              <Link href="https://github.com/">
                <div className="flex items-center justify-center invisible w-2 h-2 rounded-full sm:w-10 sm:h-10 dark:bg-green-400 dark:text-gray-900 hover:bg-green-400 ">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
