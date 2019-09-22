import React from 'react';

const Link = (props) => {
  const links = props.links;
  return (
    <div>
    <h1>Links/Sources</h1>
    <ul>
      <li>
        {links}
      </li>
    </ul>
    </div>
  );
}

export default Link;