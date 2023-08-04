import * as Styles from "./styles";

import { image_path } from "@/utils";

export default function MovieCard({ data }) {
    return (
        <Styles.MovieCard>
            <img src={`${image_path}${data.poster_path}`} alt={data.title} />
        </Styles.MovieCard>
    );
}
