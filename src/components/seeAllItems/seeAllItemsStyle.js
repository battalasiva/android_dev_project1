import { StyleSheet } from "react-native";
import Config from "../../constants/Config";

export const styles = StyleSheet.create({
    serchBarContainer: {
        marginHorizontal: Config.deviceWidth * 0.02,
        marginVertical: Config.deviceWidth * 0.01,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        gap: 10,
        height: 38,
        position:"absolute",
        zIndex:10
      },
      backArrow: {
        backgroundColor: 'white',
        top:5,
        left:5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 50,
      },
})