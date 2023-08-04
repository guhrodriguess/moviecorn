export interface MapProps {
    id: number;
    poster_path: string;
    title: string;
}

export interface DetailsProps {
    id?: string;
    backdropImage: string;
    vote: string;
    releaseDate: string;
    title: string;
    genres: string[] | number[];
    sinopse: string;
}

export interface HeaderProps {
    showMenu: boolean;
    setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}
