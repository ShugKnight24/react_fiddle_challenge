export const SelectedList = ({ selectedItems }) => (
  <div className="SelectedList">
    <h2>Selected Items:</h2>
    {selectedItems.map(item => (
      <p key={item}>{item},</p>
    ))}
  </div>
);
