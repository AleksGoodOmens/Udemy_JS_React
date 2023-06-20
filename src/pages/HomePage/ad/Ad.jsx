import React from 'react';
import advertise from "../ad/ad1.png";
import styles from "./ad.module.scss";
import { Link } from 'react-router-dom';

const { ad, ad__btn } = styles

const data = [
  {
    button: {
      name: "get it",
      url: advertise
    }
  }
];

function Ad() {
  return (
    <article className={ad}>
      {/* <div className={ad__logo}>{data[0].logo}</div>
      <div className={ad__content}>
        <h2>{data[0].text}</h2>
        <a className={ad__btn} download href={data[0].button.url}>
          {data[0].button.name}
        </a>
      </div> */}
			<img src={data[0].button.url} alt="advertise" />
			<Link className={ad__btn} to="/wallpaper">{data[0].button.name}</Link>
    </article>
  );
}

export default Ad;
