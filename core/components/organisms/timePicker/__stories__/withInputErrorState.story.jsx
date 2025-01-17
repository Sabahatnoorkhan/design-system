import * as React from 'react';
import { TimePicker, HelpText } from '@/index';
import { action } from '@/utils/action';
import { TimePickerWithInput } from '../TimePickerWithInput';

// CSF format story
export const withInputErrorState = () => {
  const inputFormat = 'hh:mm AM';

  const outputFormat = 'hh:mm';

  const onTimeChange = (val) => {
    return action(`updated time: ${val}`)();
  };

  return (
    <div className="w-25">
      <TimePicker
        key={`${inputFormat}${outputFormat}`}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        onTimeChange={onTimeChange}
        error={true}
      />
      <HelpText error={true} message={'Error message goes here.'} />
    </div>
  );
};

const customCode = `() => {
  const onTimeChange = (val) => {
    console.log(val);
  };

  return (
    <div className="w-25">
      <TimePicker
        inputFormat={'hh:mm AM'}
        outputFormat={'hh:mm AM'}
        onTimeChange={onTimeChange}
        error={true}
      />
      <HelpText error={true} message={'Error message goes here.'} />
    </div>
  );
}`;

export default {
  title: 'Date and Time/Timepicker/TimePickerWithInput/With Input Error State',
  component: TimePickerWithInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker',
      },
    },
  },
};
