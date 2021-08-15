import fs from 'fs';
import { POSTS_DIR } from '../../const';

export default class GetAllPostIdsUsecase {
  execute() {
    const fileNames = fs.readdirSync(POSTS_DIR);

    // Returns an array that looks like this:
    // [{params: {id: 'ssg-ssr'}},{params: {id: 'pre-rendering'}}]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }
}
