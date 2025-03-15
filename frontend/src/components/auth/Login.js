import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // Check the submitted form data

    // Call your login API
    axios.post(`${process.env.REACT_APP_API_KEY}/user/signIn`, formData)
      .then((result) => {
        console.log(result.data);  // Check the API response
        if (result.data.role === 'college_admin') {
            navigate('/dashboard'); // Admin Dashboard
          } else if (result.data.role === 'student') {
            navigate('/EventSchedule'); // Event Schedule for Students
          }
      })
      .catch((err) => {
        console.log('Login error:', err.response);  // Log the exact error response
        alert('Invalid credentials. Please try again.');
      });
};


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call your login API
//     axios.post(`${process.env.REACT_APP_API_KEY}user/login`, formData)
//       .then((result) => {
//         // Assuming the API response contains role info (admin or user)
//         if (result.data.isAdmin) {
//           navigate('/dashboard'); // Admin Dashboard
//         } else {
//           navigate('/userDashboard'); // User Dashboard
//         }
//       })
//       .catch((err) => {
//         console.log('Login error:', err);
//         alert('Invalid credentials. Please try again.');
//       });
//   };

  return (
    <>
      <Navbar />
      <section className="bg-gray-50" style={{ marginTop: '8rem' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-sm border-0 rounded-lg">
                <div className="card-body p-4 p-sm-5">
                  <h1 className="h2 mb-4 fw-bold text-gray-900 text-center">
                    Login to your account
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label text-gray-900">
                        Your email
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@abc.com"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label text-gray-900">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control rounded-lg"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg rounded-lg w-100">
                      Login
                    </button>
                    <p className="mt-3 text-center">
                      Don't have an account?{" "}
                      <a href="/register" className="text-primary">
                        Register here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/Eventhublogo.png';
// import Navbar from '../Navbar';

// const Login = () => {
//     const [isNewAccount, setIsNewAccount] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (isNewAccount) {
//             // Handle registration
//             try {
//                 await axios.post('/user/register', { name, email, password });
//                 alert('Registration successful');
//                 navigate('/login'); // Redirect to login after successful registration
//             } catch (err) {
//                 console.error(err);
//                 alert('Error registering user');
//             }
//         } else {
//             // Handle login
//             try {
//                 await axios.post('/user/signIn', { email, password });
//                 alert('Login successful');
//                 navigate('/dashboard'); // Redirect to dashboard after successful login
//             } catch (err) {
//                 console.error(err);
//                 alert('Error logging in');
//             }
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <section className="h-100 gradient-form">
//                 <div className="container py-5 h-100">
//                     <div className="row d-flex justify-content-center align-items-center h-100">
//                         <div className="col-xl-10">
//                             <div className="card rounded-3 text-black">
//                                 <div className="row g-0">
//                                     <div className="col-lg-6">
//                                         <div className="card-body p-md-5 mx-md-4">
//                                             <div className="text-center">
//                                                 <img src={logo} alt="logo" style={{ width: '185px' }} />
//                                                 <h4 className="mt-1 mb-5 pb-1">{isNewAccount ? 'Register' : 'Login'}</h4>
//                                             </div>
//                                             <form onSubmit={handleSubmit}>
//                                                 {isNewAccount && (
//                                                     <div className="form-outline mb-4">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control"
//                                                             placeholder="Full Name"
//                                                             value={name}
//                                                             onChange={(e) => setName(e.target.value)}
//                                                             required
//                                                         />
//                                                         <label className="form-label">Full Name</label>
//                                                     </div>
//                                                 )}
//                                                 <div className="form-outline mb-4">
//                                                     <input
//                                                         type="email"
//                                                         className="form-control"
//                                                         placeholder="Email"
//                                                         value={email}
//                                                         onChange={(e) => setEmail(e.target.value)}
//                                                         required
//                                                     />
//                                                     <label className="form-label">Email</label>
//                                                 </div>
//                                                 <div className="form-outline mb-4">
//                                                     <input
//                                                         type="password"
//                                                         className="form-control"
//                                                         placeholder="Password"
//                                                         value={password}
//                                                         onChange={(e) => setPassword(e.target.value)}
//                                                         required
//                                                     />
//                                                     <label className="form-label">Password</label>
//                                                 </div>
//                                                 <div className="text-center pt-1 mb-5 pb-1">
//                                                     <button className="btn btn-primary btn-block" type="submit">
//                                                         {isNewAccount ? 'Register' : 'Log in'}
//                                                     </button>
//                                                 </div>
//                                             </form>
//                                             <div className="d-flex align-items-center justify-content-center pb-4">
//                                                 <p className="mb-0 me-2">{isNewAccount ? 'Already have an account?' : "Don't have an account?"}</p>
//                                                 <button type="button" className="btn btn-outline-danger" onClick={() => setIsNewAccount(!isNewAccount)}>
//                                                     {isNewAccount ? 'Log in' : 'Create new'}
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
//                                         <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//                                             <h4 className="mb-4">{isNewAccount ? 'Join our team' : 'We are more than just a company'}</h4>
//                                             <p className="small mb-0">Bringing your vision to life with seamless event experiences.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Login;


