import Button from "./Button";

export default function Hero({ title, article, buttonContent, onClickButton }) {
  return (
    <>
      <div className="hero bg-base-200 h-full">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{article}</p>
            <Button onClick={onClickButton}>{buttonContent}</Button>
          </div>
        </div>
      </div>
    </>
  );
}
