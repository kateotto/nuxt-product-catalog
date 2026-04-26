import { readFileSync } from 'fs'
import { resolve } from 'path'
import Papa from 'papaparse'
import type { Product } from '~/types/product'

export default defineEventHandler((): Product[] => {
  const filePath = resolve(process.cwd(), 'server/assets/data/products.csv')
  console.log('filePath:', filePath)
  console.log('cwd:', process.cwd())
  
  const file = readFileSync(filePath, 'utf-8')
  console.log('file:', file.slice(0, 100))

  const { data } = Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  })

  return data as Product[]
})