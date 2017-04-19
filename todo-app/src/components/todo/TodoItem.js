import React from 'react';

import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  return (
    <li >
        <input type="checkbox" defaultChecked={props.isComplete}/>{props.name}
        </li>
  );
};

TodoItem.propTypes = {
  isComplete: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
