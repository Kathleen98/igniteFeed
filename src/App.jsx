import Header from "./components/Header";
import style from "./app.module.css";
import SideBar from "./components/SideBar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      name: "Kathleen Santos",
      avatarUrl: "https://github.com/kathleen98.png",
      role: "Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Perspiciatis consequuntur minus ipsa nisi repudiandae at quasi, impedit adipisci non in ipsum consequatur enim, ",
      },
      { type: "link", content: "https://github.com/kathleen98" },
    ],
    publishedAt: new Date("2025-02-03 14:46:00"),
  },
  {
    id: 2,
    author: {
      name: "Pipoca",
      avatarUrl: "https://i.pinimg.com/736x/38/b0/ae/38b0aecaba13391ef232e286a36e5964.jpg",
      role: "Gatinho",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Perspiciatis consequuntur minus ipsa nisi repudiandae at quasi, impedit adipisci non in ipsum consequatur enim, ",
      },
      { type: "link", content: "https://github.com/kathleen98" },
    ],
    publishedAt: new Date("2025-02-03 14:47:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
