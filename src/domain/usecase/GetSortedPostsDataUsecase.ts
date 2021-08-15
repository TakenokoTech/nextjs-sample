import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { POSTS_DIR } from '../../const';

export default class GetSortedPostsDataUsecase {
  execute(): SortedPostsData[] {
    const fileNames = fs.readdirSync(POSTS_DIR);
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8');
      const matterResult = matter(fileContents);
      return {
        id,
        ...matterResult.data,
      };
    });
    const sortedData = allPostsData.sort((c1, c2) => {
      const a = c1['date'];
      const b = c2['date'];
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
    return sortedData as SortedPostsData[];
  }
}

export interface SortedPostsData {
  id: string;
  date: string;
  title: string;
}
