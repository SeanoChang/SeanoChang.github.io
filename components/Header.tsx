export default function Header() {
  const greeting = "I'm Sean Chang";
  return (
    <div
      id="home"
      className="min-h-screen flex flex-column items-center justify-center"
    >
      <div className="text-left font-bold -translate-y-32 group">
        <div className="py-2 sm:py-4 lg:py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-10 ">
          <h1 className="text-7xl lg:text-9xl">Hi</h1>
          <h2 className="text-3xl lg:text-5xl">{greeting}</h2>
        </div>
        <div className="py-2 sm:py-4 lg:py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-30 ">
          <h1 className="text-7xl lg:text-9xl">Hi</h1>
          <h2 className="text-3xl lg:text-5xl">{greeting}</h2>
        </div>
        <div className="py-2 sm:py-4 lg:py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-60 ">
          <h1 className="text-7xl lg:text-9xl">Hi</h1>
          <h2 className="text-3xl lg:text-5xl">{greeting}</h2>
        </div>
        <div className="py-2 sm:py-4 lg:py-6">
          <h1 className="text-7xl lg:text-9xl">Hi</h1>
          <h2 className="text-3xl lg:text-5xl">{greeting}</h2>
        </div>
        <div className="py-2 sm:py-4 lg:py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-60 ">
          <h1 className="text-7xl lg:text-9xl">Hi</h1>
          <h2 className="text-3xl lg:text-5xl">{greeting}</h2>
        </div>
        <div className="py-2 sm:py-4 lg:py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-30 ">
          <h1 className="text-7xl lg:text-9xl">Hi</h1>
          <h2 className="text-3xl lg:text-5xl">{greeting}</h2>
        </div>
        <div className="py-2 sm:py-4 lg:py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-10 ">
          <h1 className="text-7xl lg:text-9xl">Hi</h1>
          <h2 className="text-3xl lg:text-5xl">{greeting}</h2>
        </div>
      </div>
    </div>
  );
}
