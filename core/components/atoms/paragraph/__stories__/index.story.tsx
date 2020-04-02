import * as React from 'react';
import { optionsKnob } from '@storybook/addon-knobs';
import Paragraph from '../index';
import { docPage } from '@/utils/docPage';

// CSF format story
export const all = () => {
  const appearance = optionsKnob(
    'appearance',
    { white: 'white', destructive: 'destructive', subtle: 'subtle', disabled: 'disabled' },
    undefined,
    {
      display: 'inline-radio'
    }
  );
  const options = {
    appearance
  };

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Paragraph {...options}>
        Paragraph <b>component</b> have different varients, look for options in knobs tab.
      </Paragraph>
    </div>
  );
};

const title = 'Atoms|Typography/Paragraph';

export default {
  title,
  component: Paragraph,
  parameters: {
    docs: {
      page: () => docPage({ title })
    }
  }
};
