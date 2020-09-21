import React from 'react';
import { Link } from 'wouter';
import './Header.css';

class Header extends React.Component<{}, {}> {
    render() {
        return (
            <header className="Header">
                <Link href="/" className="logo-container">
                    <img className="logo" alt="logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iODBweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwIDgwOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgODAgODAiIHdpZHRoPSI4MHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxQzJCMzY7fQo8L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02Mi44LDE1LjNjLTEuOSwyLjgtMy4zLDUuNS01LjEsOC42Yy0yLjctMi4yLTYuMi01LTcuOC02LjVjLTUuMS00LjctOS43LTYuNy0xNi4xLTYuMiAgYy01LjEsMC4zLTIuOSw2LjItNi43LDEwLjFjLTIuMywyLjQtMTEuNy0yLjgtMTQuMSwyLjhjLTMuNCw4LjEtMS43LDE3LjMsNC4zLDI0LjRjMS40LDEuNiw0LDUuMyw2LjEsOC4xYy0zLjIsMS44LTYsMy05LDQuOCAgYy01LjQsMy4zLTksNi43LTMuNCw4LjhjNC4xLDEuNiwxOS4yLTcuMiwzNi0yMy4yYzE2LjgtMTYsMjYuMy0zMC42LDI0LjktMzQuOEM2OS45LDYuNyw2Ni4zLDEwLjEsNjIuOCwxNS4zeiIvPjwvc3ZnPg==" />
                </Link>
                <Link href="/" className="appName">
                    LearnWhiteHat
                </Link>
            </header>
        )
    }
}
    

export default Header;