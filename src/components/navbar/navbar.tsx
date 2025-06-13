import { GithubIcon, LinkedinIcon, XIcon } from "lucide-react";
import { ActiveLink } from "../active-link/active-link";

const LINK_LIST = [
  { label: "Inicio", path: "/" },
  { label: "Sobre", path: "/about" },
  { label: "Portfólio", path: "/portfolio" },
  { label: "Skills", path: "/skills" },
  { label: "Carreira", path: "/career" },
  { label: "Contato", path: "/contact" },
];

export function Navbar() {
  const isOpen = false;

  return (
    <header
      className={
        "fixed top-0 w-full z-50 transition-all duration-300 bg-background"
      }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <ActiveLink href="/" className="font-extrabold">
              <span className="text-green-400 text-xl">J</span>
              <span className="text-xl">R</span>
            </ActiveLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {LINK_LIST.map((item) => (
              <ActiveLink key={item.path} href={item.path}>
                {item.label}
              </ActiveLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/jhollyfer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jhollyferr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              // onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              <XIcon />
              {/* {isOpen ? <X size={24} /> : <Menu size={24} />} */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-portfolio-dark/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {LINK_LIST.map((item) => (
              <ActiveLink
                key={item.label}
                href={item.path}
                // className={
                //   "block px-3 py-2 rounded-md text-base font-medium transition-colors"
                // }
              >
                {item.label}
              </ActiveLink>
            ))}
          </div>
          <div className="flex justify-center space-x-6 py-4 border-t border-white/5">
            <a
              href="https://github.com/jhollyfer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jhollyferr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
