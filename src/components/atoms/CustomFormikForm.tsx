import { Form, Formik } from "formik";
import React from "react";

interface ICustomFormikForm {
  initialValues?: any;
  validationSchema?: any;
  handleSubmit: any;
  children: any;
  formikEvent?: Function;
}

const CustomFormikForm: React.FC<ICustomFormikForm> = (props) => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    children,
    formikEvent,
  } = props;
  const handleFormikEvent = (formikProps: any) => {
    if (formikEvent) {
      formikEvent(formikProps);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          handleFormikEvent(formikProps);
          return <Form>{children}</Form>;
        }}
      </Formik>
    </>
  );
};

export default CustomFormikForm;
