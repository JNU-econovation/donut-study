const WordInput = ({ onWordSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onWordSubmit(e.target.elements.wordInput.value);
    e.target.elements.wordInput.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="wordInput" className="word-input" type="text" />
    </form>
  );
};

export default WordInput;
