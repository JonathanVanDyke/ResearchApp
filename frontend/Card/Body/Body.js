import React from 'react';

const Body = (props) => {
  const BodyStyle = props.BodyStyle;
  return (
    <BodyStyle>
      {props.txt}
    </BodyStyle>
  )
};

export default Body;