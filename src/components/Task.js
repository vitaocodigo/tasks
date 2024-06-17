import react from "react"
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native"
import moment from "moment" 
import {Icon} from "react-native-vector-icons/Font"

export default props => {
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback>
        <View style={styles.check.container}>
            <View style={styles.done}>
                <Icon name="check" size={20} color="#fff"></Icon>
            </View>
        </View>
        </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.date}>{props.estimate_at}</Text>
                <Text style={styles.date}>{props.done_at}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: "#AAA",
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    checkContainer:{
        width: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
    done:{
        height: 25,
        width: 20,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#555"
    },
    desc:{
        fontFamily: "Arial",
        fontSize: 20,
        color: "#333"
    },
    date:{
        fontFamily: "Arial",
        color: "#555"
    }
})