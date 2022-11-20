import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { socialIcons } from "../../../svgElements";
import parse from "html-react-parser";

const Contacts = ({ contacts }) => {
    const [socials, setSocials] = useState();
    useEffect(() => {
        if (contacts) {
            const arr = contacts.map((contact) => {
                const icon = socialIcons.find(
                    (icon) => icon.name === contact.name
                );
                if (icon) {
                    const path = icon.svg;
                    return { ...contact, svg: path };
                }
                return contact;
            });
            setSocials(arr);
        }
    }, []);

    return socials ? (
        <button className="contacts__icons">
            {socials.map((social) => (
                <a href={social.path} key={social.name}>
                    {parse(social.svg)}
                </a>
            ))}{" "}
        </button>
    ) : (
        ""
    );
};
//
Contacts.propTypes = {
    contacts: PropTypes.array
};
export default Contacts;
