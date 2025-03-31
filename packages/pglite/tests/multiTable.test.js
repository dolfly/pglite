import { describe, it, expect } from 'vitest'
import { PGlite } from '../dist/index.js'

describe(`create multiple tables `, () => {
    it('exec', async () => {
      const db = new PGlite()
      await db.exec(`
      CREATE TABLE IF NOT EXISTS test1 (
        id SERIAL PRIMARY KEY,
        name TEXT
      );
      CREATE TABLE IF NOT EXISTS test2 (
        id SERIAL PRIMARY KEY,
        name TEXT
      );      
    `)
      })
    }
  )