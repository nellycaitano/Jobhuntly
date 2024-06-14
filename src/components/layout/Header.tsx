import { useNavigate } from 'react-router-dom';
import IconButton from '../globals/IconButton';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import Button from '../globals/Button';


function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-x-2" onClick={() => navigate('/')}>
        <img src="/img/logo.png" className="w-8 h-8" alt="logo" />
        <span className="text-2xl font-bold font-redHatDisplay text-neutral-700">
          JobHuntly
        </span>
      </div>

      <IconButton
        icon={<HiOutlineMenuAlt2 size={20} />}
        onClick={() => {}}
        ariaLabel="Toggle menu"
        className='md:hidden'
      />

      <div className="hidden space-x-4 md:block">
        <Button type="submit" onClick={() => {}} variant="light">
              Login 
        </Button>
        <span className=" border w-[1px] h-[34px] border-light"></span> 
         <Button type="submit" onClick={() => {}} variant="primary">
              Sign Up
        </Button>
        
      </div>
    </div>
  );
}

export default Header;
