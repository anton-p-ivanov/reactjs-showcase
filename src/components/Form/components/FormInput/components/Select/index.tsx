import React, { useEffect, useState } from 'react';

import defaults from './defaults';
import styles from './styles.module.scss';

import type { TSelectOptions, TSelectProps } from './types';

const Select = React.forwardRef<HTMLSelectElement, TSelectProps>(({ field }, ref) => {
  const {
    name,
    onChange,
    value = '',
    isDisabled = false,
    attrs = defaults,
  } = field;

  const {
    optionsCallback,
    placeholder,
    size,
    isMultiple = false,
  } = attrs;

  const [options, setOptions] = useState<TSelectOptions>([]);

  useEffect(() => setOptions(attrs.options || []), [attrs.options]);

  useEffect(() => {
    if (typeof optionsCallback === 'function') {
      optionsCallback()
        .then((response) => setOptions(response))
        .catch(() => setOptions([]));
    }

    return () => setOptions([]);
  }, [optionsCallback]);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Array.from(target.selectedOptions).map((option) => option.value);
    if (selectedValue.length > 0) {
      return onChange && onChange(isMultiple ? selectedValue : (selectedValue.shift() || ''));
    }

    return onChange && onChange(isMultiple ? [] : '');
  };

  return (
    <select
      className={styles.input}
      name={name}
      value={(isMultiple && !Array.isArray(value)) ? [value] : value}
      disabled={isDisabled}
      multiple={isMultiple}
      onChange={onChangeHandler}
      size={size}
      ref={ref}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option value={option.value} disabled={option.isDisabled} key={`option-${name}-${option.value}`}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';

export type { TSelectOption, TSelectOptions } from './types';

export default Select;
