'use client'

import { Button } from "@nextui-org/react"
import Link from "next/link"

const toolbar = () => {
  return (

<>
<Button color="primary" className="text-lg">
    Start Trial

</Button>
<Link href={'/sign-up'}>Login</Link>
</>
    // <div className="flex items-center gap-3"></div>
  )
}

export default toolbar