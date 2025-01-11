import { Button } from "./ui/button"
import { Check, Copy, Github } from "lucide-react"
import { useState, useEffect } from "react"
import { codeToHtml } from 'shiki'


export function CLI() {
  const [isCopied, setIsCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState('')

  useEffect(() => {
    const highlight = async () => {
      const code = await codeToHtml("npm i -g orbiter-cli", {
        lang: 'bash',
        theme: 'poimandres'
      })
      setHighlightedCode(code)
    }
    highlight()
  }, [])

  const handleCopy = () => {
    setIsCopied(true)
    navigator.clipboard.writeText("npm i -g orbiter-cli");
    setTimeout(() => {
      setIsCopied(false)
    }, 2000);
  };

  return (
    <div
      className="flex flex-col gap-12 items-center justify-center min-h-screen sm:min-h-[600px] sm:my-12 w-full mx-auto"
    >
      <div className="max-w-screen-lg flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Orbiter CLI
          </h1>
          <h3 className="text-xl">
            Create update and manage your sites from the terminal
          </h3>

        </div>
        <div className="flex items-center justify-between py-3 px-4 bg-[#1C1E28] rounded-md">
          <div
            className="font-mono truncate max-w-[300px]"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
          <Button variant="link" size="sm" onClick={handleCopy}>
            {isCopied ? <Check className="h-4 w-4 text-[#91B4D5]" /> : <Copy className="h-4 w-4 text-[#91B4D5]" />}
          </Button>
        </div>
        <div className="flex gap-4">
          <Button>
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
