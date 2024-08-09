import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

const Form_Validation = () => {
    const frmLogin = useFormik({
        initialValues: {
            userName: '',
            email: '',
            gender: '',
            country: 'USA',
            password: ''
        },
        validationSchema: yup.object().shape({
            userName: yup.string().required('userName is a required'),
            email: yup.string().required('email is a required').email('email is invalid'),
            gender: yup.string().required('please select a gender'),
            password: yup.string().required('password is required').min(8, 'ít nhất 8 ký tự').max(50, 'ít nhất 8 ký tự')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <form className="container w-25 mt-5" onSubmit={frmLogin.handleSubmit}>
            <div className="card">
                <div className="card-body">
                    <h1 className='text-center'>User Registration</h1>
                    <div className="form-group mt-4">
                        <label htmlFor="userName">Username</label>
                        <input data-type="userName" type="text" id='userName' name='userName' className='form-control' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                        {frmLogin.errors.userName && <p className='alert alert-danger my-1'>{frmLogin.errors.userName}</p>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="email">Email</label>
                        <input data-type="email" type="email" id='email' name='email' className='form-control' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                        {frmLogin.errors.email && <p className='alert alert-danger my-1'>{frmLogin.errors.email}</p>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="gender" className='d-block'>Gender</label>
                        <input id='true' name='gender' type="radio" className='form-check-input' value='true' onChange={frmLogin.handleChange} />
                        <label htmlFor="gender" className='ms-2'><b>Male</b></label>
                        <input id='false' name='gender' type="radio" className='form-check-input ms-3' value='false' onChange={frmLogin.handleChange} />
                        <label htmlFor="gender" className='ms-2'><b>Famale</b></label>
                        {frmLogin.errors.gender && <p className='alert alert-danger my-1'>{frmLogin.errors.gender}</p>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="country" name="country">Country</label>
                        <select className='form-select' name="country" id='country' onChange={frmLogin.handleChange}>
                            <option value={'USA'}>USA</option>
                            <option value={'Canada'}>Canada</option>
                            <option value={'UK'}>UK</option>
                            <option value={'Australia'}>Australia</option>
                        </select>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' className='form-control' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                        {frmLogin.errors.password && <p className='alert alert-danger my-1'>{frmLogin.errors.password}</p>}
                    </div>
                    <button type='submit' className='mt-4 w-100 rounded rounded-1 border-0 py-2 text-white' style={{ background: '#5046e5' }}>Register</button>
                </div>
            </div>
        </form>
    )
}

export default Form_Validation