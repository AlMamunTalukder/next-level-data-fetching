import Link from "next/link";

const PostPages = async () => {
  
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  });
  const posts = await res.json();
  console.log(posts);


  return (
    <div className="w-full">
      <h1 className="text-2xl">Total Post: {posts.length}</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="card w-[50%] bg-gray-100 shadow-xl m-5 mx-auto my-5"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Like: {post.likes_count}</p>
            <div className="card-actions justify-end">
              <Link href={`/posts/${post.id}`}>
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostPages;
