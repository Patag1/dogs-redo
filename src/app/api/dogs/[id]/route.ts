import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import postCheck from '@/middlewares/postCheck'

interface IParams {
  id?: string
}

export async function GET(_req: Request, { params }: { params: IParams }) {
  const { id } = params

  try {
    const dog = await prisma.dog.findUnique({
      where: { id },
    })

    if (!dog?.id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json({ dog }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  const data = await req.json()

  try {
    postCheck(data)

    const { image, name, weight, height, lifespan, temps } = data

    await prisma.dog.create({
      data: {
        image,
        name,
        weight,
        height,
        lifespan,
        temps,
      },
    })

    return NextResponse.json({ name }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function DELETE(_req: Request, { params }: { params: IParams }) {
  const { id } = params

  try {
    const { name } = await prisma.dog.delete({
      where: { id },
      select: { name: true },
    })

    return NextResponse.json({ name }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
