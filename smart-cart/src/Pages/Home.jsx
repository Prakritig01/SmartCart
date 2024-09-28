import Hero from '../Components/Hero/Hero';
import Trending from '../Components/Trending/Trending';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/New_Collection/new_collection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
const Home = () => {
  return (
    <>
      <Hero/>
      <Trending/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </>
  );
};

export default Home;
