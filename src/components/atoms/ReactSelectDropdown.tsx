import React from "react";
import Select from "react-dropdown-select";
import { IReactSelectDropdown } from "../../interfaces/ReactDropdown";

const ReactSelectDropdown: React.FC<IReactSelectDropdown> = (props) => {
  const {
    dataF,
    loading,
    noDataRenderer,
    itemRenderer,
    customClass,
    name = "",
    onChange = () => {},
  } = props;

  return (
    <>
      <div style={{ width: "100%" }}>
        <Select
          multi={false}
          className={`rounded select-dropdown ${customClass ?? ""}`}
          options={dataF}
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
          placeholder={"Neighborhood, City or State"}
          noDataRenderer={noDataRenderer}
          itemRenderer={itemRenderer}
        />
      </div>
    </>
  );
};

export default ReactSelectDropdown;
