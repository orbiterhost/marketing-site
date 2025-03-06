import { Button } from "./ui/button"
import { Check, Copy, Github } from "lucide-react"
import { useState } from "react"


export function CLI() {
  const [isCopied, setIsCopied] = useState(false)
  const codeText = "npm i -g orbiter-cli";

  const handleCopy = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(codeText);
    setTimeout(() => {
      setIsCopied(false)
    }, 2000);
  };

  return (
    <div
      className="relative z-10 text-white flex flex-col gap-12 items-center justify-center sm:min-h-[600px] sm:my-0 w-full mx-auto"
    >
      <div className="max-w-screen-lg flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 justify-center items-center mx-4 text-center">
          <h1 className="text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Orbiter CLI
          </h1>
          <h3 className="sm:text-xl text-lg">
            Create update and manage your sites from the terminal
          </h3>

        </div>
        <div className="flex items-center justify-between py-3 px-4 bg-primary rounded-md">
          <div
            className="font-mono truncate max-w-[300px] text-white"
          >
            {codeText}
          </div>
          <Button variant="link" size="sm" onClick={handleCopy}>
            {isCopied ? <Check className="h-4 w-4 text-white" /> : <Copy className="h-4 w-4 text-white" />}
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary">
            <a className="flex items-center gap-2" target="_blank" rel="noreferrer" href="https://docs.orbiter.host/cli">
              Docs</a>
          </Button>
          <Button variant="secondary">
            <a className="flex items-center gap-2" target="_blank" rel="noreferrer" href="https://github.com/orbiterhost/orbiter-cli">
              <Github />
              Source Code</a>
          </Button>
        </div>
      </div>
    </div>

  )
}
