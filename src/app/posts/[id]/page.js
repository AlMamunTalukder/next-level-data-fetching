import Link from "next/link";

const DetailsPostPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  console.log(post);
  return (
    <div>
      <div
        key={post.id}
        className="card w-[50%] bg-gray-100 shadow-xl m-5 mx-auto my-5"
      >
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
          <p>Like: {post.likes_count}</p>
          <div className="card-actions justify-end">
            <Link href={"/posts"}>
              <button className="btn btn-accent">Back to Post Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPostPage;
