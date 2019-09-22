import React from 'react';

import Body from './Body';
import BodyStyle from './BodyStyle';

const BodyContainer = (props) => {
  const txt = props.txt
  // debugger
  return (
    <Body 
      BodyStyle = {BodyStyle}
      txt={txt}
    />
  );
}

export default BodyContainer;
