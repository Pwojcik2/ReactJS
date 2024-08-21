export const LargeBookListItem = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <>
      <h2>Name: {name}</h2>
      <p>Price: ${price}</p>
      <h2>Title: {title}</h2>
      <p>Pages: {pages}</p>
    </>
  );
};
