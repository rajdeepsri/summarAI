const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <p className="text-2xl font-bold cursor-pointer">SummarAI</p>
        <button
          className="black_btn"
          type="button"
          onClick={() => window.open("https://github.com/rajdeepsri/")}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text orange_gradient">
        Summarize Articles with GPT-4
      </h1>
      <h2 className="desc">
        SummarAI, your go-to web content summarization tool, takes any website
        link you provide and swiftly distills its essence into concise summaries
      </h2>
    </header>
  );
};

export default Hero;
