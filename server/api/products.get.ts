import { readFileSync } from 'fs'
import { resolve } from 'path'

import Papa from 'papaparse'

import type { Product } from '~/types/product'

export default defineEventHandler((): Product[] => {
  const filePath = resolve(process.cwd(), 'server/data/products.csv')

  const file = readFileSync(filePath, 'utf-8')

  const { data } = Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  })

  return data as Product[]
})
