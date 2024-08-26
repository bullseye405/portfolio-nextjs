export const formatText = (text: string) => {
  // Split the text into paragraphs based on double newlines
  // const paragraphs = text.split(/\r?\n\s*\r?\n/);
  const paragraphs = text.split(/\r\n/);

  // Wrap each paragraph in <p> tags
  return paragraphs.map((paragraph, index) => (
    <p className="mb-4" key={index}>
      {paragraph}
    </p>
  ));
};
