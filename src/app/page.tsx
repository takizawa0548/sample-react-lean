import { Top } from "@/component/Top";
import { Sample } from "@/component/Sample";
import { Weather } from "@/component/Weather";

export default function Home() {
  // 画面で必要な処理を記載する部分
  const top = "トップページ";
  const sum = 1 + 2 + 3;
  const view = true;
  const array = [
    { key: 1, name: "バナナ" },
    { key: 2, name: "りんご" },
    { key: 1, name: "いちご" },
  ];
  return (
    // 表示される部分
    <main className="flex min-h-screen flex-col items-center">
      ルート
      <Top />

      <Sample sum={sum} view={view}></Sample>

      <div className="pt-6">
        <h2>果物グループ</h2>
        {array.map((item) => (
          <div key={item.key}>
            <p>Name: {item.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Weather />
      </div>
    </main>
  );
}
