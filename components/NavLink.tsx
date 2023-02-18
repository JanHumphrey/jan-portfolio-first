import Link from "next/link";

const Navlink = ({
  name,
  url,
  isActive,
}: {
  name: string;
  url: string;
  isActive: boolean;
}) => {
  return (
    <li
      className={`${isActive ? "font-bold" : "font-medium"
        }`}
    >
      <Link href={url}>
        {name}
      </Link>
    </li>
  );
};

export default Navlink