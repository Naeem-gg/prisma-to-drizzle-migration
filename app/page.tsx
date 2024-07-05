import {nanoid} from "nanoid"
import {db} from "../drizzle/db"
import { User } from '@/drizzle/schema'
const page = async() => {
  const data = await db.insert(User).values([
    {
      id:nanoid(15),
      email:"n.navsjivan@qvitec.in".concat(Math.random().toString()),
      labname:"Naeem Lab",
      name:"Naeem",
      password:"sankjashfdu",
      unicode:"123",
      updatedAt:new Date()
    }
  ])
  return (
    <div className='font-bold'>
      Hello World!
    </div>
  )
}

export default page
