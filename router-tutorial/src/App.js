import { Routes, Route } from 'react-router-dom';
import Main from './sample/Main';
import Ad from './sample/Ad';
import Contact from './sample/Contact';
import ArticlesList from './sample/ArticlesList';
import Article from './sample/Article';
import Login from './sample/Login';
import MyPage from './sample/MyPage';
import NotFound from './sample/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<Ad />}>
        <Route index element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/articles" element={<ArticlesList />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
