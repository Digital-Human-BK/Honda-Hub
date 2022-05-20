const WeightTable = ({ data }) => {
  const specs = data.space_volume_and_weights;
  return (
    <table id='weight-specs'>
      <tbody>
        <tr>
          <td>Kerb Weight</td>
          <td>
            {specs?.kerb_weight.value}{' '}
            {specs?.kerb_weight.unit}
          </td>
        </tr>
        <tr>
          <td>Max Weight</td>
          <td>
            {specs?.max_weight.value}{' '}
            {specs?.max_weight.unit}
          </td>
        </tr>
        <tr>
          <td>Max Load</td>
          <td>
            {specs?.max_load.value}{' '}
            {specs?.max_load.unit}
          </td>
        </tr>
        <tr>
          <td>Trunk {'('}boot{')'} space - minimum</td>
          <td>
            {specs?.trunk_boot_space_minimum.value}{' '}
            {specs?.trunk_boot_space_minimum.unit}
          </td>
        </tr>
        <tr>
          <td>Fuel tank capacity</td>
          <td>
            {specs?.fuel_tank_capacity.value}{' '}
            {specs?.fuel_tank_capacity.unit}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeightTable;
