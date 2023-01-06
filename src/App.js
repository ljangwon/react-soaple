import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components";
import MainPage from "./mini-blog/components/pages/MainPage";
import PostWritePage from "./mini-blog/components/pages/PostWritePage";
import PostViewPage from "./mini-blog/components/pages/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>쿼카의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
