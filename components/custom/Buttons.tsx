import { Button } from "../ui/button";
import { ButtonProps } from "@/types/interfaces";
import { Loader } from "lucide-react";

export default function Buttons({name,loading}:ButtonProps) {
 if(loading)
 { return (
    <Button disabled>
      <Loader/>
      wait
    </Button>
  )}
  return (
    <Button>
      {name}
    </Button>
  )
}
