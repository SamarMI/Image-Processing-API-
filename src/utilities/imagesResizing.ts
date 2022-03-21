import sharp from 'sharp'


const resizeImage = (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  return sharp('images/' + filename + '.jpg')
    .resize({
      width: width,
      height: height
    })
    .toBuffer()
}
export { resizeImage }
