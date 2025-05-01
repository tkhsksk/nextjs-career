import Link  from 'next/link'

type Props = {
  id: string
  names: string[]
  envs: string[][]
}

export default function DevProdTable( props : Props) {
  return (
    <div className="relative shadow-md sm:rounded-lg mb-4 grid overflow-hidden w-fit mb-5">
      <table className="whitespace-nowrap block overflow-x-auto text-left rtl:text-right text-gray-800 dark:text-gray-400">
        <thead className="text-gray-900 bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {props.names.map((name, index) => (
              <th key={`${props.id}-th0-${index}`} scope="col" className="px-6 py-3">{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.envs.map((env, index) => (
            <tr key={`${props.id}-tb0-${index}`} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th key={`${props.id}-tb1-${index}`} scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">{env[0]}</th>
              <td key={`${props.id}-tb2-${index}`} className="px-6 py-4"><Link href={index == 0 ? 'http://localhost:4207'+env[1] : 'https://api.ksk318.me'+env[1]} target="_blank">{index == 0 ? 'http://localhost:4207' : 'https://api.ksk318.me'}{env[1]}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}