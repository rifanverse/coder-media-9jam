import Main from "../components/main"
import Heros from "../components/hero";

export default function Home() {
  return (
    <div>
      <Heros />
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-4xl text-bold uppercase">Room & rates</h1>
          <p className="px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, enim
            hic dicta mollitia nisi fuga.
          </p>
        </div>
        <Main />
      </div>
    </div>
  );
}
