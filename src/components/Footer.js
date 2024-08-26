const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container px-11 pt-16 pb-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-gray-700 mb-4">Get in touch</h4>
          <ul className="space-y-2 text-[#6A983C]">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-700 mb-4">Connections</h4>
          <ul className="space-y-2 text-[#6A983C]">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-700 mb-4">Earnings</h4>
          <ul className="space-y-2 text-[#6A983C]">
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise your product</a></li>
            <li><a href="#">Sell on Market</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-700 mb-4">Account</h4>
          <ul className="space-y-2 text-[#6A983C]">
            <li><a href="#">Your account</a></li>
            <li><a href="#">Returns Centre</a></li>
            <li><a href="#">100% purchase protection</a></li>
            <li><a href="#">Chat with us</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
      <div className="text-left pl-11 py-4 bg-white text-gray-600">
        Copyright © 2020 petrbilek.com
      </div>
    </footer>
  );
};

export default Footer;
