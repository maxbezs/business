const H3 = ({ className = "", id, children }) => {
  return (
    <h3
      id={id}
      className={className + " text-xl md:text-2xl lg:text-3xl font-bold mb-4"}
    >
      {children}
    </h3>
  );
};

export default H3;
