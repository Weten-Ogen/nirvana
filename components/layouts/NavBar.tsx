import { buttonVariants } from "../ui/button"
import Link from "next/link";
import DropMenu from "../client/DropMenu";

export default function NavBar() {
  const btnStyle = "px-3 py-2 text-lg  uppercase tracking-wide"
  return (
    <div className="fixed flex h-14 text-center justify-center items-center bg-blue-300 space-x-4  tracking-wider inset-0 z-20">
      <Link className={btnStyle + buttonVariants({variant:"ghost"})} href="/">
        <li>breaking</li>
      </Link>
      <Link className={btnStyle + buttonVariants({variant:"ghost"})} href="/search">
        <li>search</li>
      </Link>
      <li className={btnStyle + buttonVariants({variant:"ghost"})}><DropMenu/></li>
    
    </div>
  )
}
