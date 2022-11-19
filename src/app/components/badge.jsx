import React from "react";
import PropTypes from "prop-types";

const Badge = ({ roleInTeam }) => {
    const develop =
        "rounded-lg p-0 md:p-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l";
    const teamLeed =
        "rounded-lg p-0 md:p-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l";
    return (
        <div>
            <span className={roleInTeam === "Developer" ? develop : teamLeed}>
                {roleInTeam}
            </span>
        </div>
    );
};

Badge.propTypes = {
    roleInTeam: PropTypes.string.isRequired
};

export default Badge;
