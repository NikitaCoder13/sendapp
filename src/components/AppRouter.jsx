import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import PostsPage from "../pages/PostsPage";
import MyPostsPage from "../pages/MyPostsPage";
import CreatePostPage from "../pages/CreatePostPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import SettingsPage from "../pages/SettingsPage";
import PostPage from "../pages/PostPage";
import { useContext } from "react";
import { AuthContext } from "../context";

function AppRouter() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <>
      {isAuth ? (
        <BrowserRouter>
          <Routes>
            <Route exact path="/posts/:id" element={<PostPage />}></Route>
            <Route exact path="/posts" element={<PostsPage />}></Route>
            <Route path="/myposts" element={<MyPostsPage />}></Route>
            <Route path="/createpost" element={<CreatePostPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path="/" element={<PostsPage />}></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path="/" element={<LoginPage />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default AppRouter;
