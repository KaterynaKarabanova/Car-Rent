import { useDispatch, useSelector } from 'react-redux';
import { getCars, getFav } from 'redux/selectors';
import styles from './Catalog.module.css';
import { addCarFav, deleteCarFav } from 'redux/CarSlice';
import { useEffect, useState } from 'react';
import {
  StyledList,
  StyledItem,
  StyledImg,
  StyledBack,
  StyledBtn,
  StyledInfoDiv,
  StyledInfoText,
  StyledSvg,
  StyledText,
  StyledSpan,
} from './Catalog.styled';
import Modal from 'components/Modal/Modal';
import LoadMore from '../../components/LoadMore/LoadMore';
import Select from 'react-select';
const Catalog = () => {
  const cars = useSelector(getCars);
  const [actualCars, setActualCars] = useState(cars);
  const favourite = useSelector(getFav);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(12);
  const [showModal, setShowModal] = useState(false);
  const [currentEl, setCurrentEl] = useState('');
  const [currentModel, setCurrentModel] = useState({
    value: 'All marks',
    label: 'All marks',
  });
  useEffect(() => {
    if (currentModel.value === 'All marks') {
      // If 'All marks' is selected, no need to filter, so use the original 'cars' array
      console.log(currentModel);
      setActualCars(cars);
    } else {
      // Filter the cars based on the selected 'currentModel'

      const newCars = cars.filter(el => el.make === currentModel.value);
      setActualCars(newCars);
    }
  }, [currentModel, cars]);
  const optionsModel = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
  ].map(el => ({
    value: el,
    label: el,
  }));
  optionsModel.unshift({ value: 'All marks', label: 'All marks' });
  const onModelChange = model => {
    setCurrentModel(model);
  };
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
  const onLearnMoreClick = e => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
    setCurrentEl(e.target.closest('li').id);
  };
  const getCurrentEl = () => {
    return cars.find(({ id }) => id === currentEl);
  };
  return (
    <StyledBack>
      <div style={showModal ? { pointerEvents: 'none' } : {}}>
        <div
          style={{
            display: 'flex',
          }}
        >
          <Select
            // styles={styles}
            value={currentModel}
            onChange={value => onModelChange(value)}
            options={optionsModel}
            placeholder={currentModel}
          />
          <Select
            // styles={styles}
            value={currentModel}
            onChange={value => onModelChange(value)}
            options={optionsModel}
            placeholder={currentModel}
          />
        </div>
        <StyledList>
          {actualCars.map(
            (
              {
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
              },
              index
            ) => {
              if (index + 1 > currentPage) {
                return '';
              }

              return (
                <StyledItem key={id} id={id}>
                  <StyledImg
                    src={
                      img ||
                      photoLink ||
                      'https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?q=10&h=200'
                    }
                    alt={make + model}
                    width={200}
                    height={200}
                    onError={e => {
                      e.target.src =
                        'https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?q=10&h=200';
                    }}
                  />

                  <StyledText>
                    {make}
                    <StyledSpan>{model + ','}</StyledSpan>
                    {year}
                    <span
                      style={{
                        position: 'absolute',
                        top: '0',
                        right: '10px',
                      }}
                    >
                      {rentalPrice}
                    </span>
                  </StyledText>
                  <StyledInfoDiv>
                    <StyledInfoText>{address.split(',')[1]}</StyledInfoText>
                    <StyledInfoText>{address.split(',')[2]}</StyledInfoText>
                    <StyledInfoText>{rentalCompany}</StyledInfoText>
                    <StyledInfoText>{type}</StyledInfoText>
                    <StyledInfoText> {functionalities[1]}</StyledInfoText>
                    <StyledInfoText>{mileage}</StyledInfoText>
                    <StyledInfoText>{accessories[1]}</StyledInfoText>
                  </StyledInfoDiv>
                  <StyledSvg
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
                  </StyledSvg>
                  <StyledBtn type="button" onClick={e => onLearnMoreClick(e)}>
                    Learn More
                  </StyledBtn>
                </StyledItem>
              );
            }
          )}
        </StyledList>
        {actualCars.length > currentPage && (
          <LoadMore setCurrentPage={setCurrentPage} />
        )}
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          element={getCurrentEl()}
        />
      )}
    </StyledBack>
  );
};
export default Catalog;
