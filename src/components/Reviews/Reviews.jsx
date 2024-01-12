import Slider from 'react-slick';
import { reviewers } from './data';
import ReviewsCard from 'components/ReviewsCard/ReviewsCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
const Reviews = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2>{t('reviews')}</h2>
      <Slider {...settings}>
        {reviewers.map(({ id, date, photo, comment }) => {
          return (
            <ReviewsCard
              key={id}
              id={id}
              date={date}
              photo={photo}
              comment={comment}
            />
          );
        })}
      </Slider>
    </div>
  );
};
export default Reviews;
