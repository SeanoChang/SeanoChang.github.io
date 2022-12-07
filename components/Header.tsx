export default function Header() {
    const greeting = "I'm Yi Hsiang Chang"
    return (
        <div id="home" className="min-h-screen flex flex-column items-center justify-center">
            <div className="text-left font-bold -translate-y-32 group">
                <div className="py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-25 group-hover:scale-150">
                    <h1 className="text-9xl">Hi</h1>
                    <h2 className="text-5xl">{greeting}</h2>
                </div>
                <div className="py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-50 group-hover:scale-125">
                    <h1 className="text-9xl">Hi</h1>
                    <h2 className="text-5xl">{greeting}</h2>
                </div>
                <div className="py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-75 group-hover:scale-110">
                    <h1 className="text-9xl">Hi</h1>
                    <h2 className="text-5xl">{greeting}</h2>
                </div>
                <div className="py-6">
                    <h1 className="text-9xl">Hi</h1>
                    <h2 className="text-5xl">{greeting}</h2>
                </div>
                <div className="py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-75 group-hover:scale-110">
                    <h1 className="text-9xl">Hi</h1>
                    <h2 className="text-5xl">{greeting}</h2>
                </div>
                <div className="py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-50 group-hover:scale-125">
                    <h1 className="text-9xl">Hi</h1>
                    <h2 className="text-5xl">{greeting}</h2>
                </div>
                <div className="py-6 opacity-0 transition delay-100 duration-200 group-hover:opacity-25 group-hover:scale-150">
                    <h1 className="text-9xl">Hi</h1>
                    <h2 className="text-5xl">{greeting}</h2>
                </div>
            </div>
        </div>
    )
}