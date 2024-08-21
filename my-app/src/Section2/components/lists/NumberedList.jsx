export const NumberedList = ({ items, sourceName, ItemComp }) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3> {i + 1} </h3>
          <ItemComp key={i} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
};
