import logo from '../assets/catalogue.png';

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen pb-12 bg-[#e6842c]">
      <div className="flex flex-col items-center">
      <img src={logo} alt="Catalogue Logo" className='mb-4 w-[30rem] h-[15rem]'/>


        <div className="bg-white p-8 border rounded-3xl shadow-lg">
          <form action="">
            <div className="flex justify-center mb-6">
              <h1 className="text-2xl text-orange-500 font-bold font-lilita text-center">
                Sign in
              </h1>
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-84">
                <input type='text'placeholder='Username' className="w-96 px-4 py-2 border rounded-full border-orange-500 focus:outline-none focus:border-orange-600" required/>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-84">
                <input type='password' placeholder='Password' className="w-96 px-4 py-2 border rounded-full border-orange-500 focus:outline-none focus:border-orange-600" required/>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <button type='submit' className="px-4 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600 font-bold font-lilita focus:outline-none focus:ring w-32">Login</button>
            </div>
          </form>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm font-bold text-white"> Don&apos;t have an account?</p>
          <button type='button' className="px-4 py-2 text-orange-500 bg-white border border-orange-500 rounded-full hover:bg-orange-100 font-bold font-lilita focus:outline-none focus:ring w-32 mt-2">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;