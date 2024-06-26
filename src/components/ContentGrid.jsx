import styled from "styled-components";
import ContentFeed from "./ContentFeed";
import { useContentsQuery } from "../hooks/querys/useContentQuery";

export default function ContentGrid() {
  const { data, isLoading, error } = useContentsQuery();

  return (
    <StyledContentGrid>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.map((contentItem) => (
        <ContentFeed key={contentItem.id} contentItem={contentItem} />
      ))}
    </StyledContentGrid>
  );
}

const StyledContentGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding-inline: 0;
`;
