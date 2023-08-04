import * as Styles from "./styles";

import { image_path } from "@/utils";

export default function TvCard({ data }) {
    return (
        <Styles.TvCard>
            <img src={`${image_path}${data.poster_path}`} alt={data.title} />
        </Styles.TvCard>
    );
}
