import {View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SmallButton from '../../../../components/Button/SmallButton';
import InputField from '../../../../components/InputField/InputField';

const FinanceData = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.textTitle}>Bank Details</Text>
        <InputField label="Bank Name :" />
        <InputField label="Bank Address :" />
        <InputField label="Swift Code :" />
        <InputField label="IBAN No. :" />
        <InputField label="Bank Account Holder Name :" />
        <InputField label="MICR Code :" />
        <View style={{alignItems: 'center', marginTop: 8, marginBottom: 24}}>
          <SmallButton buttonName="Update Bank Details" width={164} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 18,
    // justifyContent: 'center'
    marginVertical: 12,
  },
  textTitle: {
    color: '#2E498B',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 11,
    // color:
  },
});
export default FinanceData;
