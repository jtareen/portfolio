import { useState } from 'react';
import Logo from '../assets/Logo.png'
import Menu from '../assets/icons/Menu.svg';
import X from '../assets/icons/X.svg';
import ChevronDown from '../assets/icons/ChevronDown.svg';
import ChevronUp from '../assets/icons/ChevronUp.svg';
import Discord from '../assets/icons/Discord.svg';
import Github from '../assets/icons/Github.svg';
import Linkedin from '../assets/icons/Linkedin.svg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setLangOpen(false);
  };

  return (
    <nav className="py-4">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-[18px] md:text-[22px] font-bold text-white">
          <img src={Logo} alt="Logo" className='w-[20px] h-[20px] md:w-[20px] md:h-[24px] mr-2' />
          <span>JTareen</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex text-[16px] md:text-[20px] font-medium items-center text-gray space-x-6">
          <NavLink to="/" onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) =>
              `hover:text-white ${isActive ? 'text-white' : 'block text-gray'}`
            }
          >
            <span className='text-primary'>#</span>home
          </NavLink>
          <NavLink to="/works" onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) =>
              `hover:text-white ${isActive ? 'text-white' : 'block text-gray'}`
            }
          >
            <span className='text-primary'>#</span>works
          </NavLink>
          <NavLink to="/aboutme" onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) =>
              `hover:text-white ${isActive ? 'text-white' : 'block text-gray'}`
            }
          >
            <span className='text-primary'>#</span>about-me
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) =>
              `hover:text-white ${isActive ? 'text-white' : 'block text-gray'}`
            }
          >
            <span className='text-primary'>#</span>contact
          </NavLink>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="flex cursor-pointer items-center space-x-1 text-[16px] font-semibold hover:text-white"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span>{selectedLanguage}</span>
              {langOpen ?
                <img src={ChevronUp} alt="Chevron Up" className="w-[10px] h-[5px]" /> :
                <img src={ChevronDown} alt="Chevron Down" className="w-[10px] h-[5px]" />
              }
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-background border border-white z-10">
                <button
                  className="block cursor-pointer px-4 py-2 hover:bg-muted hover:text-white w-full text-left"
                  onClick={() => selectLanguage('EN')}
                >
                  EN
                </button>
                <button
                  className="block cursor-pointer px-4 py-2 hover:bg-muted hover:text-white w-full text-left"
                  onClick={() => selectLanguage('RU')}
                >
                  RU
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className='cursor-pointer'>
            {menuOpen ? (
              <img src={X} alt="Close" className="w-[24px] h-[24px]" />
            ) : (
              <img src={Menu} alt="Menu" className="w-[24px] h-[24px]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 text-gray text-[24px] space-y-2 px-4">
          <NavLink to="/" onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) =>
              `block hover:text-white ${isActive ? 'text-white' : 'block text-gray'}`
            }
          >
            <span className='text-primary'>#</span>home
          </NavLink>
          <NavLink to="/works" onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) =>
              `block hover:text-white ${isActive ? 'text-white' : 'block text-gray'}`
            }
          >
            <span className='text-primary'>#</span>works
          </NavLink>
          <NavLink to="/aboutme" onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) =>
              `block hover:text-white ${isActive ? 'text-white' : 'block text-gray'}`
            }
          >
            <span className='text-primary'>#</span>about-me
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) =>
              `block hover:text-white ${isActive ? 'text-white' : 'block text-gray'}`
            }
          >
            <span className='text-primary'>#</span>contact
          </NavLink>

          {/* Language Dropdown */}
          <div className="relative size-fit">
            <button
              className="flex cursor-pointer items-center space-x-1 text-[24px] font-semibold hover:text-white"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span>{selectedLanguage}</span>
              {langOpen ?
                <img src={ChevronUp} alt="Chevron Up" className="w-[10px] h-[5px]" /> :
                <img src={ChevronDown} alt="Chevron Down" className="w-[10px] h-[5px]" />
              }
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-background border border-white z-10">
                <button
                  className="block cursor-pointer px-4 py-2 hover:text-white w-full text-left"
                  onClick={() => selectLanguage('EN')}
                >
                  EN
                </button>
                <button
                  className="block cursor-pointer px-4 py-2 hover:text-white w-full text-left"
                  onClick={() => selectLanguage('RU')}
                >
                  RU
                </button>
              </div>
            )}
          </div>
          <div className='flex justify-center mt-[200px]'>
            <button><img src={Linkedin} alt="Linkedin" className='w-[44px] h-[44px] m-2 cursor-pointer' /></button>
            <button><img src={Github} alt="Github" className='w-[44px] h-[44px] m-2 cursor-pointer' /></button>
            <button><img src={Discord} alt='Discord' className='w-[44px] h-[44px] m-2 cursor-pointer' /></button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
