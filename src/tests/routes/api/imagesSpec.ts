import { resizeImage } from '../../../utilities/imagesResizing'

describe('Testing image Resizing Transformation', function () {
  it('Expect transform sucessfully to not throw error ', async () => {
    await expectAsync(resizeImage('encenadaport', 400, 400)).toBeResolved()
  })
  it('Expect transform  to  throw  specific error', async () => {
    await expectAsync(resizeImage('encenada', 100, 100)).toBeRejectedWithError(
      Error,
      'Input file is missing'
    )
  })
})
