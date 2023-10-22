import { useDispatch, useSelector } from 'react-redux';
import { getCars, getFav } from 'redux/selectors';
import { deleteCarFav } from 'redux/CarSlice';

const Favorites = () => {
  const cars = useSelector(getCars);
  const favourite = useSelector(getFav);
  const getFavCars = () => {
    return cars.filter(({ id }) => {
      return favourite.includes(id);
    });
  };
  const dispatch = useDispatch();
  const onDeleteClick = e => {
    const elId = e.target.closest('li').id;
    dispatch(deleteCarFav(elId));
  };
  return (
    <div>
      <ul>
        {getFavCars().map(
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
              <li key={id} id={id}>
                <img
                  src={img || photoLink}
                  alt={make + model}
                  width={200}
                  height={200}
                />
                <p>id - {id}</p>
                <p>year - {year}</p>
                <p>make - {make}</p>
                <p>model - {model}</p>
                <p>type - {type}</p>
                <p>description - {description}</p>
                <button type="button" onClick={e => onDeleteClick(e)}>
                  Delete
                </button>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
export default Favorites;
