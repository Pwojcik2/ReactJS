export const RegularList = ({ items, sourceName, ItemComp }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComp key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};
