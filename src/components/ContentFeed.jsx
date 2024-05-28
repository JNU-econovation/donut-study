// eslint-disable-next-line react/prop-types
export default function ContentFeed({ contentItem }) {
  const { title, content, tags } = contentItem;
  return (
    <li>
      <h2>{title}</h2>
      <p>{content}</p>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </li>
  );
}
