const PerformanceTable = ({ data }) => {
  const specs = data.performance_specs;
  return (
    <table id='performance-specs'>
      <tbody>
        <tr>
          <td>Fuel Type</td>
          <td>{specs?.fuel_type}</td>
        </tr>
        <tr>
          <td>Acceleration 0-100km/h</td>
          <td>
            {specs?.acceleration_0_100_km_h.value}{' '}
            {specs?.acceleration_0_100_km_h.unit}
          </td>
        </tr>
        <tr>
          <td>Acceleration 0-62mph</td>
          <td>
            {specs?.acceleration_0_62_mph.value}{' '}
            {specs?.acceleration_0_62_mph.unit}
          </td>
        </tr>
        <tr>
          <td>Maximum speed</td>
          <td>
            {specs?.maximum_speed.value}{' '}
            {specs?.maximum_speed.unit}
          </td>
        </tr>
        <tr>
          <td>Emission Standard</td>
          <td>{specs?.emission_standard}</td>
        </tr>
        <tr>
          <td>Weight to power ratio</td>
          <td>{specs?.weight_to_power_ratio}</td>
        </tr>
        <tr>
          <td>Weight to torque ratio</td>
          <td>{specs?.weight_to_torque_ratio}</td>
        </tr>
        <tr>
          <td>Fuel Consumption - urban</td>
          <td>
            {specs?.fuel_consumption_economy_urban.value}{' '}
            {specs?.fuel_consumption_economy_urban.unit}
          </td>
        </tr>
        <tr>
          <td>Fuel Consumption - extra urban</td>
          <td>
            {specs?.fuel_consumption_economy_extra_urban.value}{' '}
            {specs?.fuel_consumption_economy_extra_urban.unit}
          </td>
        </tr>
        <tr>
          <td>Fuel Consumption - combined</td>
          <td>
            {specs?.fuel_consumption_economy_combined.value}{' '}
            {specs?.fuel_consumption_economy_combined.unit}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PerformanceTable;
