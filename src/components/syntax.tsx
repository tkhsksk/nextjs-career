import SyntaxHighlighter from "react-syntax-highlighter";
import { gml } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import fs from 'fs'

type Props = {
  lang: string
  path: string
}

export default function Syntax(props: Props) {
  const text  = fs.readFileSync("src/prog_langs/"+props.path+"", 'utf8')
  const lines = text.toString().split('¥n')

  return (
    <div className="grid">
      <div className="grid overflow-hidden w-fit mt-3">
        <p className="whitespace-nowrap overflow-x-auto text-base w-fill px-2 bg-slate-500 text-white">{props.path}</p>
        </div>
      <SyntaxHighlighter language={props.lang} style={gml} className="mb-3">{lines}</SyntaxHighlighter>
    </div>
  )
}