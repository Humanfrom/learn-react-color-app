import Color from './color.js';

const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) =>
<div className="color-list">
  {(colors.length === 0) ?
    <p>No Colors in data</p> :
    colors.map(color => <Color
      key={color.id}
      {...color}
      onRate={(rating) => onRate(color.id,rating)}
      onRemove={() => onRemove(color.id)}
      />)
  }
</div>


export default ColorList;
