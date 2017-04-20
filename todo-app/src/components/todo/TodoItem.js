import React from 'react';

import PropTypes from 'prop-types';
import {partial} from './../../lib/utils.js';

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  const handleRemove = partial(props.handleRemove, props.id);
  const activeClass = props.isComplete === true ? 'activeClass' : '' ;
  return (
    <li className={activeClass}>
      <span className='delete-item'><a href='#' onClick={handleRemove}>X</a></span>
        <input type="checkbox" onChange={handleToggle} checked={props.isComplete}/>{props.name}
        </li>
  );
};

TodoItem.propTypes = {
  isComplete: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
