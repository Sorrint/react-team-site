import { FaGithub } from "react-icons/fa";
import React from "react";

const SocialIcon = () => {
    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a
                        className="flex justify-between items-center w-full text-gray-300"
                        href="https://github.com/Sorrint/react-team-site"
                    >
                        Github <FaGithub size={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialIcon;
