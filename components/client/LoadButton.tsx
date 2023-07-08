import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import React from 'react'

export default function LoadButton() {
  return (
    <Button disabled>
        <Loader className="mr-2 animate-spin"/>
        <span className="capitalize font-bold">wait</span>
    </Button>
  )
}
