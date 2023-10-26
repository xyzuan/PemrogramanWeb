import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
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
      <p>Contact</p>
      <Footer />
    </>
  );
}