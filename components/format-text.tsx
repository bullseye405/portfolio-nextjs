export const formatText = (text: string) => {
  if (!text) return null;

  // Split by double newlines OR single newlines
  const paragraphs = text.split(/\r?\n\r?\n|\r?\n/);

  return paragraphs.map((paragraph, index) => (
    <p
      className="mb-4 text-gray-700 leading-relaxed"
      key={index}
    >
      {paragraph}
    </p>
  ));
};
