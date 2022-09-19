import { useSelector } from "react-redux";
import DescriptionScreen from "../../components/DescriptionScreen";

import { IAppState } from "../../types";

import DevsList from "../../components/DevsList";

export default function Favorites() {

    const { devsList, favorites } = useSelector((state: IAppState) => state.devs)

    if(favorites.length > 0) {

        const favoritesDevs = devsList.filter(item => favorites.includes(item.id));
        
        return <DevsList data={favoritesDevs} />
    }

    return(
        <DescriptionScreen
            image={require('../../assets/ilustrations/empty-favorites.png')}
            text="Ainda não há devs adicionados aos favoritos"
        />
    )
}