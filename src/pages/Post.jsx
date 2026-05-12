// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../appwrite/config";
// import { Button, Container } from "../components";
// import parse from "html-react-parser";
// import { useSelector } from "react-redux";

// export default function Post() {
//     const [post, setPost] = useState(null);
//     const { slug } = useParams();
//     const navigate = useNavigate();

//     const userData = useSelector((state) => state.auth.userData);
//     const imageId = post?.featuredImage || post?.featureImage;

//     const isAuthor = post && userData ? post.userId === userData.$id : false;

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if (post) setPost(post);
//                 else navigate("/");
//             });
//         } else navigate("/");
//     }, [slug, navigate]);

//     const deletePost = () => {
//         appwriteService.deletePost(post.$id).then((status) => {
//             if (status) {
//                 if (imageId) {
//                     appwriteService.deleteFile(imageId);
//                 }
//                 navigate("/");
//             }
//         });
//     };

//     return post ? (
//         <div className="py-8">
//             <Container>
//                 <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
//                     {imageId ? (
//                         <img
//                             src={appwriteService.getFilePreview(imageId)}
//                             alt={post.title}
//                             className="rounded-xl"
//                             onError={(event) => {
//                                 console.error("Post image failed:", event.currentTarget.src);
//                             }}
//                         />
//                     ) : (
//                         <div className="rounded-xl bg-gray-200 p-4 text-sm text-gray-600">
//                             Image URL missing
//                         </div>
//                     )}

//                     {isAuthor && (
//                         <div className="absolute right-6 top-6">
//                             <Link to={`/edit-post/${post.$id}`}>
//                                 <Button bgColor="bg-green-500" className="mr-3">
//                                     Edit
//                                 </Button>
//                             </Link>
//                             <Button bgColor="bg-red-500" onClick={deletePost}>
//                                 Delete
//                             </Button>
//                         </div>
//                     )}
//                 </div>
//                 <div className="w-full mb-6">
//                     <h1 className="text-2xl font-bold">{post.title}</h1>
//                 </div>
//                 <div className="browser-css">
//                     {parse(post.content)}
//                     </div>
//             </Container>
//         </div>
//     ) : null;
// }
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const imageId = post?.featuredImage || post?.featureImage;

    const isAuthor =
        post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        setLoading(true);

        if (!slug) {
            navigate("/");
            return;
        }

        appwriteService.getPost(slug).then((post) => {
            if (!post) navigate("/");
            setPost(post);
            setLoading(false);
        });
    }, [slug, navigate]);

    const deletePost = async () => {
        const status = await appwriteService.deletePost(post.$id);

        if (status) {
            if (imageId) await appwriteService.deleteFile(imageId);
            navigate("/");
        }
    };

    if (loading) {
        return (
            <Container>
                <div className="py-10 max-w-3xl mx-auto animate-pulse space-y-4">
                    <div className="h-8 bg-gray-200 w-2/3 rounded"></div>
                    <div className="h-4 bg-gray-200 w-1/3 rounded"></div>
                    <div className="h-64 bg-gray-200 rounded-xl"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 w-5/6 rounded"></div>
                        <div className="h-4 bg-gray-200 w-4/6 rounded"></div>
                    </div>
                </div>
            </Container>
        );
    }

    if (!post) return null;

    const authorName =
        post?.authorName ||
        userData?.name ||
        "Anonymous Author";

    return (
        <div className="bg-white min-h-screen">
            <Container>
                <div className="max-w-3xl mx-auto py-10">

                    
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                        {post.title}
                    </h1>

                   
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div>
                            Written by{" "}
                            <span className="font-medium text-gray-700">
                                {authorName}
                            </span>
                        </div>

                        <div>Just now</div>
                    </div>

                    
                    {imageId && (
                        <div className="mb-8 rounded-xl overflow-hidden">
                            <img
                                src={appwriteService.getFilePreview(imageId)}
                                alt={post.title}
                                className="w-full max-h-[420px] object-cover"
                            />
                        </div>
                    )}

                    
                    {isAuthor && (
                        <div className="flex gap-3 mb-8">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className="bg-black text-white px-5 py-2 rounded-md">
                                    Edit Post
                                </Button>
                            </Link>

                            <Button
                                onClick={deletePost}
                                className="bg-red-600 text-white px-5 py-2 rounded-md"
                            >
                                Delete
                            </Button>
                        </div>
                    )}

                   
                    <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                        {parse(post.content)}
                    </article>

                </div>
            </Container>
        </div>
    );
}