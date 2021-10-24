const highlightTextPart = (text: string, part: string) => {
  const textLowerCased = text.toLowerCase();
  const partLowerCased = part.toLowerCase();
  const indexToStartFrom = textLowerCased.indexOf(partLowerCased);
  const indextToEndAt = indexToStartFrom + part.length;
  const bitToDisplay = text.slice(indexToStartFrom, indextToEndAt);
  const splittedText = text.split(bitToDisplay);
  splittedText.splice(1, 0, bitToDisplay);

  return (
    <span>
      {splittedText.map((bit: string, idx: number) => {
        return idx === 1 ? <b>{bit}</b> : bit;
      })}
    </span>
  );
};

export default highlightTextPart;
