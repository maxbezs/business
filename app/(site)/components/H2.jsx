const H2 = ({ styles, children, id }) => {
  return (
    <h2
      id={id}
      className={styles + " text-2xl md:text-3xl lg:text-4xl font-bold mb-4"}
    >
      {children}
    </h2>
  );
};

export default H2;
