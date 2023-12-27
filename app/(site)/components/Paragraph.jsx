const Paragraph = ({ className, children, dangerouslySetInnerHTML }) => {
  return (
    <p
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      className={className + " text-base md:text-lg lg:text-xl mb-4"}
    >
      {children}
    </p>
  );
};

export default Paragraph;
