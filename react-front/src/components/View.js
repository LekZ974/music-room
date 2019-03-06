import React from 'react';

import { View as NBView } from 'native-base';

const View = props => {
  return (
    <NBView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...props}
    />
  );
};
export default View;
