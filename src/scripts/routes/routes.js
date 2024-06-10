import NowPlaying from '../views/pages/now-playing';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};
 
export default routes;