import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../layouts/MainContent";
import TodoContent from "../layouts/TodoContent";

export default function MainPage() {
  const [contentType, setContentType] = useState("main");

  const dummyTodos = [
    "Learn HTML",
    "Learn CSS",
    "Learn Javascript",
    "Learn React",
  ];

  function changeTodoPage() {
    setContentType("todolist");
  }

  function changeMainPage() {
    setContentType("main");
  }

  return (
    <>
      <div className="w-screen flex">
        <div className="min-h-screen py-12 mx-4">
          <Sidebar todo={dummyTodos} onClickSidebarTitle={changeMainPage} />
        </div>
        <div className="w-full min-h-screen py-12 mx-6">
          {contentType === "main" ? (
            <MainContent onClickButton={changeTodoPage} />
          ) : (
            <TodoContent />
          )}
        </div>
      </div>
    </>
  );
}
