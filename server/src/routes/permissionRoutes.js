import { Router } from 'express';
import * as PermissionService from '../services/permissionService';

const router = Router();

router.get('/', async (req, res, next) => {
  const result = await PermissionService.getPermissions();
  res.status(200).json(result);
  next();
});

router.get('/:id', async (req, res, next) => {
  const result = await PermissionService.getDBPermissions({
    id: req.params.id,
  });
  if (result) {
    res.status(200).json(result);
    next();
  } else {
    const err = new Error('Database not found');
    next(err);
  }
});

export default router;
