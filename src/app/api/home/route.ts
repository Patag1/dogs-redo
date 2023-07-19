import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import axios from 'axios'

export async function GET(_req: Request) {
  try {
    const dogsDb = await prisma.dog.findMany()

    const apiEndpoint = process.env.DOGS_API
    let dogsApi
    if (typeof apiEndpoint === 'string') {
      dogsApi = await axios
        .get(apiEndpoint)
        .then((response) => response.data)
    }

    return NextResponse.json({ dogs: dogsApi }, { status: 200 })

    // return NextResponse.json({ dogs: dogsApi.concat(dogsDb) }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
