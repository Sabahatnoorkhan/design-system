import * as React from 'react';

export interface ITabProps {
  label: React.ReactNode;
}

export const Tab: React.FunctionComponent<ITabProps> = props => {
  const {
    children,
  } = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default Tab;
