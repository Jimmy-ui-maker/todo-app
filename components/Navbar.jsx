import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className=" text-white font-bold" href={"/"}>
        Home Page
      </Link>
      <Link className="text-white p-2 ml-2" href={"/addTodo"}>
        Add Todo
      </Link>
      <Link className="text-white p-2 ml-2" href={"/viewTodo"}>
        View Todo
      </Link>
      
    </nav>
  );
}