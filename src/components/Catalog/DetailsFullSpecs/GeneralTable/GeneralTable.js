const GeneralTable = ({ data }) => {
  return (
    <table id='general-specs'>
      <tbody>
        <tr>
          <td>Brand</td>
          <td>Honda</td>
        </tr>
        <tr>
          <td>Model</td>
          <td>{data.model}</td>
        </tr>
        <tr>
          <td>Generation</td>
          <td>{data.generation}</td>
        </tr>
        <tr>
          <td>
            Modification {'('}Engine{')'}
          </td>
          <td>{data.modification_engine}</td>
        </tr>
        <tr>
          <td>Start of production</td>
          <td>{data.general_information?.start_of_production} year</td>
        </tr>
        <tr>
          <td>End of production</td>
          <td>{data.general_information?.end_of_production} year</td>
        </tr>
        <tr>
          <td>Powertrain architecture</td>
          <td>{data.general_information?.powertrain_architecture}</td>
        </tr>
        <tr>
          <td>Body type</td>
          <td>{data.general_information?.body_type}</td>
        </tr>
        <tr>
          <td>Seats</td>
          <td>{data.general_information?.seats}</td>
        </tr>
        <tr>
          <td>Doors</td>
          <td>{data.general_information?.doors}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GeneralTable;
