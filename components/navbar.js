import Link from 'next/link'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
