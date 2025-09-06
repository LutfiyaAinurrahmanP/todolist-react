export default function Sidebar({ todo, onClickSidebarTitle }) {
  return (
    <ul className="menu bg-accent rounded-box w-80 h-full">
      <li className="p-4">
        <h2
          className="text-white/60 font-bold text-2xl hover:bg-none"
          onClick={onClickSidebarTitle}
        >
          Todolist APP
        </h2>
        <ul className="text-white">
          {todo.map((item, index) => (
            <li key={index}>
              <p className="text-white text-lg">{item}</p>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
