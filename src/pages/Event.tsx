import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebard";
import { Video } from "../components/Video";

export function Event() {
	const { slug } = useParams<{ slug: string }>();

	return (
		<div className='flex flex-col'>
			<Header />
			<main className='flex min-h-screen flex-1'>
				{slug ? <Video lessonSlug={slug} /> : <div className='flex-1' />}
				<Sidebar />
			</main>
		</div>
	);
}
