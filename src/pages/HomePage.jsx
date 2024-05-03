import "./homePage.css";

export default function HomePage() {
  return (
    <div className="home">
      <section className="who-are-we">
        <h2>Who are we?</h2>
        <p>
          We are a small team of dedicated developers who understand the
          struggles of balancing work, personal life, and everything in between.
          Our journey began from a simple realization: traditional to-do lists
          often fall short in keeping up with the dynamic demands of modern
          life. Thus, we embarked on a mission to create a solution that not
          only organizes tasks but also adapts to the ever-changing priorities
          and schedules of our users.
        </p>
      </section>
      <section className="why-should">
        <h2>Why should you choose us?</h2>
        <p>
          This application will help you to organize your tasks,and manage your
          time efficiently. At its core, our team believes in simplifying the
          complexities of daily life, empowering users to prioritize their tasks
          and focus on what truly matters.{" "}
        </p>
      </section>
      <section className="get-started">
        <h2>How to get started?</h2>
        <p>
          Firstly, we recommend you to read this first page and then go to{" "}
          <span>Insert todo's</span>. There you'll be able to insert your first
          todo! After that, go to
          <span> List todo's</span> and see all the todo's that you just
          inserted
        </p>
      </section>
    </div>
  );
}
