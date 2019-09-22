import React from 'react';

import Card from './Card';
import CardStyle from './CardStyle';

const CardContainer = () => {
  const txt = 'The web platform has had a tremendous growth in recent times with the help of HTML5, WebGL, and the increased power of the current generation of devices. Now mobile devices and browsers are capable of delivering high-performing content both in 2D and 3D. The familiarity of JavaScript (JS) as a scripting language has also been a driving factor, after the demise of the Flash web platform. ';
  return (
    <Card 
      Cardstyle = {CardStyle}
      title={'Simple 3D Endless Runner'}
      img={'https://cms-assets.tutsplus.com/uploads/users/1605/posts/29157/final_image/roller-final.png'}
      links={'www.google.com'}
    >
      {txt}
    </Card>
  );
}

export default CardContainer;