export default function Button({ children, ...props }) {
  return (
    <button className="btn btn-outline btn-accent" {...props}>
      {children}
    </button>
  );
}
