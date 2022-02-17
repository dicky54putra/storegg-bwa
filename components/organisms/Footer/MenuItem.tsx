import Link from 'next/link';

interface MenuItemProps {
  title: string;
  href: string;
  isExternal?: boolean;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, href = '/', isExternal } = props;
  return (
    <li className="mb-6">
      {isExternal ? (
        <Link href={href}>
          <a className="text-lg color-palette-1 text-decoration-none">
            {title}
          </a>
        </Link>
      ) : (
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      )}
    </li>
  );
}
