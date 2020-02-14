import { InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import WithUser from 'containers/WithUser';
import { 
    UserDefaultState,
} from 'models/UserModel';
import { PendingType } from 'models/BaseModel';
import {
    ICreateUserAction,
} from 'actions/UserAction';

interface FormValues {
    email: string;
    firstName: string;
    lastName: string;
}

interface FormProps {
    pending: PendingType;
    handleChange?: Function;
    createUserAction: ICreateUserAction;
}

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = ({
    pending,
    handleChange,
    values,
    handleSubmit,
    touched,
    errors,
}) => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          placeholder="Email"
          type="text"
          onChange={handleChange}
          value={values.email}
        />
        <input
          id="firstName"
          placeholder="First Name"
          type="text"
          onChange={handleChange}
          value={values.firstName}
        />
        <input
          id="lastName"
          placeholder="Last Name"
          type="text"
          onChange={handleChange}
          value={values.lastName}
        />
        {
            touched.email 
                && errors.email 
                && <div>{errors.email}</div>
        }
        {
            touched.firstName 
                && errors.firstName 
                && <div>{errors.firstName}</div>
        }
        {
            touched.lastName 
                && errors.lastName 
                && <div>{errors.lastName}</div>
        }
        <button
          type="submit"
          disabled={pending}
        >
          Submit
        </button>
      </form>
    );
}

const CreateUserForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: () => UserDefaultState.state,
    validationSchema: Yup.object().shape({
            email: Yup
                .string()
                .email('Invalid email address')
                .required('Email is required!'),
        
            firstName: Yup.string()
                .max(16, 'Please input 16 characters or less')
                .required('Please input first name'),
            lastName: Yup.string()
                .max(16, 'Please input 16 characters or less')
                .required('Please input last name'),
        },
    ),
    handleSubmit: (values, {
      props
    }) => {
        props.createUserAction(
            values.email,
            values.firstName,
            values.lastName,
            ''
        );
  },
})(InnerForm);

export default WithUser()(CreateUserForm);