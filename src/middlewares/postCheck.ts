import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { postDogData } from '@/types'

export default async function postCheck(data: postDogData) {
  const { name, weight, height, lifespan, temps } = data

  if (!name) {
    return NextResponse.json({ error: 'Missing name!' }, { status: 400 })
  }

  if (!weight.min || !weight.max) {
    return NextResponse.json({ error: 'Missing weight!' }, { status: 400 })
  }

  if (!Number(weight.min) || !Number(weight.max)) {
    return NextResponse.json({ error: 'Invalid weight!' }, { status: 400 })
  }
  
  if (!height.min || !height.max) {
    return NextResponse.json({ error: 'Missing height!' }, { status: 400 })
  }

  if (!Number(height.min) || !Number(height.max)) {
    return NextResponse.json({ error: 'Invalid height!' }, { status: 400 })
  }

  if (!lifespan.min || !lifespan.max) {
    return NextResponse.json({ error: 'Missing lifespan!' }, { status: 400 })
  }

  if (!Number(lifespan.min) || !Number(lifespan.max)) {
    return NextResponse.json({ error: 'Invalid lifespan!' }, { status: 400 })
  }

  if (!temps.length) {
    return NextResponse.json({ error: 'Missing temperaments!' }, { status: 400 })
  }

  const dbTemps = (await prisma.temp.findMany({
    select: { id: true }
  })).map(obj => obj.id)
  const checkTemps = temps.every((t: number) => dbTemps.includes(t))

  if (!checkTemps) {
    return NextResponse.json({ error: 'Invalid temperaments!' }, { status: 400 })
  }
}
