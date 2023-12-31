const H1 = ({ styles, children }) => {
  return (
    <h1
      className={
        styles + " text-3xl md:text-[48px] lg:text-[60px] font-bold mb-4"
      }
    >
      {children}
    </h1>
  );
};

export default H1;
