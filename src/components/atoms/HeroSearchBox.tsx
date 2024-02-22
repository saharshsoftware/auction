import React, { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import CustomBadge from "./CustomBadge";
import ReactSelectDropdown from "./ReactSelectDropdown";
import axios from "axios";
import { Field, Form, Formik } from "formik";

const HeroSearchBox: React.FC = () => {
  const [dataF, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
    );
    setData(data);
    setLoading(false);
  }
  const noDataRenderer = () => {
    return (
      <p style={{ textAlign: "center" }}>
        <strong>Ooops!</strong> No data found
      </p>
    );
  };

  const itemRenderer: any = ({
    item,
    itemIndex,
    props,
    state,
    methods,
  }: {
    item: any;
    itemIndex: number;
    props: any;
    state: any;
    methods: any;
  }) => {
    return (
      <div key={item[props.valueField]} onClick={() => methods.addItem(item)}>
        <div className="m-2 text-lg text-left">
          {item.emoji} {item[props.labelField]}
        </div>
      </div>
    );
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="bg-white p-4 rounded space-y-2">
      <CustomBadge />
      <Formik initialValues={{ searchData: "" }} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form>
            <div className="grid gap-4 grid-cols-12 w-full">
              <div className="md:col-span-9 col-span-full flex items-center">
                <Field name="searchData">
                  {() => (
                    <ReactSelectDropdown
                      noDataRenderer={noDataRenderer}
                      itemRenderer={itemRenderer}
                      loading={loading}
                      dataF={dataF}
                      customClass="w-full search-form-controls"
                      onChange={(e) => {
                        console.log(e);
                        setFieldValue("searchData", e?.[0]?.name);
                      }}
                    />
                  )}
                </Field>
              </div>
              <div className="md:col-span-3 col-span-full flex items-center justify-end w-full">
                <ActionButton
                  isSubmit={true}
                  text={"Search"}
                  customClass="w-full"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HeroSearchBox;
