const H1 = ({ styles, children }) => {
  return (
    <h1 className={styles + " text-4xl md:text-5xl lg:text-6xl font-bold mb-4"}>
      {children}
    </h1>
  );
};

export default H1;
