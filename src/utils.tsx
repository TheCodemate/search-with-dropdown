import { books, initialState } from './utils/data';

const handleTextHighlighting = (textData: string, searchedPhrase: string) => {
  console.log(textData.split(searchedPhrase));
  return (
    <span>
      {textData
        .toLocaleLowerCase()
        .split(searchedPhrase)
        .map((el, i) => (
          <span
            key={i}
            style={
              el.toLowerCase() === searchedPhrase?.toLowerCase()
                ? { fontWeight: 'bold' }
                : {}
            }
          >
            {el}
          </span>
        ))}
    </span>
  );
};

export { books, handleTextHighlighting, initialState };
