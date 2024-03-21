export default function ButtonClick({ children }) {
  function handleCLick() {
    console.groupCollapsed("sjbfskjfbsdkjfbk");
  }
  return (
    <li>
      <button onClick={handleCLick()}>{children}</button>
    </li>
  );
}
