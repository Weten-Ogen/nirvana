import Link from "next/link";
import { DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,DropdownMenuItem,DropdownMenuGroup,DropdownMenuLabel,DropdownMenuSeparator } from "../ui/dropdown-menu";

import React from 'react';

export default function DropButton() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="capitalize sm:tracking-widest">
            categories
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-lg">
            <DropdownMenuLabel className="tracking-widest uppercase">
                News
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-600"/>
            <DropdownMenuGroup>
                <Link href='/category/business'>
                <DropdownMenuItem>
                    Business
                </DropdownMenuItem>
                </Link>
                <Link href="/category/general">
                <DropdownMenuItem>
                    General
                </DropdownMenuItem>
                </Link>
                <Link href="/category/sports">
                <DropdownMenuItem>
                    Sports
                </DropdownMenuItem>
                </Link>
                <Link href="/category/health">
                <DropdownMenuItem>
                    Health
                </DropdownMenuItem>
                </Link>
                <Link href="/category/entertainment">
                <DropdownMenuItem>
                    Entertainment
                </DropdownMenuItem>
                </Link>
                <Link href="/category/politics">
                <DropdownMenuItem>
                    Politics
                </DropdownMenuItem>
                </Link>
                <Link href="/category/technology">
                <DropdownMenuItem>
                    Technology
                </DropdownMenuItem>
                </Link>
            </DropdownMenuGroup>
        </DropdownMenuContent>

    </DropdownMenu>
  );
}
