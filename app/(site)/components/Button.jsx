import Link from "next/link";

const Button = ({ styles, href, children }) => {
  return (
    <Link
      id={href}
      href={href}
      className={
        styles +
        " font-cfont align-baseline bg-neutral-700 rounded-lg text-white cursor-pointer select-none focus:outline-none py-3 px-4 no-underline w-fit"
      }
    >
      {children}
    </Link>
  );
};

export default Button;
