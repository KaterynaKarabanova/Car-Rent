import { useSelector } from 'react-redux';
import { getCars } from 'redux/selectors';

const Catalog = () => {
  const cars = useSelector(getCars);
  console.log(cars);
  return (
    <div>
      <h1>Catalog</h1>
      <ul>
        {cars.map(
          ({
            id,
            year,
            make,
            model,
            type,
            img,
            description,
            fuelConsumption,
            engineSize,
            accessories,
            functionalities,
            rentalPrice,
            rentalCompany,
            address,
            rentalConditions,
            mileage,
            photoLink,
          }) => {
            return (
              <li key={id}>
                <img src={img || photoLink} alt={make + model} />
                <p>id - {id}</p>
                <p>year - {year}</p>
                <p>make - {make}</p>
                <p>model - {model}</p>
                <p>type - {type}</p>
                <p>description - {description}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
export default Catalog;
