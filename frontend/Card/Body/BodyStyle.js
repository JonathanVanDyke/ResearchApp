import React from 'react';

import styled from 'styled-components';

const BodyPaint = styled.div({
  backgroundColor: 'white',
  padding: 10,
  margin: 10,
  fontSize: 20,
  color: 'black',
  width: 'auto',
  height: '80%',
  borderRadius: 10,
})

const BodyStyle = ({
  children
}) => {
  return (
    <BodyPaint>
      {children}
    </BodyPaint>
  );
};

export default BodyStyle;
