{
    "menus": [
        {
            "id": 1,
            "title": "about",
            "name": "本サイトについての記述",
            "subs": ["helloWorld","calc","func,struct","array","crud","post,get"]
        }
    ]
}

# .tsxファイル内でmapで回す
{Datas.menus.map(item =>
{
//const active_link = (pathname == item.title ? 'yes': '');
return (
  <li className='font-[family-name:var(--font-geist-mono)]' key={item.id}>
    <Link className={pathname == '/'+item.title ? 'font-bold': ''} href={{ pathname:item.title}}>{item.title}</Link>
    {pathname == '/'+item.title ? <ul className='mb-2 pt-1'>{item.subs.map(item => 
      {
        return (<li className='text-[#e2e8f0] text-sm' key="id"><Link href={'#'+item}>{item}</Link></li>);
      })}
    </ul>: ''}
  </li>);
})}