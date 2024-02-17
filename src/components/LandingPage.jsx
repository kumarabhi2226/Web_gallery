import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page relative h-screen">
      
      <img src="https://c8.alamy.com/comp/J0ARF4/photo-gallery-icon-photo-gallery-website-button-on-low-poly-background-J0ARF4.jpg" alt="Cover" className="w-full h-full object-cover" />

     
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-5xl font-serif font-bold mb-8 text-red-600">Welcome!</h1>
        <h1 className="text-2xl font-serif font-bold mb-8 text-green-500">Select any one - </h1>
        <div className="flex space-x-12 text-xl">
          <Link to="/collage" className="btn  hover:text-yellow-300">Static Gallery</Link>
          <Link to="/staged-scrolling" className="btn  hover:text-yellow-300">Scrolling Gallery</Link>
          <Link to="/carousel" className="btn hover:text-yellow-300">Ratating Gallery</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
