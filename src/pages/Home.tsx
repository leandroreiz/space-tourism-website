function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>00 Home</li>
            <li>01 Destination</li>
            <li>02 Crew</li>
            <li>03 Technology</li>
          </ul>
        </nav>
      </header>

      <main className="container grid">
        <div>
          <h5 className="heading subtitle">So, you want to travel to</h5>
          <h1 className="heading">Space</h1>
          <p className="body-text">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>Explore</div>
      </main>
    </>
  );
}

export default Home;
