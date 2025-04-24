import Image from "next/image"

type Props = {
  text: string
}

export default function Caution(props: Props) {
  return (
    <div className="relative shadow-md px-6 py-4 sm:rounded-lg mb-4 w-fit grid overflow-hidden bg-rose-200">
       <div className="flex">
       <Image
         className="me-4 mx-auto"
         src={'/caution.svg'}
         alt="success"
         width={26}
         height={26}
         priority
       />
          <div>
            <p className="text-rose-950" dangerouslySetInnerHTML={{ __html: props.text }} />
          </div>
       </div>
    </div>
  )
}