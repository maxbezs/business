const H3 = ({ styles, id, children }) => {
  return (
    <h3
      id={id}
      className={styles + " text-xl md:text-2xl lg:text-3xl font-bold mb-4"}
    >
      {children}
    </h3>
  );
};

export default H3;
