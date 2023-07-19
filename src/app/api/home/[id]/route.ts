import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import postCheck from '@/middlewares/postCheck'
import axios from 'axios'

interface IParams {
  id?: string
}

export async function GET(_req: Request, { params }: { params: IParams }) {
  const { id } = params

  try {
    const dog = await prisma.dog.findUnique({
      where: { id },
    })

    const endpointApi = process.env.DOGS_API
    let dogApi
    if (!dog?.id && endpointApi) {
      dogApi = await axios
        .get(endpointApi)
        .then(response => {response.data})
        // .then(data => {
        //   return data.dogs.filter(d => d.id === id)
        // })
    }

    if (!dog?.id/* && !dogApi?.id*/) {
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
