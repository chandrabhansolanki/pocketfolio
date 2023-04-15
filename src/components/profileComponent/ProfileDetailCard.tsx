import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {profileImage, profileEdit} from '../../Images/Images';
const ProfileDetailCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <TouchableOpacity>
          <View style={styles.profileContainer}>
            <Image source={profileImage} style={styles.profileImage} />
          </View>
        </TouchableOpacity>
        <View style={styles.userCardDetail}>
          <View>
            <Text style={styles.userName}>Chandra Bhan Singh</Text>
            <Text style={styles.userDetail}>Phone : 123456789</Text>
            <Text style={styles.userDetail}>Email : testing@gmail.com</Text>
          </View>
          <TouchableOpacity>
            <View>
              <Image source={profileEdit} style={styles.profileEdit} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 61,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    height: 105,
    borderRadius: 12,
    elevation: 2,
  },
  profileImage: {
    height: 50.28,
    width: 50.28,
  },
  profileContainer: {
    marginTop: -20,
    marginLeft: 14,
  },
  profileEdit: {
    height: 37,
    width: 37,
  },
  userCardDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems:"flex-end",
    paddingVertical:6
  },
  userName:{
    color:"#000000",
    fontSize:12,
    fontWeight: "800",
    lineHeight:18,
    fontFamily:'poppins'
  },
  userDetail:{
    color:'#000000',
    fontSize:10,
    fontWeight:'300',
    lineHeight:18,
    fontFamily:'poppins'
  }
});

export default ProfileDetailCard;
