import { Form, Formik } from "formik";
import React from "react";

interface ICustomFormikForm {
  initialValues?: any;
  validationSchema?: any;
  handleSubmit: any;
  children: any;
  wantToUseFormikEvent?: boolean;
}

const CustomFormikForm: React.FC<ICustomFormikForm> = (props) => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    children,
    wantToUseFormikEvent = false,
  } = props;

  const renderData = () => {
    if (wantToUseFormikEvent) {
      return children;
    }
    return <Form>{children}</Form>;
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {renderData()}
      </Formik>
    </>
  );
};

export default CustomFormikForm;
