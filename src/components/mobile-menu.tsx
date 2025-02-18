import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Rocket } from "lucide-react"
import { Button } from "./ui/button"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden" asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent className="bg-none text-2xl flex flex-col gap-8 items-end pt-20" side="top">
        <SheetTitle className="hidden">Mobile Menu</SheetTitle>
        <a href="/"
        >Home</a
        >
        <a href="/about"
        >About</a
        >
        <a href="/pricing"
        >Pricing</a
        >
        <a href="/blog"
        >Blog</a
        >
        <a target="_blank" href="https://docs.orbiter.host"
        >Docs</a
        >
        <Button asChild className="text-2xl p-6">
          <a href="https://app.orbiter.host">
            <Rocket className="!w-6 !h-6" />
            Launch
          </a>
        </Button>
      </SheetContent>
    </Sheet>
  )
}
