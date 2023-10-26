
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <nav>
        <ul>
          <li style={{ marginBottom: 5 }}>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li style={{ marginBottom: 5 }}>
            <button>
              <Link to="/about">About Us</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/contact">Contact Us</Link>
            </button>
          </li>
        </ul>
      </nav>
      <p>About Us</p>
      <Footer />
    </>
  );
}