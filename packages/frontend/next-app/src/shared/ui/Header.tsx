import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-500 py-1 px-4">
      <nav>
        <menu className="grid grid-flow-col justify-end gap-2">
          <li className="list-none">
            <Link href="projects">projects</Link>
          </li>
          <li className="list-none">
            <Link href="stories">stories</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
}
