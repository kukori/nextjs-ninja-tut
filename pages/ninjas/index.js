import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

// fetching data for server side rendering
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas && ninjas.map((ninja) => (
                <Link key={ninja.id} href={`/ninjas/${ninja.id}`} >
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Ninjas;
