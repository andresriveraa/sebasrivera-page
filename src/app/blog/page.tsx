import styles from './blog.module.css';

const Page = () => {
  return (
    <div className={styles['blog']}>
      <p className={styles['blog__text']}>
        Próximamente
      </p>
    </div>
  )
}

export default Page