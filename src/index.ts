import { EnvConfig } from './config';
import { db } from './config';

(async function () {
  try {
    let data = await new EnvConfig().init();
    await db.init();
  } catch (err) {
    console.log(err);
  }
})();

//     // dbConfig()
//     //   .then((data) => {
//     //     console.log({ data });
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //   });
//   })
//   .catch((err) => {
//     console.log('err>>', err);
//   });

// //import { dbConfig } from './config';
