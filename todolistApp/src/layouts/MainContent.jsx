import Content from "../components/Content";
import Hero from "../components/Hero";

export default function MainContent({ onClickButton }) {
  const articleText =
    "Our TodoList App helps you stay productive and organized. It allows you to easily manage your tasks, set priorities, and keep track of deadlines, ensuring that nothing important is missed.";
  return (
    <>
      <Content>
        <div className="p-12">
          <Hero
            title="Welcome!"
            article={articleText}
            buttonContent="Start now"
            onClickButton={onClickButton}
          />
        </div>
      </Content>
    </>
  );
}
