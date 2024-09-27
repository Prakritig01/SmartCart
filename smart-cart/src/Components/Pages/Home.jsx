import Hero from './../Hero/Hero';
import Trending from '../Trending/Trending';
import Offers from '../Offers/Offers';
import NewCollection from '../New_Collection/new_collection';
import NewsLetter from '../NewsLetter/NewsLetter';
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
