function Navbar() {
    return (
        <nav className="flex flex-row justify-between w-screen px-4 font-bold bg-orange-400 lg:px-24">
            <div className="flex flex-row items-center h-full gap-4">
                <span className="py-1 text-2xl font-bold text-white">
                    WeatherStats
                </span>
            </div>
        </nav>
    )
}

export default Navbar;