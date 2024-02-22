import React from "react";
import Select from "react-dropdown-select";
import { IReactSelectDropdown } from "../../interfaces/ReactDropdown";

const ReactSelectDropdown: React.FC<IReactSelectDropdown> = (props) => {
  const {
    options,
    loading,
    noDataRenderer,
    itemRenderer,
    customClass,
    name = "",
    onChange = () => {},
    placeholder,
  } = props;

  return (
    <>
      <div style={{ width: "100%" }}>
        <Select
          multi={false}
          className={`rounded select-dropdown ${customClass ?? ""}`}
          options={options}
          loading={loading}
          disabled={loading}
          searchBy="name"
          name={name}
          labelField="name"
          valueField="id"
          searchable={true}
          values={[]}
          dropdownHandle={false}
          onChange={onChange}
          placeholder={placeholder}
          noDataRenderer={noDataRenderer}
          itemRenderer={itemRenderer}
        />
      </div>
    </>
  );
};

export default ReactSelectDropdown;
