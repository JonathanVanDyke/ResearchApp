import React from 'react';

import Body from './Body';
import Link from './Link';

const Card = (props) => {
  // debugger
  const CardStyle = props.Cardstyle;
  const title = props.title;
  const img = props.img;
  const txt = props.children;
  const links = props.links;

  const imgStyle = {
    paddingTop: 50,
    width: '90%',
    height: 'auto',
    borderRadius: 10,
  }

  const left = {
    width: '50%',
    margin: 10,
  }
  const right = {
    width: '50%',
    margin: 10,
  }
  const bottom = {
    padding: 10,
    width: "100%"
  }
  const top = {
    display: 'flex',
    flexDirection: 'rows',
    width: '100%',
  }




  return (
    <CardStyle>
      <section style={top}>
        <section style={left}>
          <img style={imgStyle} src={img} alt="" />
        </section>
        <section style={right}>
          {title}
          <Body
            txt={txt}
          />
        </section>
      </section>
      <section style={bottom}>
        <Link 
          links={links}
        />
      </section>
    </CardStyle>
  );
}

export default Card;
