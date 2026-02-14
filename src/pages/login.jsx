export default function LoginPage() {
  return (
    <div className="w-full h-full bg-[url('/login-page.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center gap-4 p-16">
      <div className="w-[400px] h-[400px] "></div>
      <div className="w-[400px] h-[400px] ">
        <img src="logo.png" alt="logo-img" />
      </div>
      <div className="w-112.5 h-150 backdrop-blur-3xl shadow-lg rounded-2xl p-4">
        <input type="email" placeholder="email" className="m-5 p-3 w-[90%] h-12.5 rounded border-2"></input>
      </div>
    </div>
  );
}
