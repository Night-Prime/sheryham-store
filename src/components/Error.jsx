import React from "react";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <section className="h-max w-screen">
      <main className="sw-full h-3/4 flex flex-col justify-center items-center text-center gap-6">
        <h1 className="font-bold text-6xl">Error Has Occured</h1>
        <button>
          <Link to="/">Home</Link>
        </button>
      </main>
    </section>
  );
};

export default Empty;
