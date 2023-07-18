import ReadMore from "@/components/ReadMore";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 py-24">
      <section className="w-[75ch] flex justify-center items-center gap-4">
        <article className='flex flex-col gap-4'>
          <h1 className="w-fit text-center text-4xl font-extrabold text-neutral-900 dark:text-neutral-100">Doggies</h1>
          <ReadMore
            text="This is a redo of a personal project I developed using the following technologies: create-react-app, React, Redux, Express.js, Node.js, Sequelize, PostgreSQL. Decided to revamp it using more modern technologies to differentiate myself with the stack that is the norm of a lot of my LinkedIn contacts having finished a certain bootcamp. Also wanted to finish up what I started to showcase really what I&apos;m capable of doing after a whole year programming both as a self-taught manner and following bootcamps and courses.
            This project uses: Next.js, Typescript, Tailwind, React, Zustand, Prisma and PostgreSQL."
          />
        </article>
      </section>
      <aside className='w-[75ch] flex justify-start items-center'>
        <a
          href="/home"
          className="relative bg-emerald-400 px-16 py-4 rounded-md font-extrabold hover:brightness-110 active:brightness-90 disabled:brightness-90"
        >
          Enter
        </a>
      </aside>
    </main>
  )
}
