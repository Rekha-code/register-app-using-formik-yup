import React from "react";
import "./Register.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div>
      <section
        class="vh-100 bg-image"
        style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"
      >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style="border-radius: 15px;">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Name"
                        />
                        {errors.name && touched.name ? (
                          <p>{errors.name}</p>
                        ) : null}
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Email"
                        />
                        {errors.email && touched.email ? (
                          <P>{errors.email}:</P>
                        ) : null}
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                          <p>{errors.password}</p>
                        ) : null}
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-lg"
                          placeholder="Confirm Password"
                          value={values.confirm_password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="confirm_password"
                        />
                        {errors.confirm_password && touched.confirm_password ? (
                          <p>{errors.confirm_password}</p>
                        ) : null}
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
