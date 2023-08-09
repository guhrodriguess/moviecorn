import * as Styles from "./styles";

import { w500 } from "@/utils";

export default function Card({ data }) {
    return (
        <Styles.Card>
            <img src={`${w500}${data.poster_path}`} alt={data.title} />
        </Styles.Card>
    );
}
