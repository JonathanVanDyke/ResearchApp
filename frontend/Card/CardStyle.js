import React from 'react';

import styled from 'styled-components';

const CardPaint = styled.div({
  display: "flex",
  flexWrap: 'wrap',
  flexDirection: 'columns',
  height: 600,
  width: 1000,
  fontSize: 30,
  fontFamily: 'Helvetica',
  color: 'Black',
  backgroundColor: '#4687b0',
  border: '3px solid black',
  fontFamily: 'Arial',
  fontWeight: 750,
  boxShadow: '5px 10px #888888',
  borderRadius: 10,
});

const CardStyle = ({
  children
}) => {
  return (
    <CardPaint>
      {children}
    </CardPaint>
  );
};

export default CardStyle;
