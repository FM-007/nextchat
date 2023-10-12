import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="navbar bg-secondary">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">NextChat</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-20 flex items-center">
          <li><Link href="/pricing" className="btn btn-ghost btn-sm mr-4">Preço</Link></li>
          <li><LoginLink className="btn btn-ghost btn-sm mr-4">Entrar</LoginLink></li>
          <li><RegisterLink className="btn btn-sm btn-neutral flex-1">
            <span>Registrar</span>
          </RegisterLink></li>
          <li className=""></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar