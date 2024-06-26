import styled from "styled-components";
import { supabase } from "./supabase";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import UploadButton from "./components/UploadButton";
import Post from "./components/Post";
import ViewModal from "./components/ViewModal";
import NewPostModal from "./components/NewPostModal";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.from("page").select("*");
      if (!error) {
        setData(data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const uniqueTags = [...new Set(data.map((item) => item?.tag))];

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const handleNewPost = () => {
    setIsCreatingPost(true);
  };

  const handleCloseNewPostModal = () => {
    setIsCreatingPost(false);
  };

  const handleCreatePost = async (post) => {
    setIsLoading(true);
    const { data: newPost, error } = await supabase
      .from("page")
      .insert([post])
      .single();
    if (!error) {
      setData((prevData) => [...prevData, newPost]);
    }
    setIsLoading(false);
    setIsCreatingPost(false);
  };

  return (
    <StyledSection>
      <Header />
      <StyledArea>
        <div>
          <Category tags={uniqueTags} />
          <UploadButton onClick={handleNewPost} />
        </div>
        <StyledPostContainer>
          {isLoading ? (
            <StyledLoading>Loading...</StyledLoading>
          ) : (
            data?.map(
              (item) =>
                item && (
                  <Post
                    key={item.id}
                    title={item.title}
                    tag={item.tag}
                    onClick={() => handlePostClick(item)}
                  />
                )
            )
          )}
        </StyledPostContainer>
      </StyledArea>
      {selectedPost && (
        <ViewModal
          title={selectedPost.title}
          tag={selectedPost.tag}
          body={selectedPost.body}
          onClose={handleCloseModal}
        />
      )}
      {isCreatingPost && (
        <NewPostModal
          onClose={handleCloseNewPostModal}
          onSubmit={handleCreatePost}
        />
      )}
    </StyledSection>
  );
};

export default App;

const StyledSection = styled.section`
  padding: 1rem;
`;

const StyledPostContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledArea = styled.div`
  display: flex;
`;

const StyledLoading = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
`;
