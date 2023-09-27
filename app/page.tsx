import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container"></div>
      <h1>First QuizApp on Nest.js</h1>
      <Link href="/quiz">
      <button>Start Button</button>
      </Link>
      <Link href="/about">
      <button>About Us</button>
      </Link>
    </main>
  )
}
