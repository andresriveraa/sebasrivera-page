import styles from "./page.module.scss";
import Menu from "@components/global/menu/Menu";
import { getSortedPostsData } from "@lib/posts";
import Link from "next/link";



export default async function Home () {

  const allPostsData = await getSortedPostsData();
  
  return (
    <main className={styles.main}>
      <Menu />
      <h1 className={styles['home__title']}>Sebas Rivera</h1>
      <div className="posts">
        {
          allPostsData.map((post, i) => <Link key={i} href={`/posts/${post?.id}`}><p>{post?.title}</p></Link> )
        }
      </div>
    </main>
  );
}
