import { Router } from 'express'
const router = Router()

router.post('/donggun_demo_server', function(req, res, next) {
  res.status(200).json({
    data: 'Love 🥰'
  })
});

export default router