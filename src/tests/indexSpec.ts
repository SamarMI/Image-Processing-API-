import myApp from '../index'
import supertest from 'supertest'
const request = supertest(myApp)

describe('Test endpoint responses', () => {
  it('gets the api/images endpoint successfully', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&height=500&width=500'
    )
    expect(response.status).toBe(200)
  })
})
