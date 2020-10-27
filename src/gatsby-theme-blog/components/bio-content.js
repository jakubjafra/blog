import React from 'react';
import { Styled } from 'theme-ui';

export default function Bio() {
  return (
    <div>
      This is where <Styled.a href="http://example.com/">your name</Styled.a>
      {` `}
      goes.
    </div>
  );
}
