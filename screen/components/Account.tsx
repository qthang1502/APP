import {View, Text, TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const Account = ({navigation}: any) => {
    return(
        
        <SafeAreaView>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                <TouchableOpacity><Text style={{padding: 15, backgroundColor: 'pink', borderRadius: 15}} onPress={() => navigation.navigate('Login')}>Đăng nhập</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{padding: 15, backgroundColor: 'pink', borderRadius: 15}} onPress={() => navigation.navigate('Register')}>Đăng ký</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{padding: 15, backgroundColor: 'pink', borderRadius: 15}} onPress={() => navigation.navigate('BMI')}>BMI</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity><Text>Lịch sử mua hàng</Text></TouchableOpacity>
                <TouchableOpacity><Text>Chờ thanh toán</Text></TouchableOpacity>
                <TouchableOpacity><Text>Chờ vận chuyển</Text></TouchableOpacity>
                <TouchableOpacity><Text>Đơn hàng</Text></TouchableOpacity>
                <TouchableOpacity><Text>Đã giao</Text></TouchableOpacity>
                
            </View>
        </SafeAreaView>
        
    )
};

export default Account;