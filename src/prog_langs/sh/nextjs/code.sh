# シンタックスハイライターをインポート
yarn add react-syntax-highlighter
yarn add --dev @types/react-syntax-highlighter

# tsxファイル内でimport
import SyntaxHighlighter from "react-syntax-highlighter";
import { テーマ名 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

# コードをシンタックスハイライターで表示させる
function SyntaxCode(lang: string, file: string) {
   const text  = fs.readFileSync("../"+lang+"/"+file+"", 'utf8')
   const lines = text.toString().split('¥n')
   return <div className="grid">
   <p className="absolute text-base px-2 bg-slate-500 text-white">{file}</p>
   <SyntaxHighlighter language={lang} style={gml} className="mb-3 mt-6">{lines}</SyntaxHighlighter>
   </div>;
}

# pythonディレクトリのvar.pyの内容を表示させる
{SyntaxCode('python','var.py')}