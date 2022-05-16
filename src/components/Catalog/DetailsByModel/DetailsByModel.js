// import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// import { getModel } from '../../../services/catalogService';

import './DetailsByModel.css';

import DarkHeader from '../../Common/DarkHeader';
// import Loader from '../../Common/Loader';

const data = {
  data: {
    id: 's2000',
    brand: 'Honda',
    model: 'S2000',
    generations: [
      {
        id: 'honda_s2000_ap1_facelift_2004',
        name: 'Honda S2000 (AP1, facelift 2004)',
        type: 'Cabriolet',
        yearsOfProduction: {
          start: 2004,
          end: null,
        },
        power: {
          min: {
            value: 240,
            unit: 'Hp',
          },
          max: {
            value: 242,
            unit: 'Hp',
          },
        },
        dimensions: {
          length: {
            value: 4135,
            unit: 'mm',
          },
          width: {
            value: 1750,
            unit: 'mm',
          },
          height: {
            value: 1285,
            unit: 'mm',
          },
        },
        engines: [
          {
            id: '0ca3cace-ab61-4c84-a575-d2fbf85e4404',
            brand: 'Honda',
            model: 'S2000',
            generation: 'S2000 (AP1, facelift 2004)',
            modification_engine: '2.2 (242 Hp)',
            general_information: {
              start_of_production: 2004,
              end_of_production: 2009,
              powertrain_architecture: 'Internal Combustion engine',
              body_type: 'Cabriolet',
              seats: 2,
              doors: 2,
            },
            performance_specs: {
              fuel_consumption_economy_urban: {
                value: 13.2,
                unit: 'l/100km',
              },
              fuel_consumption_economy_extra_urban: {
                value: 7.9,
                unit: 'l/100km',
              },
              fuel_consumption_economy_combined: {
                value: 9.9,
                unit: 'l/100km',
              },
              fuel_type: 'Petrol (Gasoline)',
              acceleration_0_100_km_h: {
                value: 6.2,
                unit: 'sec',
              },
              acceleration_0_62_mph: {
                value: 6.2,
                unit: 'sec',
              },
              maximum_speed: {
                value: 240,
                unit: 'km/h',
              },
              emission_standard: 'Euro 4',
              weight_to_power_ratio: '5.2 kg/Hp, 193.6 Hp/tonne',
              weight_to_torque_ratio: '5.7 kg/Nm, 176.8 Nm/tonne',
            },
            engine_specs: {
              power_hp: 242,
              power: {
                value: 242,
                unit: 'Hp',
                acquired_at_rpm: 7800,
              },
              power_per_litre: {
                value: 112.2,
                unit: 'Hp/l',
              },
              torque: {
                value: 221,
                unit: 'Nm',
                acquired_at_rpm: {
                  min: 6500,
                  max: 7500,
                },
              },
              maximum_engine_speed: '8000 rpm.',
              engine_location: 'Front, Longitudinal',
              engine_model_code: 'F22B',
              engine_displacement: {
                value: 2157,
                unit: 'cm',
              },
              number_of_cylinders: 4,
              position_of_cylinders: 'Inline',
              cylinder_bore: {
                value: 87,
                unit: 'mm',
              },
              piston_stroke: {
                value: 90.7,
                unit: 'mm',
              },
              compression_ratio: 11.1,
              number_of_valves_per_cylinder: 4,
              fuel_system: 'Multi-point indirect injection',
              engine_aspiration: 'Naturally aspirated engine',
              valvetrain: 'DOHC, VTEC',
            },
            space_volume_and_weights: {
              kerb_weight: {
                value: 1250,
                unit: 'kg',
              },
              max_weight: {
                value: 1535,
                unit: 'kg',
              },
              max_load: {
                value: 285,
                unit: 'kg',
              },
              trunk_boot_space_minimum: {
                value: 160,
                unit: 'liter',
              },
              fuel_tank_capacity: {
                value: 50,
                unit: 'liter',
              },
            },
            dimensions: {
              length: {
                value: 4135,
                unit: 'mm',
              },
              width: {
                value: 1750,
                unit: 'mm',
              },
              height: {
                value: 1285,
                unit: 'mm',
              },
              wheelbase: {
                value: 2400,
                unit: 'mm',
              },
              front_track: {
                value: 1470,
                unit: 'mm',
              },
              rear_back_track: {
                value: 1510,
                unit: 'mm',
              },
              ride_height_ground_clearance: {
                value: 130,
                unit: 'mm',
              },
              drag_coefficient_cd: '0.37',
              minimum_turning_circle_turning_diameter: {
                value: 10.8,
                unit: 'm',
              },
            },
            drivetrain_brakes_and_suspension_specs: {
              drivetrain_architecture:
                'The Internal combustion engine (ICE) drives the rear wheels of the vehicle.',
              drive_wheel: 'Rear wheel drive',
              number_of_gears_manual_transmission: 6,
              front_suspension: 'Double wishbone',
              rear_suspension: 'Double wishbone',
              front_brakes: 'Ventilated discs',
              rear_brakes: 'Disc',
              assisting_systems: 'ABS (Anti-lock braking system)',
              steering_type: 'Steering rack and pinion',
              power_steering: 'Electric Steering',
              tires_size:
                'Front wheel tires: 215/45 R17Rear wheel tires: 245/40 R17',
              wheel_rims_size:
                'Front wheel rims: 7.0J x 17Rear wheel rims: 8.5J x 17',
            },
          },
          {
            id: '7b635fae-335a-47af-9c60-3c7f1a51e5cb',
            brand: 'Honda',
            model: 'S2000',
            generation: 'S2000 (AP1, facelift 2004)',
            modification_engine: '2.0 (240 Hp)',
            general_information: {
              start_of_production: 2004,
              end_of_production: 2008,
              powertrain_architecture: 'Internal Combustion engine',
              body_type: 'Cabriolet',
              seats: 2,
              doors: 2,
            },
            performance_specs: {
              fuel_consumption_economy_urban: {
                value: 13.2,
                unit: 'l/100km',
              },
              fuel_consumption_economy_extra_urban: {
                value: 7.9,
                unit: 'l/100km',
              },
              fuel_consumption_economy_combined: {
                value: 9.9,
                unit: 'l/100km',
              },
              co2_emissions: {
                value: 235,
                unit: 'g/km',
              },
              fuel_type: 'Petrol (Gasoline)',
              acceleration_0_100_km_h: {
                value: 6.2,
                unit: 'sec',
              },
              acceleration_0_62_mph: {
                value: 6.2,
                unit: 'sec',
              },
              maximum_speed: {
                value: 240,
                unit: 'km/h',
              },
              emission_standard: 'Euro 4',
              weight_to_power_ratio: '5.3 kg/Hp, 189 Hp/tonne',
              weight_to_torque_ratio: '6.1 kg/Nm, 163.8 Nm/tonne',
            },
            engine_specs: {
              power_hp: 240,
              power: {
                value: 240,
                unit: 'Hp',
                acquired_at_rpm: 8300,
              },
              power_per_litre: {
                value: 120.2,
                unit: 'Hp/l',
              },
              torque: {
                value: 208,
                unit: 'Nm',
                acquired_at_rpm: 7500,
              },
              engine_location: 'Front, Longitudinal',
              engine_model_code: 'F20C',
              engine_displacement: {
                value: 1997,
                unit: 'cm',
              },
              number_of_cylinders: 4,
              position_of_cylinders: 'Inline',
              cylinder_bore: {
                value: 87,
                unit: 'mm',
              },
              piston_stroke: {
                value: 84,
                unit: 'mm',
              },
              compression_ratio: 11,
              number_of_valves_per_cylinder: 4,
              fuel_system: 'Multi-point indirect injection',
              engine_aspiration: 'Naturally aspirated engine',
              valvetrain: 'DOHC',
            },
            space_volume_and_weights: {
              kerb_weight: {
                value: 1270,
                unit: 'kg',
              },
              max_weight: {
                value: 1535,
                unit: 'kg',
              },
              max_load: {
                value: 265,
                unit: 'kg',
              },
              trunk_boot_space_minimum: {
                value: 143,
                unit: 'liter',
              },
              fuel_tank_capacity: {
                value: 50,
                unit: 'liter',
              },
            },
            dimensions: {
              length: {
                value: 4135,
                unit: 'mm',
              },
              width: {
                value: 1750,
                unit: 'mm',
              },
              height: {
                value: 1285,
                unit: 'mm',
              },
              wheelbase: {
                value: 2400,
                unit: 'mm',
              },
              front_track: {
                value: 1470,
                unit: 'mm',
              },
              rear_back_track: {
                value: 1510,
                unit: 'mm',
              },
              ride_height_ground_clearance: {
                value: 108,
                unit: 'mm',
              },
              minimum_turning_circle_turning_diameter: {
                value: 11.3,
                unit: 'm',
              },
            },
            drivetrain_brakes_and_suspension_specs: {
              drivetrain_architecture:
                'The Internal combustion engine (ICE) drives the rear wheels of the vehicle.',
              drive_wheel: 'Rear wheel drive',
              number_of_gears_manual_transmission: 6,
              front_suspension: 'Double wishbone',
              rear_suspension: 'Double wishbone',
              front_brakes: 'Ventilated discs',
              rear_brakes: 'Disc',
              assisting_systems: 'ABS (Anti-lock braking system)',
              steering_type: 'Steering rack and pinion',
              power_steering: 'Electric Steering',
              tires_size:
                'Front wheel tires: 215/45 R17Rear wheel tires: 245/40 R17',
              wheel_rims_size:
                'Front wheel rims: 7.0J x 17Rear wheel rims: 8.5J x 17',
            },
          },
        ],
      },
      {
        id: 'honda_s2000_ap1',
        name: 'Honda S2000 (AP1)',
        type: 'Cabriolet',
        yearsOfProduction: {
          start: 1999,
          end: 2004,
        },
        power: {
          value: 240,
          unit: 'Hp',
        },
        dimensions: {
          length: {
            value: 4135,
            unit: 'mm',
          },
          width: {
            value: 1750,
            unit: 'mm',
          },
          height: {
            value: 1270,
            unit: 'mm',
          },
        },
        engines: [
          {
            id: '865b2c18-65e1-445d-9439-19b1d51c7899',
            brand: 'Honda',
            model: 'S2000',
            generation: 'S2000 (AP1)',
            modification_engine: '2.0 (240 Hp)',
            general_information: {
              start_of_production: 1999,
              end_of_production: 2004,
              powertrain_architecture: 'Internal Combustion engine',
              body_type: 'Cabriolet',
              seats: 2,
              doors: 2,
            },
            performance_specs: {
              fuel_consumption_economy_urban: {
                value: 13.2,
                unit: 'l/100km',
              },
              fuel_consumption_economy_extra_urban: {
                value: 7.9,
                unit: 'l/100km',
              },
              fuel_consumption_economy_combined: {
                value: 9.9,
                unit: 'l/100km',
              },
              co2_emissions: {
                value: 235,
                unit: 'g/km',
              },
              fuel_type: 'Petrol (Gasoline)',
              acceleration_0_100_km_h: {
                value: 6.2,
                unit: 'sec',
              },
              acceleration_0_62_mph: {
                value: 6.2,
                unit: 'sec',
              },
              maximum_speed: {
                value: 240,
                unit: 'km/h',
              },
              emission_standard: 'Euro 3',
              weight_to_power_ratio: '5.3 kg/Hp, 189 Hp/tonne',
              weight_to_torque_ratio: '6.1 kg/Nm, 163.8 Nm/tonne',
            },
            engine_specs: {
              power_hp: 240,
              power: {
                value: 240,
                unit: 'Hp',
                acquired_at_rpm: 8300,
              },
              power_per_litre: {
                value: 120.2,
                unit: 'Hp/l',
              },
              torque: {
                value: 208,
                unit: 'Nm',
                acquired_at_rpm: 7500,
              },
              engine_location: 'Front, Longitudinal',
              engine_model_code: 'F20C',
              engine_displacement: {
                value: 1997,
                unit: 'cm',
              },
              number_of_cylinders: 4,
              position_of_cylinders: 'Inline',
              cylinder_bore: {
                value: 87,
                unit: 'mm',
              },
              piston_stroke: {
                value: 84,
                unit: 'mm',
              },
              compression_ratio: 11,
              number_of_valves_per_cylinder: 4,
              fuel_system: 'Multi-point indirect injection',
              engine_aspiration: 'Naturally aspirated engine',
              valvetrain: 'DOHC',
            },
            space_volume_and_weights: {
              kerb_weight: {
                value: 1270,
                unit: 'kg',
              },
              max_weight: {
                value: 1535,
                unit: 'kg',
              },
              max_load: {
                value: 265,
                unit: 'kg',
              },
              trunk_boot_space_minimum: {
                value: 143,
                unit: 'liter',
              },
              fuel_tank_capacity: {
                value: 50,
                unit: 'liter',
              },
            },
            dimensions: {
              length: {
                value: 4135,
                unit: 'mm',
              },
              width: {
                value: 1750,
                unit: 'mm',
              },
              height: {
                value: 1270,
                unit: 'mm',
              },
              wheelbase: {
                value: 2400,
                unit: 'mm',
              },
              front_track: {
                value: 1470,
                unit: 'mm',
              },
              rear_back_track: {
                value: 1510,
                unit: 'mm',
              },
              ride_height_ground_clearance: {
                value: 129.3,
                unit: 'mm',
              },
              minimum_turning_circle_turning_diameter: {
                value: 11.4,
                unit: 'm',
              },
            },
            drivetrain_brakes_and_suspension_specs: {
              drivetrain_architecture:
                'The Internal combustion engine (ICE) drives the rear wheels of the vehicle.',
              drive_wheel: 'Rear wheel drive',
              number_of_gears_manual_transmission: 6,
              front_suspension: 'Double wishbone',
              rear_suspension: 'Double wishbone',
              front_brakes: 'Ventilated discs, 300 mm',
              rear_brakes: 'Disc, 282 mm',
              assisting_systems: 'ABS (Anti-lock braking system)',
              steering_type: 'Steering rack and pinion',
              power_steering: 'Electric Steering',
              tires_size:
                'Front wheel tires: 215/45 R17 89WRear wheel tires: 245/40 R17 92W',
              wheel_rims_size:
                'Front wheel rims: 7.0J x 17Rear wheel rims: 8.5J x 17',
            },
          },
        ],
      },
    ],
  },
};
const CarDetails = () => {
  const { model } = useParams();
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);

  //   const getModelData = async () => {
  //     try {
  //       const jsonData = await getModel(model);
  //       setData(jsonData.data.generations);
  //       setIsLoading(false);
  //     } catch (err) {
  //       setIsLoading(false);
  //     }
  //   };

  //   getModelData();
  // }, [model]);

  const content = (
    <>
      <DarkHeader />
      <section id='details'>
        <div className='inner-width'>
          <h1 className='section-title'>Honda {model}</h1>

          <img
            src={`/img/catalog-${model}.jpg`}
            className='about-pic'
            alt={model}
          />
          <div className='about-text'>
            <h2 className='view-message'>Choose Honda {model} generation from the list below to see additional specifications.</h2>
            <br />
            {data.data.generations.map((generation) => (
              <Link
                to={`/catalog/${model}/:gen`}
                className='sub-model'
                key={generation.id}
                title='Technical specifications, Fuel consumption, Dimensions'
              > 
                <h4>{generation.name}</h4>
                <p className='prod-years'>
                  {generation.yearsOfProduction.start} -{' '}
                  {generation.yearsOfProduction.end || 'Present'}
                  <strong>{generation.type}</strong>
                </p>
                <hr />
                <p>
                  {generation.power.value &&
                    `Power: ${generation.power.value}${generation.power.unit}`}
                  {generation.power.min?.value &&
                    `Power: from ${generation.power.min?.value} to ${generation.power.max?.value}${generation.power.min?.unit}`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
  return content;

  // return <>{isLoading ? <Loader /> : content}</>;
};

export default CarDetails;
