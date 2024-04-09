function Navbar() {
    return (
        <nav className="w-screen py-3 bg-blue-400 flex flex-row justify-between text-blue-50 font-bold px-4 lg:px-48">
            <div className="flex flex-row h-full items-center gap-4">
                <div>
                    Icon
                </div>
                <div className="hidden lg:block">
                    Title
                </div>
            </div>
            <ul className="flex flex-row items-center gap-4">
                <li>
                    Temperature
                </li>
                <li>
                    Air Pollution
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;