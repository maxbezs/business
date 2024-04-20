const H2 = ({ className, children, id }) => {
  return (
    <h2
      id={id}
      className={className + " text-2xl md:text-3xl lg:text-4xl font-bold mb-4"}
    >
      {children}
    </h2>
  );
};

export default H2;
