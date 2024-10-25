import { cookies } from "next/headers";
import Lsidebar from "../(dashboard)/components/Lsidebar";
import Rsidebar from "../(dashboard)/components/Rsidebar";

import { redirect } from "next/navigation";

export default function layout({children}){
  const cookie=cookies()
  if(!cookie.has('token')){
    redirect('/login')
  }



    return (
    <>

<div className="grid  grid-cols-11  mx-auto py-2 px-3">
<div className="col-span-2 py-2">
  <Lsidebar />
</div>
<div className="col-span-6 p-3 ">
{children}
</div>
<div className="col-span-3 ">
  <Rsidebar />
</div>
</div>

    </>
    )
}