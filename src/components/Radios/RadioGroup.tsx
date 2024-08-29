import { Radio, RadioGroupProps } from "antd";
import React from "react";

interface RadioValue {
  value: string;
  label: string;
}
type RadioProps = RadioGroupProps & {
  values: RadioValue[];
};

function RadioGroup(props: RadioProps) {
  const { values, ...otherProps } = props;

  return (
    <Radio.Group defaultValue={values?.[0].value} {...otherProps}>
      {values.map((d) => (
        <Radio.Button key={d.value} value={d.value}>
          {d.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}

export default RadioGroup;
