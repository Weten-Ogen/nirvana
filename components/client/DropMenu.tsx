"use client"
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
DropdownMenuTrigger,
DropdownMenuSub,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { buttonVariants } from "../ui/button";


export default function DropMenu() {
  const itemstyles = buttonVariants({variant:"ghost"})
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="outline-none uppercase tracking-wide">
            categories
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px] bg-blue-300  rounded">
            <DropdownMenuLabel>
              Category
            </DropdownMenuLabel>
            <Separator/>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                science
              </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-[250px] bg-blue-300  rounded">
                  <DropdownMenuItem>
                  <Link 
                  className={itemstyles}
                  href="/categories/health">
                  <li>health</li>
                </Link>
                  </DropdownMenuItem>
                  <Separator/>
                  <DropdownMenuItem>
                  <Link 
                  className={itemstyles}
                  href="/categories/technology">
                  <li>technology</li>
                </Link>
                  </DropdownMenuItem>
                  <Separator/>
                  <DropdownMenuItem>
                  <Link 
                  className={itemstyles}
                  href="/categories/science">
                  <li>science</li>
                </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuSub>
            <Separator/>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                  <Link 
                  className={itemstyles}
                  href="/categories/business">
                    <li>business</li>
                  </Link>
              </DropdownMenuItem>
              <Separator/>
              <DropdownMenuItem>
                  <Link 
                  className={itemstyles}
                  href="/categories/sports">
                    <li>sports</li>
                  </Link>
              </DropdownMenuItem>
              <Separator/>
              <DropdownMenuItem>
                <Link 
                  className={itemstyles}
                  href="/categories/enterntainment">
                    <li>enterntainment</li>
                  </Link>
              </DropdownMenuItem>
              <Separator/>
              <DropdownMenuItem>
              <Link 
                  className={itemstyles}
                  href="/categories/politics">
                    <li>politics</li>
                  </Link>
              </DropdownMenuItem>
              <Separator/>
              <DropdownMenuItem>
              <Link 
                  className={itemstyles}
                  href="/categories/general">
                    <li>general</li>
                  </Link>
              </DropdownMenuItem>

            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
