import React, { useState, useCallback, useRef } from 'react';
import AsyncSelect from 'react-select/async';
import ReactSelect from 'react-select';
import debounce from 'debounce-promise';
import classNames from 'classnames';
import { Icon } from '..';

const customizeSearch = _ => ({
  components: {
    DropdownIndicator: _ => <Icon className="search" icon="search" />
  },
  customStyles: {
    dropdownIndicator: base => ({ ...base, transition: 'all .2s ease' })
  }
});

const Search = ({
  id,
  async,
  isMulti,
  loadOptions,
  onChange,
  onInputChange,
  label,
  placeholder,
  options = [],
  className,
  value
}) => {
  const selectRef = useRef(null);
  const [active, setActive] = useState(false);
  const handleFocus = _ => setActive(true);
  const handleBlur = _ => setActive(false);
  const handleInputChange = input => onInputChange && onInputChange(input);
  const handleChange = value => {
    onChange && onChange({ id, value });
    selectRef.current.blur();
  };
  const emptyOptions = ({ inputValue }) => <div>{inputValue ? 'No Results Found' : 'Type To Search'}</div>;
  const Select = async ? AsyncSelect : ReactSelect;
  const memoizedLoadOptions = useCallback(debounce(loadOptions, 1000, { leading: true }), []);
  return (
    <>
      {label && <label>{label}</label>}
      <Select
        id={id}
        {...customizeSearch()}
        ref={selectRef}
        classNamePrefix="select"
        className={classNames('react-select', className, { active })}
        noOptionsMessage={emptyOptions}
        isSearchable
        isClearable
        loadOptions={memoizedLoadOptions}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInputChange={handleInputChange}
        onChange={handleChange}
        placeholder={placeholder}
        isMulti={isMulti}
        options={options}
        value={value}
      />
    </>
  );
};

export default Search;
