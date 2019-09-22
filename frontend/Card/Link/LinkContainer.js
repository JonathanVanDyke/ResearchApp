import React from 'react';

import Link from './Link';
import LinkStyle from './LinkStyle';

const LinkContainer = (props) => {
  return (
    <LinkStyle>
      <Link
        links={props.links}
      />
    </LinkStyle>
  )
}

export default LinkContainer;