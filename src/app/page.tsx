import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/15161463-5f6c-43e0-9283-258827be0d92-tbc48e.png",
  "https://utfs.io/f/c1f0f626-f9df-4ffc-a6ea-d8697946f1d9-ruxgie.png",
  "https://utfs.io/f/a7ff7e32-15e1-4b9f-b9a3-464cb21dc8bf-dlon8u.png",
  "https://utfs.io/f/1465f6d9-de1f-45c8-bfc6-5de99453e91c-iegenj.png",
  "https://utfs.io/f/0789f9d5-9765-4c62-8909-528d8ed3eb53-96bds6.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log("posts", posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
