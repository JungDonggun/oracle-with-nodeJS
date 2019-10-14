import { Router } from 'express'
import multer from 'multer'

const ORIGINAL_PATH = '../../uploads/original'
const MUTATION_PATH = '../../uploads/mutation'

const upload = multer({dest: ORIGINAL_PATH }); 


const router = Router()

router.post('/donggun_demo_server', upload.array('files'), function(req, res, next) {
  res.status(200).json({
    data: req.files
  })
});

export default router