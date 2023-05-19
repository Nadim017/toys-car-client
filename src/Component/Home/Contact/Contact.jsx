import React from 'react';

const Contact = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-2/3 mx-auto ">
      <h2 className="text-center text-2xl font-bold mt-5 mb-2">Contact Us :</h2>
      <div className="hero  bg-base-200 w-full ">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSignIn} className="shadow-lg">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your name:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your email"
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message:</span>
                  </label>
                  <input
                    type="textarea"
                    placeholder="your message"
                    className="input input-bordered"
                    name="message"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <div className="form-control mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
