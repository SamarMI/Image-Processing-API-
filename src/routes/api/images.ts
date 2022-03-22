import { promises as fsPromises } from 'fs'
import fs from 'fs'
import path from 'path'
import { resizeImage } from '../../utilities/imagesResizing'
import express, { NextFunction } from 'express'
const images = express.Router()

images.get('/', async (req: express.Request, res: express.Response , next: express.NextFunction): Promise<void> => {
  try {
        
        const width = parseInt(req.query.width as string)
        const height = parseInt(req.query.height as string)
        const filename = req.query.filename as string

        const outputFileName =
          '../../../resizedImages/' + filename + '_' + width + '_' + height + '.jpg';
        const outFilePath = path.join(__dirname, outputFileName)

        if (!fs.existsSync(outFilePath)) {
          const resizedImage = await resizeImage(filename, height, width)
          await fsPromises.writeFile(outFilePath, resizedImage)
        }
        console.log('filename : ' + filename)
        console.log('height : ' + height)
        console.log('width : ' + width)
        res.sendFile(outFilePath, function (err) {
          if (err) {
            next(err)
          } else {
            console.log('Sent:', outFilePath);
            
          }
        })

        
        
      } catch (err) {
        res.send(" The following error occured processing your image remedy and try again : " + err.message );
        // res.render('errors', { message: err.message });
      }
})
export default images
