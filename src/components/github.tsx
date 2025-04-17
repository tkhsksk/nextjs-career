import Image from "next/image"
import Link  from 'next/link'

type Props = {
  url: string
}

export default function Github(props: Props) {
  return (
    <div className="relative shadow-md p-6 sm:rounded-lg mb-4 w-fit grid overflow-hidden bg-slate-200">
       <div className="flex">
       <Image
         className="me-6 mx-auto"
         src={'/GitHub_Invertocat_Dark.svg'}
         alt="success"
         width={38}
         height={38}
         priority
       />
          <div>
            <p className="font-semibold text-cyan-950">Read on github</p>
            <Link className="break-all dark:text-gray-600" href={'https://github.com/tkhsksk/'+props.url} target="_blank">{'https://github.com/tkhsksk/'+props.url}<i className="ph ph-arrow-square-out ms-1"></i></Link>
          </div>
       </div>
    </div>
  )
}