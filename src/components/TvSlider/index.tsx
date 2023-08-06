import { useState, useEffect } from "react";

import * as Styles from "./styles";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { fetchTopTv } from "@/api/tv";

import TvCard from "../TvCard";

import { MapProps } from "@/types";

export default function TvSlider() {
    const [topTv, setTopTv] = useState([]);

    useEffect(() => {
        fetchTopTv().then((response) => {
            setTopTv(response);
        });
    }, []);

    return (
        <Styles.Section>
            <Styles.Details>
                <h1>Tv</h1>
                <h3>Rankeados</h3>
            </Styles.Details>
            <Swiper
                navigation
                grabCursor={true}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    550: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    710: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                style={{ width: "100%", height: "max-content" }}
            >
                {topTv.map((tv: MapProps) => {
                    return (
                        <SwiperSlide key={tv.id}>
                            <Link to={`/tv/top/details/${tv.id}`}>
                                <TvCard data={tv} />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Styles.Section>
    );
}
