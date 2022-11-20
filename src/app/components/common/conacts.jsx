import React from "react";
import PropTypes from "prop-types";

const Contacts = ({ contacts }) => {
    console.log(contacts);
    return (
        <ul className="text-[#8892b0] flex py-10">
            {contacts.map((cont) => {
                return (
                    <li key={cont.name}>
                        <a href={cont.path}>{cont.name}</a>
                    </li>
                );
            })}
        </ul>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired
};

export default Contacts;
