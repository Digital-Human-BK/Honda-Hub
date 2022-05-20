const DimensionsTable = ({ data }) => {
  const specs = data.dimensions;
  return (
    <table id='dimensions-specs'>
      <tbody>
        <tr>
          <td>Length</td>
          <td>
            {specs?.length.value} {specs?.length.unit}
          </td>
        </tr>
        <tr>
          <td>Width</td>
          <td>
            {specs?.width.value} {specs?.width.unit}
          </td>
        </tr>
        <tr>
          <td>Height</td>
          <td>
            {specs?.height.value} {specs?.height.unit}
          </td>
        </tr>
        <tr>
          <td>Wheelbase</td>
          <td>
            {specs?.wheelbase.value} {specs?.wheelbase.unit}
          </td>
        </tr>
        <tr>
          <td>Front track</td>
          <td>
            {specs?.front_track.value} {specs?.front_track.unit}
          </td>
        </tr>
        <tr>
          <td>Rear track</td>
          <td>
            {specs?.rear_back_track.value} {specs?.rear_back_track.unit}
          </td>
        </tr>
        <tr>
          <td>
            Drag coefficient {'('}Cd
            {')'}
          </td>
          <td>{specs?.drag_coefficient_cd}</td>
        </tr>
        <tr>
          <td>
            Minimum turning circle {'('}turning diameter{')'}
          </td>
          <td>
            {specs?.minimum_turning_circle_turning_diameter.value}{' '}
            {specs?.minimum_turning_circle_turning_diameter.unit}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DimensionsTable;
