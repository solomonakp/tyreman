import loadable from '@loadable/component';
import { PrerenderedComponent } from 'react-prerendered-component';
import React from 'react';
import Loader from '../components/layout/Loader';
// import { timeout } from 'promise-timeout';
// import pMinDelay from 'p-min-delay';
// import delay from 'delay';

export const prerenderedLoadable = (dynamicImport) => {
  const LoadableComponent = loadable(dynamicImport, {
    fallback: <Loader />,
  });

  return React.memo((props) => (
    <PrerenderedComponent live={LoadableComponent.load()}>
      <LoadableComponent {...props} />
    </PrerenderedComponent>
  ));
};
