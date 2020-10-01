import * as db from '../db';

export async function funct1(req, res, next) {
  await db.testDb();
  res.send("HILLOW");
}

export function funct2(req, res, next) {
  res.send("HILLOW");
}

function test() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 5000);
  } )
}