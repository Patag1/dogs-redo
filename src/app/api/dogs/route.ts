import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(_req: Request) {
  try {
    const dogs = await prisma.dog.findMany()

    return NextResponse.json({ dogs }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
