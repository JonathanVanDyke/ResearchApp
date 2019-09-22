import React from 'react'

import styled from 'styled-components';

const LinkPaint = styled.div({
  backgroundColor: '#39988f',
  borderRadius: 10,
  border: '2px dashed black'
})

const LinkStyle = ({
  children
}) => {
  return (
    <LinkPaint>
      {children}
    </LinkPaint>
  );
};

export default LinkStyle;
