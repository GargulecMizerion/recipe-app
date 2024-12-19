import {TouchableOpacity, Text} from "react-native";


const RecipeItem = ({title}) => {
    return (
        <TouchableOpacity>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default RecipeItem;