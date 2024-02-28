/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  ERROR_MESSAGE,
  RANGE_PRICE,
  STRING_DATA,
} from "../../shared/Constants";
import { useLocation } from "react-router-dom";

import { getDataFromQueryParams } from "../../shared/Utilies";
import useModal from "../../hooks/useModal";
import CustomModal from "../atoms/CustomModal";
import CustomFormikForm from "../atoms/CustomFormikForm";
import { Form } from "formik";
import TextField from "../atoms/TextField";
import ActionButton from "../atoms/ActionButton";
import * as Yup from "yup";

const gridElementClass = () => "lg:col-span-3 md:col-span-6 col-span-full";
const validationSchema = Yup.object({
  category: Yup.string().trim().required(ERROR_MESSAGE.CATEGORY_REQUIRED),
  location: Yup.string().trim().required(ERROR_MESSAGE.LOCATION_REQUIRED),
  bank: Yup.string().trim().required(ERROR_MESSAGE.BANK_REQUIRED),
  price: Yup.number()
    .required(ERROR_MESSAGE.PRICE_REQUIRED)
    .positive(ERROR_MESSAGE.PRICE_POSITIVE)
    .integer(ERROR_MESSAGE.PRICE_INTEGER),
});

const FindAuction: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { showModal, openModal, hideModal } = useModal();
  const [initialValueData] = useState<any>(
    structuredClone(getDataFromQueryParams(searchParams.get("q") ?? ""))
  );

  const [isMobileView, setIsMobileView] = useState({
    mobileView: false,
    isOpenTopbar: false,
  });

  const handleSubmit = () => {
    console.log("asfasd");
  };
  const handleResize = () => {
    setIsMobileView((prev) => ({
      ...prev,
      mobileView: window.innerWidth < 768,
    })); // Assuming mobile view below 768px width
  };
  useEffect(() => {
    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderData = () => {
    if (!isMobileView.mobileView) {
      return <div className="common-section">{renderForm()}</div>;
    }
    return (
      <>
        <div className="flex flex-col gap-4">
          <p>{initialValueData?.category}</p>
          <p>{initialValueData?.location}</p>
          <span className="link primary-link" onClick={showModal}>
            Edit
          </span>
        </div>
      </>
    );
  };

  const renderForm = () => {
    return (
      <>
        <CustomFormikForm
          initialValues={{
            bank: initialValueData?.bank,
            price: initialValueData?.price,
            location: initialValueData?.location,
            category: initialValueData?.category,
          }}
          handleSubmit={handleSubmit}
          validationSchema={validationSchema}
          wantToUseFormikEvent={true}
        >
          {({ values }: any) => (
            <Form>
              <div
                className={`flex ${
                  isMobileView.mobileView ? "flex-col" : "flex-row"
                } items-end justify-between gap-4 `}
              >
                <div className="grid gap-4 grid-cols-12 w-full ">
                  <div className={gridElementClass()}>
                    <TextField
                      type="text"
                      name={"category"}
                      label={"Category"}
                      value={values.category}
                      placeholder="Enter category"
                    />
                  </div>
                  <div className={gridElementClass()}>
                    <TextField
                      type="text"
                      name="location"
                      label="Location"
                      value={values.location}
                      placeholder="Enter location"
                    />
                  </div>
                  <div className={gridElementClass()}>
                    <TextField
                      type="text"
                      name="bank"
                      label="Bank"
                      value={values.bank}
                      placeholder="Enter bank"
                    />
                  </div>
                  <div className={gridElementClass()}>
                    <TextField
                      type="range"
                      name="price"
                      label="Price"
                      value={values.price}
                      placeholder="Enter price"
                      min={RANGE_PRICE.MIN}
                      max={RANGE_PRICE.MAX}
                      customClass={"custom-range-class"}
                    />
                  </div>
                </div>
                <div className={gridElementClass()}>
                  <div className="w-full flex items-center justify-end gap-4 flex-wrap">
                    <ActionButton
                      isSubmit={true}
                      text={STRING_DATA.UPDATE.toUpperCase()}
                    />
                    {isMobileView.mobileView ? (
                      <ActionButton
                        text={STRING_DATA.CANCEL.toUpperCase()}
                        customClass=""
                        onclick={hideModal}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </Form>
          )}
        </CustomFormikForm>
      </>
    );
  };
  return (
    <>
      <CustomModal openModal={openModal}>
        <div className="w-full flex flex-col gap-4">{renderForm()}</div>
      </CustomModal>
      <div className="bg-[#e3e3e3] sticky left-0 right-0 top-0 p-4">
        {renderData()}
      </div>
    </>
  );
};

export default FindAuction;
