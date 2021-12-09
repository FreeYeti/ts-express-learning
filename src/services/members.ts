import { Response, Request, NextFunction } from 'express';

import { Member as MemberInterface } from '../types/members';

export function list(req: Request, res: Response, next: NextFunction): void {
  const data: MemberInterface[] = [
    { name: 'FreeYeti', age: 18, email: 'yeti@freeyeti.net' },
    { name: 'Jack', age: 19, email: 'test@test.com' },
    { name: 'A', age: 20, email: 'a@b.org' },
  ];

  try {
    res.send(data);
  } catch (err) {
    next(err);
  }

  return;
}
