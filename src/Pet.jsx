import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Pet = ({ name, color }) => (
    <Fragment>
        <h2>your name: {name} - color: {color}
        </h2>
    </Fragment>
);

Pet.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Pet;
