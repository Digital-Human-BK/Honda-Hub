const EngineTable = ({ data }) => {
  const specs = data.engine_specs;
  return (
    <table id='engine-specs'>
      <tbody>
        <tr>
          <td>Power</td>
          <td>
            {specs?.power?.value}
            {specs?.power?.unit} @ {specs?.power?.acquired_at_rpm}rpm
          </td>
        </tr>
        <tr>
          <td>Power per litre</td>
          <td>
            {specs?.power_per_litre?.value}{' '}
            {specs?.power_per_litre?.unit}
          </td>
        </tr>
        <tr>
          <td>Torque</td>
          <td>
            {specs?.torque.value}{' '}
            {specs?.torque?.unit} @{' '}
            {specs?.torque?.acquired_at_rpm.min || specs?.torque?.acquired_at_rpm} - {' '}
            {specs?.torque?.acquired_at_rpm.max || specs?.torque?.acquired_at_rpm}
          </td>
        </tr>
        <tr>
          <td>Maximum engine speed</td>
          <td>
            {specs?.maximum_engine_speed || 'No data'}
          </td>
        </tr>
        <tr>
          <td>Engine location</td>
          <td>
            {specs?.engine_location}
          </td>
        </tr>
        <tr>
          <td>Engine model mode</td>
          <td>
            {specs?.engine_model_code}
          </td>
        </tr>
        <tr>
          <td>Engine displacement</td>
          <td>
            {specs?.engine_displacement?.value}{' '}
            {specs?.engine_displacement?.unit}
          </td>
        </tr>
        <tr>
          <td>Number of cylinders</td>
          <td>
            {specs?.number_of_cylinders}
          </td>
        </tr>
        <tr>
          <td>Position of cylinders</td>
          <td>
            {specs?.position_of_cylinders}
          </td>
        </tr>
        <tr>
          <td>Cylinder sore</td>
          <td>
            {specs?.cylinder_bore?.value}{' '}
            {specs?.cylinder_bore?.unit}
          </td>
        </tr>
        <tr>
          <td>Piston stroke</td>
          <td>
            {specs?.piston_stroke?.value}{' '}
            {specs?.piston_stroke?.unit}
          </td>
        </tr>
        <tr>
          <td>Compression ratio</td>
          <td>
            {specs?.compression_ratio}
          </td>
        </tr>
        <tr>
          <td>Number of valves per cylinder</td>
          <td>
            {specs?.number_of_valves_per_cylinder}
          </td>
        </tr>
        <tr>
          <td>Fuel system</td>
          <td>
            {specs?.fuel_system}
          </td>
        </tr>
        <tr>
          <td>Engine aspiration</td>
          <td>
            {specs?.engine_aspiration}
          </td>
        </tr>
        <tr>
          <td>Valvetrain</td>
          <td>
            {specs?.valvetrain}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EngineTable;
