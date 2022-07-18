export const ListItem = ({ data, ...props }) => {
  return (
    <div style={{ borderRadius: '15px', padding: '5px 25px', boxShadow: '0 2px 8px 0 rgba( 31, 38, 135, 0.1 )' }}>
      <h2>{data.title}</h2>
      <h4>{data.url}</h4>
    </div>
  )
}
