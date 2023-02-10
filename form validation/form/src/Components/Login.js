import React from 'react'
import { useFormik } from "formik"
import { signUpSchema } from '../schemas'
import { GlobalStyle } from "../GlobalStyles/GlobalStyle";
import './App.css'
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
}

function Login() {
    const { values, errors, handleBlur, handleSubmit, touched, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(" 🚀  ~ file: Login.js ~ line 14 ~ Login ~ values",
                values
            )
        },

    })
    console.log(" 🚀  ~ file: Login.js ~ line 22 ~ Login ~ values",
        errors
    )

    return (


        <div className="container">
            <GlobalStyle />
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-left">
                        <h1 className="modal-title">Welcome!</h1>
                        <p className="modal-desc">
                            Fill the Form
                        </p>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-block">
                                    <div>
                                        <label htmlFor='name'
                                            className='input-label'>
                                            Name
                                        </label>
                                        <input type="name"
                                            name="name"
                                            id="name"
                                            placeholder='Username'
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.name && touched.name ? (
                                            <p className='form-error'>{errors.name}</p>
                                        ) : null}
                                    </div>

                                    <div>
                                        <label htmlFor='email'
                                            className='input-label'>
                                            Email
                                        </label>
                                        <input type="text"
                                            name="email"
                                            id="email"
                                            placeholder='Email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email ? (
                                            <p className='form-error'>{errors.email}</p>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label htmlFor='password'
                                            className='input-label'>
                                            Password
                                        </label>
                                        <input type="text"
                                            name="password"
                                            id="password"
                                            placeholder='Password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.password && touched.password ? (
                                            <p className='form-error'>{errors.password}</p>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label htmlFor='confirm_password'
                                            className='input-label'>
                                            Confirm Password
                                        </label>
                                        <input type="password"
                                            name="confirm_password"
                                            id="confirm_password"
                                            placeholder='Confirm Password'
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.confirm_password && touched.confirm_password ? (
                                            <p className='form-error'>{errors.confirm_password}</p>
                                        ) : null}
                                    </div>


                                    <div className='modal-button'>

                                        <br>
                                        </br>
                                        <button className='input-button' type='submit'>
                                            Register
                                        </button>
                                    </div>




                                </div>
                            </form>
                            <p className='sign-up'>
                                Already have account? <a href='#'> Sign In </a>
                            </p>
                        </div>




                    </div>
                    <div className="modal-right">
                        <img
                            src="https://i.pinimg.com/originals/4f/7f/90/4f7f90bc8d101121f92f298e0c065853.gif"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )



}

export default Login;