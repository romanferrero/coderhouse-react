function Navbar() {

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">RomanLab</a>
            </div>
            <div className="flex-1 flex justify-center">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Categories</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}

export default Navbar