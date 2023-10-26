import { useDispatch, useSelector } from 'react-redux';
import { getCars, getCurrent, getFav } from 'redux/selectors';
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
  StyledInput,
  StyledPlaceH,
  Styles,
  StylesPrice,
  StyledSearchText,
} from './Catalog.styled';
import Modal from 'components/Modal/Modal';
import LoadMore from '../../components/LoadMore/LoadMore';
import Select from 'react-select';
import { optionsModel, optionsPrice } from './helpers';

const Catalog = () => {
  const cars = useSelector(getCars);
  const currentCars = useSelector(getCurrent);
  const [actualCars, setActualCars] = useState(currentCars);
  const [currentPrice, setCurrentPrice] = useState({
    value: 10000,
    label: 'All price',
  });
  const [currentPage, setCurrentPage] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [currentEl, setCurrentEl] = useState('');
  const [currentModel, setCurrentModel] = useState({
    value: 'All marks',
    label: 'All marks',
  });
  const [fromMiles, setFromMiles] = useState(0);
  const [toMiles, setToMiles] = useState(0);
  const dispatch = useDispatch();
  const favourite = useSelector(getFav);

  console.log(actualCars);
  useEffect(() => {
    let filteredCars = cars;
    if (currentModel.value !== 'All marks') {
      filteredCars = filteredCars.filter(el => el.make === currentModel.value);
    }
    if (currentPrice.label !== 'All price') {
      filteredCars = filteredCars.filter(
        el =>
          Number(el.rentalPrice.split('').slice(1).join('')) <=
          currentPrice.value
      );
    }
    if (fromMiles !== 0 || toMiles !== 0) {
      filteredCars = filteredCars.filter(
        ({ mileage }) =>
          Number(fromMiles) < mileage && mileage < Number(toMiles)
      );
    }
    if (filteredCars.length === cars.length) {
      setActualCars(currentCars);
      setCurrentPage(Math.max(currentCars.length / 12) + 1);
    } else {
      setActualCars(filteredCars);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentModel, currentPrice, cars, currentCars]);

  const onModelChange = model => {
    setCurrentModel(model);
  };

  const onPriceChange = price => {
    setCurrentPrice(price);
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

  const onSubmit = () => {
    const filteredCars = actualCars.filter(
      ({ mileage }) =>
        // console.log(Number(fromMiles) < mileage && mileage < Number(toMiles));
        Number(fromMiles) < mileage && mileage < Number(toMiles)
    );

    setActualCars(filteredCars);
  };

  return (
    <StyledBack>
      <div style={showModal ? { pointerEvents: 'none' } : {}}>
        <div
          style={{
            display: 'flex',
            gap: '18px',
            justifyContent: 'center',
            alignItems: 'end',
            margin: '50px 0',
          }}
        >
          <div>
            <StyledSearchText>Car brand</StyledSearchText>
            <Select
              styles={Styles}
              value={currentModel}
              onChange={value => onModelChange(value)}
              options={optionsModel}
              placeholder={currentModel}
            />
          </div>
          <div>
            <StyledSearchText>Price/ 1 hour</StyledSearchText>
            <Select
              styles={StylesPrice}
              value={currentPrice}
              onChange={value => onPriceChange(value)}
              options={optionsPrice}
              placeholder={currentPrice}
            />
          </div>
          <div>
            <StyledSearchText>Сar mileage / km</StyledSearchText>
            <div
              style={{
                position: 'relative',
                maxWidth: '320px',
                display: 'flex',
              }}
            >
              <StyledInput
                style={{
                  borderRight: '1px solid rgba(138, 138, 137, 0.2)',
                  borderRadius: '14px 0px 0px 14px',
                }}
                type="number"
                onChange={e => setFromMiles(e.target.value)}
              />
              <StyledPlaceH>From</StyledPlaceH>
              <StyledInput
                style={{
                  borderLeft: '1px solid rgba(138, 138, 137, 0.2)',
                  borderRadius: ' 0px 14px 14px 0px ',
                }}
                type="number"
                onChange={e => setToMiles(e.target.value)}
              />
              <StyledPlaceH
                style={{
                  left: '190px',
                }}
              >
                To
              </StyledPlaceH>
            </div>
          </div>
          <StyledBtn
            style={{
              maxWidth: '90px',
              height: '48px',
            }}
            onClick={() => onSubmit()}
          >
            Submit
          </StyledBtn>
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
              // if (index + 1 > currentPage) {
              //   return '';
              // }

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
        {Math.floor(actualCars.length / 12) >= currentPage - 1 ? (
          <LoadMore setCurrentPage={setCurrentPage} currentPage={currentPage} />
        ) : null}
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
