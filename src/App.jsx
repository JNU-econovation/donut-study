import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import styled from "styled-components";
import ContentDisplay from "./components/ContentDisplay";
import Main from "./components/Main";

function App() {
  const [postData, setPostData] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedBody, setSelectedBody] = useState("");

  useEffect(() => {
    getPostData();
  }, []);

  async function getPostData() {
    const { data } = await supabase.from("page").select("*");
    setPostData(data);
  }
  const handlePostClick = (id, title, tag, body) => {
    setSelectedTitle(title);
    setSelectedTag(tag);
    setSelectedBody(body);
    setSelectedId(id);
  };
  return (
    <>
      <Frame>
        <Main
          handlePostClick={handlePostClick}
          getPostData={getPostData}
          postData={postData}
        />
        <ContentDisplay
          title={selectedTitle}
          tag={selectedTag}
          body={selectedBody}
          id={selectedId}
          getPostData={getPostData}
        />
      </Frame>
    </>
  );
}

export default App;

const Frame = styled.div`
  display: flex;
`;
