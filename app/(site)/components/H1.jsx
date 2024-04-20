const H1 = ({ className, children }) => {
  return (
    <h1
      className={
        className +
        " text-3xl md:text-[48px] lg:text-[60px] font-bold mb-4 leading-none	"
      }
    >
      {children}
    </h1>
  );
};

export default H1;
