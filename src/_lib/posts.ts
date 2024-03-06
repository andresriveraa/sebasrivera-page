import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import {GrayMatterFile} from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/_posts');

interface IPost {
  id: string;
  date: string;
  title: string;
}

export type Author = {
  name: string;
  picture: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}


export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getSortedPostsData() {
  // Get file names under /_posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: IPost[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      date: matterResult.data?.date,
      title: matterResult.data?.date,
      ...matterResult.data,
    };
  });

  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}


