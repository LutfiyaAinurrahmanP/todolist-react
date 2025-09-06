export default function Sidebar({ todo, onClickSidebarTitle }) {
  return (
    <ul className="menu bg-accent rounded-box w-80 h-full">
      <li className="p-4">
        <h2
          className="text-white/60 font-bold text-2xl hover:text-white/80"
          onClick={onClickSidebarTitle}
        >
          Todolist APP
        </h2>
        <ul className="text-white">
          {todo.map((item, index) => (
            <li key={index}>
              <p className="text-white/70 text-lg hover:text-white">{item}</p>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
