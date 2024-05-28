import ContentFeed from "./ContentFeed";
import useContentQuery from "./querys/useContentQuery";

export default function ContentGrid() {
  const { data, isLoading, error } = useContentQuery();

  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.map((contentItem) => (
        <ContentFeed key={contentItem.id} contentItem={contentItem} />
      ))}
    </ul>
  );
}
