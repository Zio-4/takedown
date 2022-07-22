import Link from "next/link"

const Page = () => {
    return (
      <div>
        <h1>Note index Path</h1>

        <Link href='/notes/[id]' as={`/notes/1`}>
          <a>
              Note 1
          </a>
        </Link>
      </div>
    )
  }
  
export default Page