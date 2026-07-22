import { Link } from "react-router-dom";
import { Menu, Moon, Search, Sparkles, X } from "lucide-react";
import { useState  } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "Horoscope", to: "/horoscope" },
  { label: "Kundli", to: "/kundli" },
  { label: "Astrologers", to: "/astrologers" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  
  const [open, setOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-white/5 backdrop-blur ">
      
        <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-yellow-400 text-slate-900">
              <Moon size={18} />
            </span>

            <span className="text-lg font-bold tracking-widest text-yellow-400">
              CELESTIA
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="ml-8 hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    text-white/80
                    transition-all
                    duration-300
                    hover:bg-white/5
                    hover:text-yellow-400
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <button className="grid h-10 w-10 place-items-center rounded-full text-white/70 transition hover:bg-white/5 hover:text-white">
              <Search size={18} />
            </button>

            <button
              className="rounded-full border border-yellow-400 px-5 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              Sign In
            </button>

            <Link
              to="/talk"
              className="flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2 font-medium text-black transition hover:bg-yellow-300"
            >
              <Sparkles size={16} />
              Talk to Astrologer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              lg:hidden
              border-t border-white/10
              bg-white/5
              backdrop-blur
              px-4
              py-4
            "
          >
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="
                      block
                      rounded-lg
                      px-4
                      py-3
                      text-white/80
                      transition-all
                      duration-300
                      hover:bg-white/5
                      hover:text-yellow-400
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-2">
              <button
                className="flex-1 rounded-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                Sign In
              </button>

              <Link
                to="/talk"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 text-center py-2"
              >
                Consult Now
              </Link>
            </div>
          </div>
        )}
    
    </header>
  );
}