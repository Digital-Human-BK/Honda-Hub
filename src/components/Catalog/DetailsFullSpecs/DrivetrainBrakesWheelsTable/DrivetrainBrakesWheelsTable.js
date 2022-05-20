const DrivetrainBrakesWheelsTable = ({ data }) => {
  const specs = data.drivetrain_brakes_and_suspension_specs;
  return (
    <table id='dbs-specs'>
      <tbody>
        <tr>
          <td>Drivetrain architecture</td>
          <td>{specs?.drivetrain_architecture}</td>
        </tr>
        <tr>
          <td>Drive wheel</td>
          <td>{specs?.drive_wheel}</td>
        </tr>
        <tr>
          <td>Number of gears</td>
          <td>{specs?.number_of_gears_manual_transmission || specs?.number_of_gears_automatic_transmission}</td>
        </tr>
        <tr>
          <td>Front suspension</td>
          <td>{specs?.front_suspension}</td>
        </tr>
        <tr>
          <td>Rear suspension</td>
          <td>{specs?.rear_suspension}</td>
        </tr>
        <tr>
          <td>Front brakes</td>
          <td>{specs?.front_brakes}</td>
        </tr>
        <tr>
          <td>Rear brakes</td>
          <td>{specs?.rear}</td>
        </tr>
        <tr>
          <td>Assisting systems</td>
          <td>{specs?.assisting_systems}</td>
        </tr>
        <tr>
          <td>Steering type</td>
          <td>{specs?.steering_type}</td>
        </tr>
        <tr>
          <td>Power steering</td>
          <td>{specs?.power_steering}</td>
        </tr>
        <tr>
          <td>Tires size</td>
          <td>{specs?.tires_size}</td>
        </tr>
        <tr>
          <td>Wheel rims size</td>
          <td>{specs?.wheel_rims_size}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DrivetrainBrakesWheelsTable;
