import { useNavigate } from 'react-router-dom';
import Button from '../globals/Button';
import IconButton from '../globals/IconButton';
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-10 space-y-6 text-white bg-backgroundDark md:flex md:flex-col">
      <div className='md:flex md:gap-x-[88px]  md:justify-center'>
      <div className=''>
        <div
          className="flex items-center mb-8 gap-x-2"
          onClick={() => navigate('/')}
        >
          <img src="/img/logo.png" className="w-8 h-8" alt="logo" />
          <span className="text-2xl font-bold font-redHatDisplay">
            JobHuntly
          </span>
        </div>
        <p className="text-base text-neutral-400 md:w-[316px]">
          Great platform for the job seeker that passionate about startups. Find
          your dream job easier.
        </p>
      </div>

      <div className="grid grid-cols-2 md:gap-x-[92px]">
        <div>
          <h6 className="mb-[18px] text-white">About</h6>
          <ul className="space-y-4 text-base text-neutral-400">
            <li>Company</li>
            <li>Pricing</li>
            <li>Terms</li>
            <li>Advise</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h6 className="mb-[18px] text-white">Ressources</h6>
          <ul className="space-y-4 text-base text-neutral-400">
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="mb-4">
          <h6 className="mb-2 text-white">Get job notifications</h6>
          <p className="text-base text-neutral-400 md:w-[306px]">
            The latest job news, articles, sent to your inbox weekly.
          </p>
        </div>
        <form className="flex flex-col gap-y-2 md:gap-x-2 md:flex-row md:w-[362px] md:mt-[40px]">
          <input
            type="text"
            name="email"
            className=""
            placeholder="Email address"
          />
          <div>
            <Button type="submit" onClick={() => {}} variant="primary">
              Subscribe
            </Button>
          </div>
        </form>
      </div>

      </div>
      
      <div className="justify-between space-y-6 ">
        <hr className="border-2 border-gray-600" />
        <div className='md:justify-between md:flex md:px-[128px]'>
        <p className="font-medium text-center text-gray-500">
          {new Date().getFullYear()} @ JobHuntly. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaFacebookF size={15} />}
            onClick={() => {}}
            ariaLabel="facebook"
          />
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaInstagram size={15} />}
            onClick={() => {}}
            ariaLabel="instagram"
          />
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaDribbble size={15} />}
            onClick={() => {}}
            ariaLabel="dribbble"
          />
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaLinkedinIn size={15} />}
            onClick={() => {}}
            ariaLabel="linkedin"
          />
          <IconButton
            className="!bg-gray-700 !border-gray-700"
            icon={<FaTwitter size={15} />}
            onClick={() => {}}
            ariaLabel="twitter"
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
