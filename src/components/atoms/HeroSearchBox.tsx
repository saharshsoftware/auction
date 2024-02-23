import React, { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import CustomBadge from "./CustomBadge";
import ReactSelectDropdown from "./ReactSelectDropdown";
import axios from "axios";
import { Field, Form } from "formik";
import CustomFormikForm from "./CustomFormikForm";
import TextField from "./TextField";
import {
  CATEGORIES,
  ERROR_MESSAGE,
  POPULER_CITIES,
  STRING_DATA,
} from "../../shared/Constants";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../shared/Routes";
import { ItemRenderer, NoDataRendererDropdown } from "./NoDataRendererDropdown";
import { setDataInQueryParams } from "../../shared/Utilies";

const validationSchema = Yup.object({
  category: Yup.string().trim().required(ERROR_MESSAGE.CATEGORY_REQUIRED),
  location: Yup.string().trim().required(ERROR_MESSAGE.LOCATION_REQUIRED),
  bank: Yup.string().trim().required(ERROR_MESSAGE.BANK_REQUIRED),
  price: Yup.number()
    .required(ERROR_MESSAGE.PRICE_REQUIRED)
    .positive(ERROR_MESSAGE.PRICE_POSITIVE)
    .integer(ERROR_MESSAGE.PRICE_INTEGER),
});

const initialValues = {
  category: STRING_DATA.EMPTY,
  location: STRING_DATA.EMPTY,
  bank: STRING_DATA.EMPTY,
  price: STRING_DATA.EMPTY,
};

const gridElementClass = () => "lg:col-span-6 col-span-full";

const HeroSearchBox: React.FC = () => {
  const navigate = useNavigate();
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
    console.log(data);
    setData(data);
    setLoading(false);
  }

  const handleSubmit = (values: any) => {
    // console.log("/ Data received/", values);
    const data = setDataInQueryParams(values);
    // console.log("/ Encrypted/", data);
    navigate(`${ROUTE_CONSTANTS.AUCTION}?q=${data}`);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg flex flex-col gap-4 relative pb-12 shadow border">
        <CustomFormikForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          validationSchema={validationSchema}
          wantToUseFormikEvent={true}
        >
          {({ setFieldValue }: any) => (
            <Form>
              <div className="grid gap-4 grid-cols-12 w-full ">
                <div className={gridElementClass()}>
                  <TextField
                    label={"Categories"}
                    name={"category"}
                    hasChildren={true}
                  >
                    <Field name="category">
                      {() => (
                        <ReactSelectDropdown
                          noDataRenderer={NoDataRendererDropdown}
                          itemRenderer={ItemRenderer}
                          options={CATEGORIES}
                          placeholder={"Category"}
                          customClass="w-full "
                          onChange={(e) => {
                            setFieldValue("category", e?.[0]?.name);
                          }}
                        />
                      )}
                    </Field>
                  </TextField>
                </div>
                <div className={gridElementClass()}>
                  <TextField
                    label={"Location (City & State)"}
                    name={"location"}
                    hasChildren={true}
                  >
                    <Field name="location">
                      {() => (
                        <ReactSelectDropdown
                          noDataRenderer={NoDataRendererDropdown}
                          itemRenderer={ItemRenderer}
                          loading={loading}
                          options={dataF}
                          placeholder={"Neighborhood, City or State"}
                          customClass="w-full "
                          onChange={(e) => {
                            setFieldValue("location", e?.[0]?.name);
                          }}
                        />
                      )}
                    </Field>
                  </TextField>
                </div>
                <div className={gridElementClass()}>
                  <TextField
                    type="text"
                    name="bank"
                    label="Bank"
                    placeholder="Enter bank"
                  />
                </div>
                <div className={gridElementClass()}>
                  <TextField
                    type="text"
                    name="price"
                    label="Price"
                    placeholder="Enter price"
                  />
                </div>

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <ActionButton
                    isSubmit={true}
                    text={STRING_DATA.SEARCH.toUpperCase()}
                    customClass="w-full rounded-full btn-lg px-12"
                  />
                </div>
              </div>
            </Form>
          )}
        </CustomFormikForm>
        <label className="block text-sm font-medium text-gray-900 text-left">
          {STRING_DATA.POPULER_CITIES}
        </label>
        <div className="flex flex-wrap gap-2">
          {POPULER_CITIES.map((item) => (
            <CustomBadge label={item.label} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSearchBox;
