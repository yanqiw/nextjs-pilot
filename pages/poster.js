import Link from "next/link";
import styles from "../styles/Home.module.css";
function Poster({user}) {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
          Hello {user && user.name}, Welcome to{" "}
          <a href="https://nextjs-pilot.vercel.app/">GitUnion!</a>
        </h1>

      <div className={styles.grid}>
        <div className={styles.card} style={{width:600}}>
          <Link href="/">
            <h3>返回主页</h3>
          </Link>
          <p>好基友，见面聊！</p>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://nextjs-pilot.vercel.app/api/hello`);
  const data = await res.json();
  if (!data) {
    return {
      props: {
        user: { name: "" },
      },
    };
  }
  return {
    props: {
      user: data,
    }, // will be passed to the page component as props
  };
}

export default Poster;
