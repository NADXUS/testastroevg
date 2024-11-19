import { useEffect, useState } from "react";
import usePost from "./../../Hooks/usePost";
import Header from "./../Header";


const BlogSectionInfo = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga

    const $Post = usePost();

    const fetchPosts = async () => {

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");

        const { status, data } = await $Post.get({ id: id });

        if (status) {
            setPost(data.data);
            setLoading(false); // Cuando los datos se cargan, se detiene el estado de carga
        }
    };
    useEffect(() => {
        if ($Post) {
            (async () => {
                await fetchPosts();
                console.log(post);
            })();
        }
    }, [$Post]);

    function convertToEmbedUrl(url) {
        if (url) {
            let videoId;

            if (url.includes("youtube.com/watch?v=")) {
                videoId = url.split("v=")[1]?.split("&")[0];
            } else if (url.includes("youtu.be/")) {
                videoId = url.split("youtu.be/")[1];
            } else if (url.includes("youtube.com/shorts/")) {
                videoId = url.split("shorts/")[1]?.split("?")[0];
            }
            return `https://www.youtube.com/embed/${videoId}`;
        }
    }

    return <div>
        <Header client:visible title={post.title} ></Header>
        <div className="p-6 md:p-20 flex flex-col gap-20 max-w-7xl mx-auto">
            <iframe
                src={convertToEmbedUrl(post.url_video)}
                title={post.title}
                className="w-full aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div dangerouslySetInnerHTML={{ __html: post.description }} className="opacity-70"></div>
        </div>
    </div>
};

export default BlogSectionInfo