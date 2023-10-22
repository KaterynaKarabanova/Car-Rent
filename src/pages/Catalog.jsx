import { useDispatch, useSelector } from 'react-redux';
import { getCars, getFav } from 'redux/selectors';
import styles from './Catalog.module.css';
import { addCarFav, deleteCarFav } from 'redux/CarSlice';

const Catalog = () => {
  const cars = useSelector(getCars);
  const favourite = useSelector(getFav);
  const dispatch = useDispatch();

  const onHeartClick = e => {
    const elId = e.target.closest('li').id;
    if (!e.target.closest('li>svg').classList.contains(`${styles.disabled}`)) {
      dispatch(addCarFav(elId));
    } else {
      dispatch(deleteCarFav(elId));
    }
  };
  const isFav = id => {
    return favourite.includes(id);
  };
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={e => onHeartClick(e)}
                  className={isFav(id) ? styles.disabled : styles.active}
                >
                  <path
                    d="M20.8404 4.60987C20.3296 4.09888 19.7232 3.69352 19.0557 3.41696C18.3883 3.14039 17.6729 2.99805 16.9504 2.99805C16.2279 2.99805 15.5125 3.14039 14.845 3.41696C14.1776 3.69352 13.5711 4.09888 13.0604 4.60987L12.0004 5.66987L10.9404 4.60987C9.90867 3.57818 8.5094 2.99858 7.05036 2.99858C5.59133 2.99858 4.19206 3.57818 3.16036 4.60987C2.12867 5.64157 1.54907 7.04084 1.54907 8.49987C1.54907 9.95891 2.12867 11.3582 3.16036 12.3899L4.22036 13.4499L12.0004 21.2299L19.7804 13.4499L20.8404 12.3899C21.3514 11.8791 21.7567 11.2727 22.0333 10.6052C22.3098 9.93777 22.4522 9.22236 22.4522 8.49987C22.4522 7.77739 22.3098 7.06198 22.0333 6.39452C21.7567 5.72706 21.3514 5.12063 20.8404 4.60987Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
export default Catalog;
