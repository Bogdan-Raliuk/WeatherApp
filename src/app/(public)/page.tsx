import styles from "./mainPage.module.scss";
import SideBar from "@/components/SIdebar/SideBar";

export default function Home() {
	return (
		<main className={styles.wrapper}>
			<SideBar />
		</main>
	);
}
